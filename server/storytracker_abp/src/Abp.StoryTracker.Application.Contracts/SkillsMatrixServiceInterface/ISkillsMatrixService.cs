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
        Task<List<SubCategoryMasterApplicationContractsModel>> GetSubCategoryListAsync();
        Task<List<TeamMasterApplicationContractsModel>> GetTeamListAsync();
        Task<List<SubCategoryMasterApplicationContractsModel>> GetSubCategoryAndCategoryListAsync(int categoryId);
        Task<List<ClientMasterApplicationContractsModel>> PostClientListAsync(string postClientName, string postClientDescription, DateTime postClientCreatedOn, DateTime postClientModifiedOn);
    }
}
