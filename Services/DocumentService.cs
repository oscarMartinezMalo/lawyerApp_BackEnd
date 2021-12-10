using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using SautinSoft.Document;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;
using LawyerApp.Dtos;

namespace LawyerApp.Services
{
    public class DocumentService : IDocumentService
    {
        private ILogger<DocumentService> logger;

        public DocumentService( ILogger<DocumentService> logger)
        {
            this.logger = logger;
        }

        public async Task<string> Upload(IFormFile formFile)
        {
            string uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "documents");

            //Create directory if not exits
            if (!Directory.Exists(uploadFolder)) Directory.CreateDirectory(uploadFolder);


            var uniqueFileName = DateTime.Now.ToString("yyyyMMddTHH-mm-ssZ") + "_" + Guid.NewGuid().ToString() + "_" + formFile.FileName;
            string fileAddress = Path.Combine(uploadFolder, uniqueFileName);

            //formFile.CopyTo(new FileStream(fileAddress, FileMode.Create));


            using (Stream fileStream = new FileStream(fileAddress, FileMode.Create))
            {
                await formFile.CopyToAsync(fileStream);
            }

            // Get the variables from the document
            //this.ReadDocumentDetectVariables(uniqueFileName);

            return uniqueFileName;
        }

        public byte[] GetDocumentByName(string documentName)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "documents", documentName);
            return File.ReadAllBytes(filePath);
        }

        public byte[] GetDocumentByCompletePath(string filePath)
        {
            return File.ReadAllBytes(filePath);
        }

        public void DeleteDocument(string documentName)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "documents", documentName);
            File.Delete(filePath);
        }

        public List<string> ReadDocumentDetectVariables(string documentName)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "documents", documentName);
            DocumentCore dc = DocumentCore.Load(filePath);

            var regExp = @"\{{(.*?)\}}";  // Select what is between {{ example }}
            Regex regularExpression = new Regex(regExp);

            var result = dc.Content.Find(regularExpression)
                .Select(d => d.ToString())
                .Select( w => w.Substring(2, w.Length-4))
                .ToList();

            var listNoDuplicate = result.Distinct().ToList();

            return listNoDuplicate;
        }

        public List<string> ReadDocumentDetectVariables(string documentName, string directoryToStore)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), directoryToStore, documentName);
            DocumentCore dc = DocumentCore.Load(filePath);

            var regExp = @"\{{(.*?)\}}";  // Select what is between {{ example }}
            Regex regularExpression = new Regex(regExp);

            var result = dc.Content.Find(regularExpression)
                .Select(d => d.ToString())
                .Select(w => w.Substring(2, w.Length - 4))
                .ToList();

            var listNoDuplicate = result.Distinct().ToList();

            return listNoDuplicate;
        }

        public string ProcessAndCreateDocument( List<Object> listVariables,string documentName)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "documents", documentName);
            DocumentCore dc = DocumentCore.Load(filePath);

            foreach (var variableObj in listVariables)
            {
                // Get the key and value of the object
                var testing = Newtonsoft.Json.JsonConvert.SerializeObject(variableObj);
                var jobj = JObject.Parse(testing);
                var oldValue ="{{" + jobj.Properties().First().Name + "}}";
                var newValue = jobj.Properties().First().Value.ToString();
                // Get the key and value of the object

                // Replace the old words with the new words
                foreach (ContentRange item in dc.Content.Find(oldValue))
                {
                    item.Replace(newValue);
                }
                //dc.Content.Find(oldValue).Reverse().FirstOrDefault()
                //          .Replace(newValue);
            }

            //Create directory if not exits
            var directoryFile = Path.Combine(Directory.GetCurrentDirectory(), "documents\\temp");
            if (!Directory.Exists(directoryFile)) Directory.CreateDirectory(directoryFile);

            string newDocumentFilePath = Path.Combine(directoryFile, documentName); // Create a path to save Document

            dc.Save(newDocumentFilePath, new DocxSaveOptions());  // Save Document as Word in temp file
            return newDocumentFilePath;
        }

        public async Task<FileNameVariablesDto> UploadProcessRetreiveVariables(IFormFile formFile)
        {
            // Save file on file system
            string uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "documents/anonymous/");

            //Create directory if not exits
            if (!Directory.Exists(uploadFolder)) Directory.CreateDirectory(uploadFolder);

            var uniqueFileName = DateTime.Now.ToString("yyyyMMddTHH-mm-ssZ") + "_" + Guid.NewGuid().ToString() + "_" + formFile.FileName;
            string fileAddress = Path.Combine(uploadFolder, uniqueFileName);

            using (Stream fileStream = new FileStream(fileAddress, FileMode.Create))
            {
                await formFile.CopyToAsync(fileStream);
            }
            
            // Get variables from the files
            var fileVariables = this.ReadDocumentDetectVariables(uniqueFileName, "documents/anonymous");

            var result = new FileNameVariablesDto() { FileName = uniqueFileName, FileVariables = fileVariables };

            return result;
        }

        public string ProcessAndCreateDocument(List<object> listVariables, string documentName, string directoryToStore)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), directoryToStore, documentName);
            DocumentCore dc = DocumentCore.Load(filePath);

            foreach (var variableObj in listVariables)
            {
                // Get the key and value of the object
                var testing = Newtonsoft.Json.JsonConvert.SerializeObject(variableObj);
                var jobj = JObject.Parse(testing);
                var oldValue = "{{" + jobj.Properties().First().Name + "}}";
                var newValue = jobj.Properties().First().Value.ToString();
                // Get the key and value of the object

                // Replace all the old words with the new word
                foreach (ContentRange item in dc.Content.Find(oldValue))
                {
                    item.Replace(newValue);
                }                          
            }

            //Create directory if not exits
            var directoryFile = Path.Combine(Directory.GetCurrentDirectory(), "documents\\temp");
            if (!Directory.Exists(directoryFile)) Directory.CreateDirectory(directoryFile);

            string newDocumentFilePath = Path.Combine(directoryFile, documentName); // Create a path to save Document

            dc.Save(newDocumentFilePath, new DocxSaveOptions());  // Save Document as Word in temp file
            return newDocumentFilePath;
        }
    }
}
