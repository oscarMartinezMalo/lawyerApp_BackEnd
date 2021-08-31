using LawyerApp.Data;
using LawyerApp.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LawyerApp.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly LawyerAppContext ctx;

        public ClientRepository(LawyerAppContext ctx)
        {
            this.ctx = ctx;
        }

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
