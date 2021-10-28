using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Services
{
    public interface IDocumentService
    {
        Task<string> Upload(IFormFile formFile);
        byte[] GetDocumentByName(string documentName);
        void DeleteDocument(string documentName);
        List<string> ReadDocumentDetectVariables(string documentName);
    }
}
