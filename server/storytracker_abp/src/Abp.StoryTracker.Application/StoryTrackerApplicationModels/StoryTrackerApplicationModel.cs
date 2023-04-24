using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.StoryTrackerApplicationModels
{
    public class StoryTrackerApplicationModel
    {
        [Key]
        public string? Ticket_no { get; set; }
        public string? Team { get; set; }
        public string? Name { get; set; }
        public string? Ticket_type { get; set; }
        public int Story_point { get; set; }
        public DateTime Start_date { get; set; }
        public DateTime End_date { get; set; }
        public int Hours { get; set; }
        public string? Status { get; set; }
        public string? Code_reviewer { get; set; }
    }
}
