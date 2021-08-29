﻿using System;
using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class CaseViewModel
    {
        public int Id { get; set; }
        [Required]
        [MinLength(4)]
        public string CaseNumber { get; set; }
        [Required]
        public string Type { get; set; }
        public DateTime CreatedDate { get; set; }
        //public Client Client { get; set; }
        [Required]
        public int ClientId { get; set; }
        [Required]
        public string LawyerId { get; set; }
    }
}