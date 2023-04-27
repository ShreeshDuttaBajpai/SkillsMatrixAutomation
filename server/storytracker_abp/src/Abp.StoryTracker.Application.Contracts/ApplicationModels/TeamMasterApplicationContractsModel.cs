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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TeamId { get; set; }
        public int? ClientIdFK { get; set; }
        [ForeignKey(nameof(ClientIdFK))]
        public ClientMasterApplicationContractsModel? ClientMasterApplicationContractsModel { get; set; }
        [Required]
        public string TeamName { get; set; }
        [Required]
        public string TeamDescription { get; set; }
        public DateTime CreatedOnDateTime { get; set; }
        public DateTime ModifiedOnDateTime { get; set; }
    }
}
