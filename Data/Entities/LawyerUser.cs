using Microsoft.AspNetCore.Identity;

namespace LawyerApp.Data.Entities
{
    public class LawyerUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
