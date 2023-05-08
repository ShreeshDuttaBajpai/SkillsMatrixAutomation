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
        public int Id { get; set; }

        public int ClientId { get; set; }
        [ForeignKey(nameof(ClientId))]
        public ClientMasterApplicationContractsModel? ClientMasterApplicationContractsModel { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string TeamName { get; set; }
        [Required]
        [Column(TypeName = "varchar(250)")]
        public string TeamDescription { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreatedOn { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedOn { get; set; }
    }
}
