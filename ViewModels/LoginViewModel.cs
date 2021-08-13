﻿using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public bool Rememberme { get; set; }
    }
}
