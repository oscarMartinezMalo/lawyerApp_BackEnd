using LawyerApp.Data.Entities;
using System.Collections.Generic;

namespace LawyerApp.Repositories
{
    public interface IClientRepository
    {
        void AddEntity(object model);
        IEnumerable<Client> GetAllClients();
        IEnumerable<Client> GetAllClients(bool includesCases);
        Client GetClientById(int id);
        IEnumerable<Client> GetClientsByFirstName(string firstName);
        IEnumerable<Client> GetClients(string query, string lawyerUserName);
        bool SaveAll();
    }
}