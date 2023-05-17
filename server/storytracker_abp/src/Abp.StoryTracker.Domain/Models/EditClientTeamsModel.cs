using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class EditClientTeamsModel
    {
        public int Id { get; set; }
        public string? ClientName { get; set; }
        public string? ClientDescription { get; set; }
        public DateTime ModifiedOn {get; set; }
        public List<TeamMasterModel>? TeamMasterList { get; set; }
    }
}
