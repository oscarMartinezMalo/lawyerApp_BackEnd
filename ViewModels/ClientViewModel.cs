using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LawyerApp.ViewModels
{
    public class ClientViewModel
    {
        public int Id { get; set; }
        [Required]
        [MinLength(3)]
        public string FirstName { get; set; }
        [Required]
        [MinLength(3)]
        public string LastName { get; set; }
        [Required]
        [MinLength(5)]
        public string Address { get; set; }
        [Required]
        [MinLength(6)]
        public string Phone { get; set; }
        public ICollection<CaseViewModel> Cases { get; set; }
    }
}
