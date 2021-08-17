using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class LoginResponseViewModel
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string role { get; set; }
    }
}
