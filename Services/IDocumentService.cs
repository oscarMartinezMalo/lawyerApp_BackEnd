using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Services
{
    interface IDocumentService
    {
        void Upload(IFormFile formFile);
    }
}
