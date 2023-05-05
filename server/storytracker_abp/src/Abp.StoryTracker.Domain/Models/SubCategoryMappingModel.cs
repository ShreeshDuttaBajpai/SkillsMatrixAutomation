using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class SubCategoryMappingModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int? TeamId { get; set; }
        [ForeignKey(nameof(TeamId))]
        public virtual TeamMasterModel? TeamMasterModel { get; set; }

        public int? SubCategoryId { get; set; }
        [ForeignKey(nameof(SubCategoryId))]
        public virtual SubCategoryMasterModel? SubCategoryMasterModel { get; set; }

        [Required]
        public int ClientExpectedScore { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime CreatedOn { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedOn { get; set; }
    }
}
