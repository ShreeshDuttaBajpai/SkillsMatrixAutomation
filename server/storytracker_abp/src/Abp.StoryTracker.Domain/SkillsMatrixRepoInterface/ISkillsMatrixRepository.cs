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
        Task<List<EmployeeDetailsModel>> GetEmployeeDetailsListAsync();
        Task<List<SubCategoryMasterModel>> GetSubCategoryAndCategoryListAsync(int categoryId);
        Task<List<EmployeeDetailsModel>> GetEmployeeDetailsTeamWiseListAsync(int teamId);
        Task<List<TeamMasterModel>> GetTeamListAsync();
        Task<List<TeamMasterModel>> GetClientTeamListAsync(int clientId);
        Task<List<SubCategoryMappingModel>> GetSubCategoryMappingListAsync();
        Task<List<ClientMasterModel>> PostClientListAsync(ClientMasterModel postClient);
        Task<List<TeamMasterModel>> PostTeamListAsync(TeamMasterModel postTeam);
        Task<List<CategoryMasterModel>> PostCategoryListAsync(CategoryMasterModel postCategory);
        Task<List<SubCategoryMappingModel>> PostSubCategoryMappingListAsync(Object obj);
        Task<List<SubCategoryMappingModel>> PutSubCategoryMappingListAsync(SubCategoryMappingModel putSubCategoryMapping); 
        
    }
}
