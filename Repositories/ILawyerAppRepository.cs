using LawyerApp.Data.Entities;
using System.Collections.Generic;

namespace LawyerApp.Data
{
    public interface ILawyerAppRepository
    {
        // Case //
        IEnumerable<Case> GetAllCasesByUserName(string lawyerUserName);
        IEnumerable<Case> GetAllCases();
        IEnumerable<Case> GetCasesByType(string type);
        Case GetCaseById(int id);

        // Client //
        IEnumerable<Client> GetAllClients();
        IEnumerable<Client> GetClientsByFirstName(string type);
        Client GetClientById(int id);

        void AddEntity(object model);
        bool SaveAll();
        IEnumerable<Client> GetAllClients(bool includesCases);
    }
}