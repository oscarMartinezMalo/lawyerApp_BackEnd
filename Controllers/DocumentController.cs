using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DocumentController : Controller
    {

        [HttpGet]
        [ActionName("")]
        public FileContentResult Get()
        {
            string filePath = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), "firstForm.docx");
            return File(System.IO.File.ReadAllBytes(filePath), "application/octet-stream", "firstForm.docx");
        }

        [HttpPost]
        [ActionName("")]
        public IActionResult Post(IFormFile document)
        {
            //var httpRequest = HttpContext.Request.Form;
            //if (httpRequest.Files.Count < 1) return BadRequest("You have to attach a document");

            string uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "documents");
            var uniqueFileName = DateTime.Now.ToString("yyyyMMddTHH-mm-ssZ")  + "_" + Guid.NewGuid().ToString() + "_" + document.FileName;
            string fileAddress = Path.Combine(uploadFolder, uniqueFileName);

            document.CopyTo(new FileStream(fileAddress, FileMode.Create));

            return Ok("File successfully submited!!!");
        }

        [HttpPost]
        [ActionName("uploadFiles")]
        public IActionResult Post(IList<IFormFile> document)
        {
            return Ok();
        }
    }
}
