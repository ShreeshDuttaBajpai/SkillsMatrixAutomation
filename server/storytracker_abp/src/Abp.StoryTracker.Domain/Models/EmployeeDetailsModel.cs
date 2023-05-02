using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class EmployeeDetailsModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int EmployeeId { get; set; }

        public int? TeamId { get; set; }
        [ForeignKey(nameof(TeamId))]
        public TeamMasterModel? TeamMasterModel { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string EmployeeName { get; set; }
    }
}
