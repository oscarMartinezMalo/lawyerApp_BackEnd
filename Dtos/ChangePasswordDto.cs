using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class ChangePasswordDto
    {
        [Required]
        public string currentPassword { get; set; }
        [Required]
        public string newPassword { get; set; }
        [Required]
        public string retypePassword { get; set; }
    }
}
