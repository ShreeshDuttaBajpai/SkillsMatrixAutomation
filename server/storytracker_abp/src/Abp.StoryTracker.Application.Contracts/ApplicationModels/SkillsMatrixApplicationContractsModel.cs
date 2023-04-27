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
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int EmployeeId { get; set; }

        public int? TeamIdFK { get; set; }
        [ForeignKey(nameof(TeamIdFK))]
        public TeamMasterApplicationContractsModel? TeamMasterApplicationContractsModel { get; set; }

        public int? SubCategoryIdFK { get; set; }
        [ForeignKey(nameof(SubCategoryIdFK))]
        public SkillsSubCategoryApplicationContractsModel? SkillsSubCategoryApplicationContractsModel { get; set; }

        [Required]
        public int EmpScore { get; set; }

        public DateTime CreatedOnDateTime { get; set; }
        public DateTime ModifiedOnDateTime { get; set; }
    }
}
