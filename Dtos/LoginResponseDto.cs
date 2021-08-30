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
        public string Email { get; set; }
        [Required]
        public string Role { get; set; }
    }
}
