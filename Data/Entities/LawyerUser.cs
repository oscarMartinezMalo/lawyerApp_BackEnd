using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace LawyerApp.Data.Entities
{
    public class LawyerUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Client> Clients { get; set; }
    }
}
