using Abp.StoryTracker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Abp.StoryTracker.SkillsMatrixRepoInterface
{
    public interface ISkillsMatrixRepository : IRepository
    {   
        Task<List<CategoryMasterModel>> GetCategoryListAsync();
        Task<List<ClientMasterModel>> GetClientListAsync();
        Task<List<SkillsMatrixModel>> GetSkillsMatrixListAsync();
        Task<List<SkillsSubCategoryModel>> GetSkillsSubCategoryListAsync();
        Task<List<StoryTrackerModel>> GetStoryTrackerListAsync();
        Task<List<TeamMasterModel>> GetTeamListAsync();
        Task<List<TeamMasterModel>> GetClientTeamListAsync(int clientId);
    }
}
