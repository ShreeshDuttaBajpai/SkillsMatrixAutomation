using System;
using System.Collections.Generic;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class ScoresSkillMatrixApplicationContractsModel
    {
        public int employeeId { get; set; }
        public int subCategoryId { get; set; }
        public int employeeScore { get; set; }
    }
}
