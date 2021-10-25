using LawyerApp.Data;
using LawyerApp.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
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

        public IEnumerable<Client> GetClients(string query, string lawyerUserName)
        {
            var clientsQuery = new List<Client>();

            if (!String.IsNullOrWhiteSpace(query))
            {
                clientsQuery = ctx.Clients.Where(c => c.Lawyer.UserName == lawyerUserName && 
                                                (c.FirstName + ' ' + c.LastName).Contains(query)).ToList();
            }

            return clientsQuery;
        }

        public IEnumerable<Client> GetAllClientsByLawyerUser(bool includesCases, string lawyerUserName)
        {
            if (includesCases)
            {
                return ctx.Clients
                    .Where(c => c.Lawyer.UserName == lawyerUserName)
                    .OrderBy(cl => cl.FirstName)
                    .Include(cl => cl.Cases)
                    .ToList();
            }
            else
            {
                return ctx.Clients
                    .Where(c => c.Lawyer.UserName == lawyerUserName)
                    .OrderBy(cl => cl.FirstName)
                    .ToList();
            }
        }


        public Client FindClientById(int id, string lawyerName)
        {
             return ctx.Clients.
                FirstOrDefault(c => c.Lawyer.UserName == lawyerName && c.Id == id);
        }

        public void Delete(Client clientToDelete)
        {
            ctx.Clients.Remove(clientToDelete);
        }

        public bool SaveAll()
        {
            return ctx.SaveChanges() > 0;
        }
    }
}
