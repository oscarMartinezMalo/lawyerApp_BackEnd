using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class LoginResponseDto
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }

        public IList<string> Roles { get; set; }
        public IList<string> Claims { get; set; }
    }
}
