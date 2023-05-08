using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class EmployeeDetailsApplicationContractsModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int EmployeeId { get; set; }

        public int? TeamId { get; set; }
        [ForeignKey(nameof(TeamId))]
        public TeamMasterApplicationContractsModel? TeamMasterApplicationContractsModel { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string EmployeeName { get; set; }

        //[Column(TypeName = "datetime")]
        //public DateTime CreatedOn { get; set; }
        //[Column(TypeName = "datetime")]
        //public DateTime ModifiedOn { get; set; }
    }
}
