using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class TeamMasterModel
    {
        [Key]
        public int TeamId { get; set; }
        public int? ClientIdFK { get; set; }
        [ForeignKey(nameof(ClientIdFK))]
        public ClientMasterModel? ClientMasterModel { get; set; }
        [Required]
        public string TeamName { get; set; }
        [Required]
        public string TeamDescription { get; set; }
    }
}
