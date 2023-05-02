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
        Task<List<SubCategoryMasterModel>> GetSubCategoryListAsync();
        Task<List<SubCategoryMasterModel>> GetSubCategoryAndCategoryListAsync(int categoryId);
        Task<List<TeamMasterModel>> GetTeamListAsync();
        Task<List<TeamMasterModel>> GetClientTeamListAsync(int clientId);
        Task<List<ClientMasterModel>> PostClientListAsync(string postClientName, string postClientDescription, DateTime postClientCreatedOn, DateTime postClientModifiedOn);
    }
}
