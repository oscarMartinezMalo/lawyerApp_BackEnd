using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class SignupViewModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
