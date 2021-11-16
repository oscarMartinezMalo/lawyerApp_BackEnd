using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Dtos
{
    public class FileIdFileVariablesDto
    {
        public int FileId { get; set; }
        public List<string> FileVariables { get; set; }
    }
}
