﻿using LawyerApp.Data;
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

        public IEnumerable<Case> GetAllCasesByLawyer(string lawyerName)
        {
            var clients = ctx.Users.Where(u => u.UserName == lawyerName)
                 .SelectMany(u => u.Clients);

            return clients.SelectMany(c => c.Cases)
                .Include(c => c.Client)
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

        public Case FindCaseById(int id, string lawyerName)
        {
            // Get all cases that belongs to this layer
            var allCasesOfLawyer = ctx.Users.Where(u => u.UserName == lawyerName)
                 .SelectMany(u => u.Clients).SelectMany(c => c.Cases)
                .Include(c => c.Client);

            // Check if this layer has a case with this Id
            return allCasesOfLawyer.FirstOrDefault(c => c.Id == id);
        }

        public void Delete(Case caseToDelete)
        {
            ctx.Cases.Remove(caseToDelete);
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
