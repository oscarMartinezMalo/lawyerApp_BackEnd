﻿using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class UserLawyerDto
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
    }

    public class UserIdRoleIdDto
    {
        public string roleId { get; set; }
        public string userId { get; set; }
    }
}
