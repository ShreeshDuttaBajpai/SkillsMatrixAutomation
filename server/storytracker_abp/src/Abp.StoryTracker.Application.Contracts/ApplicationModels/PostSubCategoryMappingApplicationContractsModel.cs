using System;
using System.Collections.Generic;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class PostSubCategoryMappingApplicationContractsModel
    {
        public int teamId { get; set; }
        public List<ScoresSubCategoryMappingApllicationContractsModel> scores { get; set; }
    }
}
