using System;
using System.Collections.Generic;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class EditCategorySubcategoryApplicationContractsModel
    {
        public int Id { get; set; }
        public string? CategoryName { get; set; }
        public string? CategoryDescription { get; set; }
        public DateTime ModifiedOn = DateTime.Now;
        public List<SubCategoryMasterApplicationContractsModel> SubCategories { get; set; }
    }
}
