using LawyerApp.Data.Entities;
using LawyerApp.Persistent;
using LawyerApp.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
    public class DocumentsController : Controller
    {
        private readonly IDocumentService documentService;
        private readonly IUnitOfWork unitOfWork;
        private readonly UserManager<LawyerUser> userManager;

        public DocumentsController(
            IDocumentService documentService,
            IUnitOfWork unitOfWork,
            UserManager<LawyerUser> userManager
            )
                {
            this.documentService = documentService;
            this.unitOfWork = unitOfWork;
            this.userManager = userManager;
        }

        // Get document by document Name
        [HttpGet]
        [ActionName("")]
        public FileContentResult Get(string fileName = "firstForm.docx")
        {
            return File(this.documentService.GetFileByName(fileName), "application/octet-stream", fileName);
        }

        [HttpPost]
        [ActionName("")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Post(IFormFile document)
        {
            LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
            try
            {
                // Save file in folder directory
                string directoryFileName = this.documentService.Upload(document);

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
            catch (Exception)
            {
                return BadRequest("File was not saved");
            }

            return Ok("File successfully submited!!!");
        }

        [HttpPost]
        [ActionName("uploadFileAnonymous")]
        public IActionResult UploadFileAnonymous(IFormFile document)
        {
            try
            {
                // Save file in folder directory
                string directoryFileName = this.documentService.Upload(document);

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

        // Get document by ID
        // Delete document
        //


        //[HttpPost]
        //[ActionName("uploadFiles")]
        //public IActionResult Post(IList<IFormFile> document)
        //{
        //    return Ok();
        //}
    }
}
