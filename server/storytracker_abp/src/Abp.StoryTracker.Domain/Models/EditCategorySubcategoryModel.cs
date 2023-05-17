using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class EditCategorySubcategoryModel
    {
        public int Id { get; set; }
        public string? CategoryName { get; set; }
        public string? CategoryDescription { get; set; }
        public DateTime ModifiedOn = DateTime.Now;
        public List<SubCategoryMasterModel> SubCategories { get; set; }
    }
}
