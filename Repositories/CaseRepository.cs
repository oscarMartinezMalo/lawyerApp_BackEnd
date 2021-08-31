using LawyerApp.Data;
using LawyerApp.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LawyerApp.Repositories
{
    public class CaseRepository : ICaseRepository
    {
        private readonly LawyerAppContext ctx;

        public CaseRepository(LawyerAppContext ctx)
        {
            this.ctx = ctx;
        }

        public IEnumerable<Case> GetAllCases()
        {
            return ctx.Cases
                .OrderBy(c => c.Type)
                .ToList();
        }

        public IEnumerable<Case> GetAllCasesByUserName(string lawyerUserName)
        {
            return ctx.Cases
                .Where(c => c.Lawyer.UserName == lawyerUserName)
                .OrderBy(c => c.Type)
                .ToList();
        }

        public Case GetCaseById(int id)
        {
            return ctx.Cases
                .OrderBy(c => c.Type)
                .Include(c => c.Client)
                .Where(c => c.Id == id)
                .FirstOrDefault();
        }

        public IEnumerable<Case> GetCasesByType(string type)
        {
            return ctx.Cases
                 .Where(c => c.Type == type)
                 .ToList();
        }

        public void AddEntity(object model)
        {
            ctx.Add(model);
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
