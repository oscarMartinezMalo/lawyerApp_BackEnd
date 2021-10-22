using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Services
{
    public class DocumentService : IDocumentService
    {
        private ILogger<DocumentService> logger;

        public DocumentService( ILogger<DocumentService> logger)
        {
            this.logger = logger;
        }

        public string Upload(IFormFile formFile)
        {
            string uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "documents");
            var uniqueFileName = DateTime.Now.ToString("yyyyMMddTHH-mm-ssZ") + "_" + Guid.NewGuid().ToString() + "_" + formFile.FileName;
            string fileAddress = Path.Combine(uploadFolder, uniqueFileName);

            formFile.CopyTo(new FileStream(fileAddress, FileMode.Create));

            return uniqueFileName;
        }

        public byte[] GetDocumentByName(string fileName)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "documents", fileName);
            return File.ReadAllBytes(filePath);
        }
    }
}
