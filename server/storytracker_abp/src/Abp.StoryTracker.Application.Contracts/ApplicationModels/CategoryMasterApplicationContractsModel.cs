using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class CategoryMasterApplicationContractsModel
    {
        public int Id { get; set; }
        public string CategoryFunction { get; set; }
        public string CategoryName { get; set; }
        public string CategoryDescription { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
