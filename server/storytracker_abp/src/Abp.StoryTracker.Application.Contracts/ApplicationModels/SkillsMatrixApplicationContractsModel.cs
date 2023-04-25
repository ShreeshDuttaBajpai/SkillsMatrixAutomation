using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class SkillsMatrixApplicationContractsModel
    {
        [Key]
        public int EmployeeId { get; set; }

        public int? TeamIdFK { get; set; }
        [ForeignKey(nameof(TeamIdFK))]
        public TeamMasterApplicationContractsModel? TeamMasterApplicationModel { get; set; }

        public int? SubCategoryIdFK { get; set; }
        [ForeignKey(nameof(SubCategoryIdFK))]
        public SkillsSubCategoryApplicationContractsModel? SkillsSubCategoryApplicationModel { get; set; }

        [Required]
        public int ClientExpectedScore { get; set; }
        [Required]
        public int Score { get; set; }
    }
}
