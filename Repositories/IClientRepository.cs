using LawyerApp.Data.Entities;
using System.Collections.Generic;

namespace LawyerApp.Repositories
{
    public interface IClientRepository
    {
        //void AddEntity(object model);
        IEnumerable<Client> GetAllClients();
        IEnumerable<Client> GetAllClients(bool includesCases);
        IEnumerable<Client> GetAllClientsByLawyerUser(bool includesCases, string lawyerUserName);
        Client GetClientById(int id);
        IEnumerable<Client> GetClientsByFirstName(string firstName);
        IEnumerable<Client> GetClients(string query, string lawyerUserName);
        Client FindClientById(int id, string lawyerName);
        void Delete(Client clientToDelete);
        bool SaveAll();
    }
}