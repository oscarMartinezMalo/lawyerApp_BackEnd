using System;
using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class CaseDto
    {
        public int Id { get; set; }
        [Required]
        [MinLength(4)]
        public string CaseNumber { get; set; }
        [Required]
        public string Type { get; set; }
        public DateTime CreatedDate { get; set; }
        [Required]
        public int ClientId { get; set; }
    }
}
