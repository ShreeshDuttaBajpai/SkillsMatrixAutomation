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

        public int? TeamIdFK { get; set; }
        [ForeignKey(nameof(TeamIdFK))]
        public TeamMasterModel? TeamMasterModel { get; set; }

        public int? SubCategoryIdFK { get; set; }
        [ForeignKey(nameof(SubCategoryIdFK))]
        public SkillsSubCategoryModel? SkillsSubCategoryModel { get; set; }

        [Required]
        public int EmpScore { get; set; }

        public DateTime CreatedOnDateTime { get; set; }
        public DateTime ModifiedOnDateTime { get; set; }
    }
}
