using LawyerApp.Data;
using LawyerApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Repositories
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly LawyerAppContext ctx;

        public DocumentRepository(LawyerAppContext ctx)
        {
            this.ctx = ctx;
        }

        public void Delete(Document document)
        {
            ctx.Documents.Remove(document);
        }

        public IEnumerable<Document> GetAllDocumentsByLawyerUser(string lawyerUserName)
        {
            return ctx.Documents
             .Where(d => d.Lawyer.UserName == lawyerUserName)
             .OrderBy(d => d.DateCreated)
             .ToList();
        }

        public Document GetDocumentById(int documentId, string userId)
        {
            return ctx.Documents
                .Where(d => d.Id == documentId && d.LawyerId == userId)
                .FirstOrDefault();
        }

        public Document GetDocumentByIdAnonymous(int documentId)
        {
            return ctx.Documents
                .Where(d => d.Id == documentId && d.LawyerId == null)
                .FirstOrDefault();
        }

    public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
