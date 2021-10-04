using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class RoleDto
    {
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }

        public List<UserDto> Users { get; set; }
    }
}
