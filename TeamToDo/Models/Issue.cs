using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamToDo.Models
{
    public class Issue
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public DateTime Created { get; set; }
        public bool Completed { get; set; }
    }
}
