﻿using Abp.StoryTracker.ApplicationModels;
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
        //Task<List<ClientMasterApplicationContractsModel>> PostClientListAsync();
        Task<List<TeamMasterApplicationContractsModel>> GetClientTeamListAsync(int clientId);
        Task<List<SkillsMatrixApplicationContractsModel>> GetSkillsMatrixListAsync();
        Task<List<GetSkillsMatrixJoinTablesApplicationContractsModel>> GetSkillsMatrixJoinTablesListAsync();
        
        Task<List<SubCategoryMasterApplicationContractsModel>> GetSubCategoryListAsync();
        Task<List<TeamMasterApplicationContractsModel>> GetTeamListAsync();
        Task<List<SubCategoryMasterApplicationContractsModel>> GetSubCategoryAndCategoryListAsync(int categoryId);
        Task<List<SubCategoryMappingApplicationContractsModel>> GetSubCategoryMappingListAsync();
        Task<List<ScoresSubCategoryMappingApllicationContractsModel>> GetTeamSubCategoryMappingListAsync(int teamId);
        Task<List<EmployeeDetailsApplicationContractsModel>> GetEmployeeDetailsListAsync();
        Task<List<EmployeeDetailsApplicationContractsModel>> GetEmployeeDetailsTeamWiseListAsync(int TeamId);

        Task<List<SkillsMatrixApplicationContractsModel>> GetEmployeeScores(int teamId);
        //Task<List<EmpSkillMatrixScoreApplicationModel>> GetEmpSkillMatrixScore(int employeeId);
       

        Task PostClientListAsync(ClientMasterApplicationContractsModel postClient);
        Task PostTeamListAsync(TeamMasterApplicationContractsModel postTeam);
        Task PostEmployeeListAsync(EmployeeDetailsApplicationContractsModel postEmployee);
        Task PostCategoryListAsync(CategoryMasterApplicationContractsModel postCategory);
        Task PostSubCategoryListAsync(SubCategoryMasterApplicationContractsModel postSubCategory);
        Task PostSubCategoryMappingListAsync(PostSubCategoryMappingApplicationContractsModel postSubCategoryMapping);
        Task PostSkillMatrixListAsync(PostSkillMatrixApplicationContractsModel postSkillMatrix);

     
        Task PutSubCategoryMappingListAsync(SubCategoryMappingApplicationContractsModel putSubCategoryMapping);
        Task DeleteEmployee(int employeeId);
        Task DeleteTeam(int teamId);
        Task DeleteSubCategory(int subCategoryId);
        Task EditClientTeams(EditClientTeamsApplicationContractsModel editClientTeams);
        Task EditCategorySubcategory(EditCategorySubcategoryApplicationContractsModel editCategorySubcategoryObj);
        Task EditTeamEmployees(EditTeamEmployeesApplicationContractsModel editTeamEmployeesObj);
    }
}
