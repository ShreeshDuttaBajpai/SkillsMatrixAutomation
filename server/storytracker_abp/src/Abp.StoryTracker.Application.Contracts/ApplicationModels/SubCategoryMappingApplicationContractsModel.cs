using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class SubCategoryMappingApplicationContractsModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int? TeamId { get; set; }
        [ForeignKey(nameof(TeamId))]
        public TeamMasterApplicationContractsModel? TeamMasterApplicationContractsModel { get; set; }

        public int? SubCategoryId { get; set; }
        [ForeignKey(nameof(SubCategoryId))]
        public SubCategoryMasterApplicationContractsModel? SubCategoryMasterApplicationContractsModel { get; set; }

        [Required]
        public int ClientExpectedScore { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime CreatedOn { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedOn { get; set; }
    }
}
