using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class TeamMasterApplicationContractsModel
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string TeamName { get; set; }
        public string TeamDescription { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
