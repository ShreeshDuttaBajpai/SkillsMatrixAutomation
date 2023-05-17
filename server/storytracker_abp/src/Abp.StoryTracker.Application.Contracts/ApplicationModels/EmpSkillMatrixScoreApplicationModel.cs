using System;
using System.Collections.Generic;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class EmpSkillMatrixScoreApplicationModel
    {
        public int subCategoryId { get; set; }
        public int clientExpectedScore { get; set; }
        public int expectedClientScore { get; set; }
    }
}
