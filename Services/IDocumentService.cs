using LawyerApp.Dtos;
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
        byte[] GetDocumentByCompletePath(string filePath);
        void DeleteDocument(string documentName);
        List<string> ReadDocumentDetectVariables(string documentName);
        List<string> ReadDocumentDetectVariables(string documentName, string directoryToStore);
        string ProcessAndCreateDocument(List<Object> values, string documentName);
        string ProcessAndCreateDocument(List<Object> values, string documentName, string directoryToStore);
        Task<FileNameVariablesDto> UploadProcessDownload(IFormFile formFile);
    }
}
