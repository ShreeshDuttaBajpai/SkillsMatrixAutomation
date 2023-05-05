using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class SkillsMatrixApplicationContractsModel
    {
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int EmployeeId { get; set; }

        public int? EmployeeId { get; set; }
        [ForeignKey(nameof(EmployeeId))]
        public EmployeeDetailsApplicationContractsModel? EmployeeDetailsApplicationContractsModel { get; set; }

        //public int? TeamId { get; set; }
        //[ForeignKey(nameof(TeamId))]
        //public TeamMasterApplicationContractsModel? TeamMasterApplicationContractsModel { get; set; }

        public int? SubCategoryId { get; set; }
        [ForeignKey(nameof(SubCategoryId))]
        public SubCategoryMasterApplicationContractsModel? SubCategoryApplicationContractsModel { get; set; }

        [Required]
        public int EmployeeScore { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreatedOn { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedOn { get; set; }
    }
}
