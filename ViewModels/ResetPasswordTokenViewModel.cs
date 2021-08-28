using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class ResetPasswordTokenViewModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string ForgotPasswordToken { get; set; }
    }
}
