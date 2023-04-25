using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class TeamMasterApplicationContractsModel
    {
        [Key]
        public int TeamId { get; set; }

        public int? ClientIdFK { get; set; }
        [ForeignKey(nameof(ClientIdFK))]
        public ClientMasterApplicationContractsModel? ClientMasterApplicationModel { get; set; }

        [Required]
        public string TeamName { get; set; }
        [Required]
        public string TeamDescription { get; set; }
    }
}
