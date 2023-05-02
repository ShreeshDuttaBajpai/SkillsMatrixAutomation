using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class ClientMasterApplicationContractsModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string ClientName { get; set; }
        [Required]
        [Column(TypeName = "varchar(250)")]
        public string ClientDescription { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreatedOn { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedOn { get; set; }
    }
}
