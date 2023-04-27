using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class SkillsSubCategoryModel
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SubCategoryId { get; set; }

        public int? ClientIdFK { get; set; }
        [ForeignKey(nameof(ClientIdFK))]
        public ClientMasterModel? ClientMasterModel { get; set; }

        public int? CategoryIdFK { get; set; }
        [ForeignKey(nameof(CategoryIdFK))]
        public CategoryMasterModel? CategoryMasterModel { get; set; }

        [Required]
        public string SubCategoryName { get; set; }
        [Required]
        public string SubCategoryDescription { get; set; }
        [Required]
        public string SubCategoryFunction { get; set; }
        [Required]
        public int ClientExpectedScore { get; set; }
        public DateTime CreatedOnDateTime { get; set; }
        public DateTime ModifiedOnDateTime { get; set; }
    }
}
