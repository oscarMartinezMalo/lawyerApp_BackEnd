using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class RoleDto
    {
        public string id { get; set; }
        [Required]
        public string name { get; set; }
    }
}
