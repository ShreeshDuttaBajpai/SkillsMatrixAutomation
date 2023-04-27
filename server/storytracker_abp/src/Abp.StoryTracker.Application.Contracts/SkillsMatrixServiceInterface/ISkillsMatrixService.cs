using Abp.StoryTracker.ApplicationModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Abp.StoryTracker.SkillsMatrixServiceInterface
{
    public interface ISkillsMatrixService : IApplicationService
    {
        Task<List<CategoryMasterApplicationContractsModel>> GetCategoryListAsync();
        Task<List<ClientMasterApplicationContractsModel>> GetClientListAsync();
        Task<List<TeamMasterApplicationContractsModel>> GetClientTeamListAsync(int clientId);
        Task<List<SkillsMatrixApplicationContractsModel>> GetSkillsMatrixListAsync();
        Task<List<SkillsSubCategoryApplicationContractsModel>> GetSkillsSubCategoryListAsync();
        Task<List<TeamMasterApplicationContractsModel>> GetTeamListAsync();
    }
}
