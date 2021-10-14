using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DocumentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        [ActionName("")]
        public FileContentResult Get()
        {
            string filePath = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), "firstForm.docx");
            return File(System.IO.File.ReadAllBytes(filePath), "application/octet-stream", "firstForm.docx");
        }
    }
}
