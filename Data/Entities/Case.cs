using System;

namespace LawyerApp.Data.Entities
{
    public class Case
    {
        public int Id { get; set; }
        public string CaseNumber { get; set; }
        public string Type { get; set; }
        public DateTime CreatedDate { get; set; }
        public Client Client { get; set; }
        public int ClientId { get; set; }
        public LawyerUser Lawyer { get; set; }
        public string LawyerId { get; set; }
    }
}
