using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class SkillsMatrixApplicationContractsModel
    {
        public int Id { get; set; }
        public int? EmployeeId { get; set; }
        public int? SubCategoryId { get; set; }
        public int EmployeeScore { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
