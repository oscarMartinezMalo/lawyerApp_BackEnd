using LawyerApp.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace LawyerApp.Data
{
    public class LawyerAppRepository : ILawyerAppRepository
    {
        private readonly LawyerAppContext ctx;
        private readonly ILogger<LawyerAppRepository> logger;

        public LawyerAppRepository(
            LawyerAppContext ctx,
            ILogger<LawyerAppRepository> logger)
        {
            this.ctx = ctx;
            this.logger = logger;
        }
        // Case //
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


        // Client //
        public IEnumerable<Client> GetAllClients()
        {
            return ctx.Clients
                .OrderBy(cl => cl.FirstName)
                .Include(cl => cl.Cases)
                .ToList();
        }

        public IEnumerable<Client> GetAllClients(bool includesCases)
        {
            if (includesCases)
            {
                return ctx.Clients
                                .OrderBy(cl => cl.FirstName)
                                .Include(cl => cl.Cases)
                                .ToList();
            }
            else
            {
                return ctx.Clients
                    .OrderBy(cl => cl.FirstName)
                    .ToList();
            }

        }

        public IEnumerable<Client> GetClientsByFirstName(string firstName)
        {
            return ctx.Clients
                 .Where(cl => cl.FirstName == firstName)
                 .ToList();
        }

        public Client GetClientById(int id)
        {
            return ctx.Clients
                .OrderBy(cl => cl.FirstName)
                .Include(cl => cl.Cases)
                .Where(cl => cl.Id == id)
                .FirstOrDefault();
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
