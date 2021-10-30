using LawyerApp.Data.Entities;
using LawyerApp.Persistent;
using LawyerApp.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace LawyerApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class DocumentsController : Controller
    {
        private readonly IDocumentService documentService;
        private readonly IUnitOfWork unitOfWork;
        private readonly ILogger<DocumentsController> logger;
        private readonly UserManager<LawyerUser> userManager;

        public DocumentsController(
            IDocumentService documentService,
            IUnitOfWork unitOfWork,
            ILogger<DocumentsController> logger,
            UserManager<LawyerUser> userManager
            )
        {
            this.documentService = documentService;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
            this.userManager = userManager;
        }

        // Get document by document Name
        [HttpGet("{id}")]
        [ActionName("GetDocumentById")]
        public async Task<FileContentResult> GetDocumentById(int id)
        {
            LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
            var document = this.unitOfWork.Documents.GetDocumentById(id, user.Id);

            return File(this.documentService.GetDocumentByName(document.NameInDirectory), "application/octet-stream", document.Name);
        }

        [HttpGet]
        [ActionName("getAllDocumentsOfLawyer")]
        public ActionResult<IEnumerable<Document>> GetAllDocumentsByUser()
        {
            try
            {
                var lawyerUserName = User.Identity.Name;

                var documents = unitOfWork.Documents.GetAllDocumentsByLawyerUser(lawyerUserName);
                return Ok(documents);
                //return Ok(mapper.Map<IEnumerable<Client>, IEnumerable<ClientDto>>(results));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Documents: {ex}");
                return BadRequest("Failed to get Documents");
            }
        }

        [HttpPost]
        [ActionName("")]
        public async Task<IActionResult> UploadFileForUser(IFormFile document)
        {
            LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
            try
            {
                // Save file in folder directory
                string directoryFileName = await this.documentService.Upload(document);

                // Save information of the file in database
                var newDocument = new Document
                {
                    Name = document.FileName,
                    NameInDirectory = directoryFileName,
                    DateCreated = DateTime.Now,
                    Size = document.Length,
                    LawyerId = user.Id
                };

                unitOfWork.AddEntity(newDocument);
                if (unitOfWork.Complete())
                {
                    return Created($"/api/documents/{newDocument.Id}", document);
                }
            }
            catch (Exception ex)
            {
                logger.LogError("Error", ex);
                return BadRequest("File was not saved");
            }

            return Ok("File successfully submited!!!");
        }

        [HttpPost]
        [ActionName("uploadFileAnonymous")]
        [AllowAnonymous]
        public async Task<IActionResult> UploadFileAnonymous(IFormFile document)
        {
            try
            {
                // Save file in folder directory
                string directoryFileName = await this.documentService.Upload(document);

                // Save information of the file in database
                var newDocument = new Document
                {
                    Name = document.FileName,
                    NameInDirectory = directoryFileName,
                    DateCreated = DateTime.Now,
                    Size = document.Length,
                };

                unitOfWork.AddEntity(newDocument);
                if (unitOfWork.Complete())
                {
                    return Created($"/api/documents/{newDocument.Id}", document);
                }
            }
            catch (Exception)
            {
                return BadRequest("File was not saved");
            }

            return Ok("File successfully submited!!!");
        }

        // DELETE api/<DocumentsController>/5
        [HttpDelete("{id}")]
        [ActionName("delete")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
                var documentToDelete = this.unitOfWork.Documents.GetDocumentById(id, user.Id);

                if (documentToDelete == null) return NotFound();

                this.unitOfWork.Documents.Delete(documentToDelete);   // Delete Document from Database
                if (!unitOfWork.Complete()) return BadRequest("Failed to delete Document");

                this.documentService.DeleteDocument(documentToDelete.NameInDirectory);  // Delete document from document directory

                return Ok();
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to save new Client: {ex}");
                return BadRequest("Failed to delete Document");
            }
        }

        [HttpGet("{id}")]
        [ActionName("getDocumentInfoById")]
        public async Task<Document> GetDocumentInfoById(int id)
        {
            LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
            var document = this.unitOfWork.Documents.GetDocumentById(id, user.Id);
            return document;
        }

        [HttpGet("{id}")]
        [ActionName("getVariablesOfDocument")]
        public async Task<IEnumerable<string>> GetAllDocumentsByUser(int id)
        {
            LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
            var document = this.unitOfWork.Documents.GetDocumentById(id, user.Id);

            var result = this.documentService.ReadDocumentDetectVariables(document.NameInDirectory);
            return result;
        }


        [HttpPost("{documentId}")]
        [ActionName("fillAndDownloadDocument")]
        public async Task<FileContentResult> FillAndDownloadDocument(int documentId, [FromBody] List<Object> listVariables)
        {
            LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
            var document = this.unitOfWork.Documents.GetDocumentById(documentId, user.Id);

            // Process document and get the path of new document generated
            string pathToDocumentGenerated = this.documentService.ProcessAndCreateDocument(listVariables, document.NameInDirectory);

            // Return physical document to the user
            return File(this.documentService.GetDocumentByCompletePath(pathToDocumentGenerated), "application/octet-stream", document.Name);
        }
    }

}
