﻿using LawyerApp.Data.Entities;
using System.Collections.Generic;

namespace LawyerApp.Repositories
{
    public interface ICaseRepository
    {
        IEnumerable<Case> GetAllCases();
        IEnumerable<Case> GetAllCasesByUserName(string lawyerUserName);
        Case GetCaseById(int id);
        IEnumerable<Case> GetCasesByType(string type);

        void AddEntity(object model);
        bool SaveAll();
    }
}