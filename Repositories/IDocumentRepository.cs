using LawyerApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Repositories
{
    public interface IDocumentRepository
    {
        IEnumerable<Document> GetAllDocuments();
        void Delete(Document document);
        bool SaveAll();
    }
}
