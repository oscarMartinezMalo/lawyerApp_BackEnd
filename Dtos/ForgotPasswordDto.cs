using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class ForgotPasswordDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
