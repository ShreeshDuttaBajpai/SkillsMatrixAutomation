using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class SkillsMatrixModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int EmployeeId { get; set; }

        //public int? TeamId { get; set; }
        //[ForeignKey(nameof(TeamId))]
        //public TeamMasterModel? TeamMasterModel { get; set; }

        public int? SubCategoryId { get; set; }
        [ForeignKey(nameof(SubCategoryId))]
        public SubCategoryMasterModel? SkillsSubCategoryModel { get; set; }

        [Required]
        public int EmployeeScore { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreatedOn { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedOn { get; set; }
    }
}
