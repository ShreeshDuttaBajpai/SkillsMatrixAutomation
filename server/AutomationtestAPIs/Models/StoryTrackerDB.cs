using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AutomationtestAPIs.Models
{
    public class StoryTrackerDB
    {
        public int Serial_no { get; set; }
        public string Client { get; set; }
        public string Team { get; set; }
        public string Name { get; set; } 
        [Key]
        [Required]
        public string Ticket_no { get; set; }
        public string Ticket_type { get; set; }
        public int Story_point { get; set; }
        public DateTime Start_date { get; set; }
        public DateTime End_date { get; set; }
        public int Hours { get; set; }
        public string Status { get; set; }
        public string Code_reviewer { get; set; }
        public string Code_deviation_count { get; set; }
        public string Bugs_count { get; set; }
        public string Remarks { get; set; }

    }
}
