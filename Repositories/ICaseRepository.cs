using LawyerApp.Data.Entities;
using System.Collections.Generic;

namespace LawyerApp.Repositories
{
    public interface ICaseRepository
    {
        IEnumerable<Case> GetAllCases();
        IEnumerable<Case> GetAllCasesByLawyer(string clientName);
        Case GetCaseById(int id);
        IEnumerable<Case> GetCasesByType(string type);
        Case FindCaseById(int id, string lawyerName);

        void Delete(Case model);
        void AddEntity(object model);
        bool SaveAll();
    }
}