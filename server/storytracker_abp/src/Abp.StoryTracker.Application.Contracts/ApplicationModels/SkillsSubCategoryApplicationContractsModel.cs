using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class SkillsSubCategoryApplicationContractsModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SubCategoryId { get; set; }

        public int? ClientIdFK { get; set; }
        [ForeignKey(nameof(ClientIdFK))]
        public ClientMasterApplicationContractsModel? ClientMasterApplicationModel { get; set; }

        public int? CategoryIdFK { get; set; }
        [ForeignKey(nameof(CategoryIdFK))]
        public CategoryMasterApplicationContractsModel? CategoryMasterApplicationModel { get; set; }

        [Required]
        public string SubCategoryName { get; set; }
        [Required]
        public string SubCategoryDescription { get; set; }
    }
}
