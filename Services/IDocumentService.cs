using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Services
{
    public interface IDocumentService
    {
        string Upload(IFormFile formFile);
        byte[] GetDocumentByName(string fileName);
    }
}
