using System.Collections.Generic;

namespace LawyerApp.Data.Entities
{
    public class Client
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public LawyerUser Lawyer { get; set; }
        public string LawyerId { get; set; }
        public ICollection<Case> Cases { get; set; }
    }
}
