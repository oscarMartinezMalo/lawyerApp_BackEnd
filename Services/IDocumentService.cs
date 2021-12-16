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
        Task<string> Upload(IFormFile formFile, string userIdentityName);
        byte[] GetDocumentByName(string documentName);
        byte[] GetDocumentByCompletePath(string filePath);
        void DeleteDocument(string documentName,string userIdentityName);
        List<string> ReadDocumentDetectVariables(string folderAndDocumentNamePath);
        List<string> ReadDocumentDetectVariables(string documentName, string directoryToStore);
        string ProcessAndCreateDocumentForUser(List<Object> values, string documentName, string userIdentityName);
        string ProcessAndCreateDocument(List<Object> values, string documentName, string directoryToStore);
        Task<FileNameVariablesDto> UploadProcessRetreiveVariables(IFormFile formFile);
    }
}
