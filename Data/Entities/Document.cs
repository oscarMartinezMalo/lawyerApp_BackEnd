using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Data.Entities
{
    public class Document
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameInDirectory { get; set; }
        public DateTime DateCreated { get; set; }
        public long Size { get; set; }
        public LawyerUser Lawyer { get; set; }
        public string LawyerId { get; set; }
    }
}
