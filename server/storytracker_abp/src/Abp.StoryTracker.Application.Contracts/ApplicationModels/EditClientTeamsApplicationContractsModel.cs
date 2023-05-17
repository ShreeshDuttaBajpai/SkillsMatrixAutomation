using System;
using System.Collections.Generic;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class EditClientTeamsApplicationContractsModel
    {
        public int Id { get; set; }
        public string? ClientName { get; set; }
        public string? ClientDescription { get; set; }
        public DateTime ModifiedOn = DateTime.Now;
        public List<TeamMasterApplicationContractsModel>? Teams { get; set; }
    }
}
