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
            throw new NotImplementedException();
        }

        public IEnumerable<Document> GetAllDocumentsByLawyerUser(string lawyerUserName)
        {
            return ctx.Documents
             .Where(d => d.Lawyer.UserName == lawyerUserName)
             .OrderBy(d => d.DateCreated)
             .ToList();
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
