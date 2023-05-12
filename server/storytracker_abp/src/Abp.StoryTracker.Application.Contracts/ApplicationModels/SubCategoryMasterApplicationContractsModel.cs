using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class SubCategoryMasterApplicationContractsModel
    {
        public int Id { get; set; }
        public int? CategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public string SubCategoryDescription { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
