using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
