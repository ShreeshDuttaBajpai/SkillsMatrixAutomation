using Abp.StoryTracker.ApplicationModels;
using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
using Abp.StoryTracker.SkillsMatrixRepoInterface;
using Abp.StoryTracker.SkillsMatrixServiceInterface;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
//using Abp.StoryTracker.StoryTrackerRepoInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Volo.Abp.ObjectMapping;

namespace Abp.StoryTracker.SkillsMatrixService
{
    public class SkillsMatrixService : ISkillsMatrixService
    {
        private readonly ISkillsMatrixRepository skillMatrixRepository;
        public IObjectMapper<StoryTrackerEntityFrameworkCoreModule> objectMapper { get; }

        public SkillsMatrixService(ISkillsMatrixRepository skillsMatrixRepository, IObjectMapper<StoryTrackerEntityFrameworkCoreModule> objectMapper)
        {
            this.skillMatrixRepository = skillsMatrixRepository;
            this.objectMapper = objectMapper;
        }



        public async Task<List<GetSkillsMatrixJoinTablesApplicationContractsModel>> GetSkillsMatrixJoinTablesListAsync()
        {
            var domainResult = await skillMatrixRepository.GetSkillsMatrixJoinTablesListAsync();
            var applicationResult = new List<GetSkillsMatrixJoinTablesApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<GetSkillsMatrixJoinTablesModel, GetSkillsMatrixJoinTablesApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }
        

        public async Task<List<SkillsMatrixApplicationContractsModel>> GetSkillsMatrixListAsync()
        {
            var domainResult = await skillMatrixRepository.GetSkillsMatrixListAsync();
            var applicationResult = new List<SkillsMatrixApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<SkillsMatrixModel, SkillsMatrixApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }

        public async Task<List<CategoryMasterApplicationContractsModel>> GetCategoryListAsync()
        {
            var domainResult = await skillMatrixRepository.GetCategoryListAsync();
            var applicationResult = new List<CategoryMasterApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<CategoryMasterModel, CategoryMasterApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }


        public async Task<List<ClientMasterApplicationContractsModel>> GetClientListAsync()
        {
            var domainResult = await skillMatrixRepository.GetClientListAsync();
            var applicationResult = new List<ClientMasterApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<ClientMasterModel, ClientMasterApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }


        public async Task<List<SubCategoryMasterApplicationContractsModel>> GetSubCategoryListAsync()
        {
            var domainResult = await skillMatrixRepository.GetSubCategoryListAsync();
            var applicationResult = new List<SubCategoryMasterApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<SubCategoryMasterModel, SubCategoryMasterApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }


        public async Task<List<TeamMasterApplicationContractsModel>> GetTeamListAsync()
        {
            var domainResult = await skillMatrixRepository.GetTeamListAsync();
            var applicationResult = new List<TeamMasterApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<TeamMasterModel, TeamMasterApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }

        public async Task<List<TeamMasterApplicationContractsModel>> GetClientTeamListAsync(int clientId)
        {
            var domainResult = await skillMatrixRepository.GetClientTeamListAsync(clientId);
            var applicationResult = new List<TeamMasterApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<TeamMasterModel, TeamMasterApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }


        public async Task<List<SubCategoryMasterApplicationContractsModel>> GetSubCategoryAndCategoryListAsync(int categoryId)
        {
            var domainResult = await skillMatrixRepository.GetSubCategoryAndCategoryListAsync(categoryId);
            var applicationResult = new List<SubCategoryMasterApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<SubCategoryMasterModel, SubCategoryMasterApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }


        public async Task<List<EmployeeDetailsApplicationContractsModel>> GetEmployeeDetailsTeamWiseListAsync(int teamId)
        {
            var domainResult = await skillMatrixRepository.GetEmployeeDetailsTeamWiseListAsync(teamId);
            var applicationResult = new List<EmployeeDetailsApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<EmployeeDetailsModel, EmployeeDetailsApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }


        public async Task<List<SubCategoryMappingApplicationContractsModel>> GetSubCategoryMappingListAsync()
        {
            var domainResult = await skillMatrixRepository.GetSubCategoryMappingListAsync();
            var applicationResult = new List<SubCategoryMappingApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<SubCategoryMappingModel, SubCategoryMappingApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }


        public async Task<List<ScoresSubCategoryMappingApllicationContractsModel>> GetTeamSubCategoryMappingListAsync(int teamId)
        {
            var domainResult = await skillMatrixRepository.GetTeamSubCategoryMappingListAsync(teamId);
            //var applicationResult = new PostSubCategoryMappingApplicationContractsModel();
            //if (domainResult.Count > 0)
            //{
            //    applicationResult.teamId = (int)domainResult[0].TeamId;
                var scoringObjList = new List<ScoresSubCategoryMappingApllicationContractsModel>();
                foreach (var item in domainResult)
                {
                    var applicationStory = objectMapper.Map<SubCategoryMappingModel, SubCategoryMappingApplicationContractsModel>(item);
                    var scoringObj = new ScoresSubCategoryMappingApllicationContractsModel();
                    scoringObj.subCategoryId = (int)applicationStory.SubCategoryId;
                    scoringObj.expectedClientScore = applicationStory.ClientExpectedScore;
                    scoringObjList.Add(scoringObj);
                }
            //    applicationResult.scores = scoringObjList;
            //}
            return scoringObjList;
        }


        public async Task<List<EmployeeDetailsApplicationContractsModel>> GetEmployeeDetailsListAsync()
        {
            var domainResult = await skillMatrixRepository.GetEmployeeDetailsListAsync();
            var applicationResult = new List<EmployeeDetailsApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<EmployeeDetailsModel, EmployeeDetailsApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            return applicationResult;
        }
        

        public async Task PostClientListAsync(ClientMasterApplicationContractsModel postClient)
        {
            var postClientData = objectMapper.Map<ClientMasterApplicationContractsModel, ClientMasterModel>(postClient);
            await skillMatrixRepository.PostClientListAsync(postClientData);
        }

        public async Task PostTeamListAsync(TeamMasterApplicationContractsModel postTeam)
        {
            var postTeamData = objectMapper.Map<TeamMasterApplicationContractsModel, TeamMasterModel>(postTeam);
            await skillMatrixRepository.PostTeamListAsync(postTeamData);
        }

        public async Task PostCategoryListAsync(CategoryMasterApplicationContractsModel postCategory)
        {
            var postCategoryData = objectMapper.Map<CategoryMasterApplicationContractsModel, CategoryMasterModel>(postCategory);
            await skillMatrixRepository.PostCategoryListAsync(postCategoryData);
        }

        public async Task PostEmployeeListAsync(EmployeeDetailsApplicationContractsModel postEmployee)
        {
            var postEmployeeData = objectMapper.Map<EmployeeDetailsApplicationContractsModel, EmployeeDetailsModel>(postEmployee);
            await skillMatrixRepository.PostEmployeeListAsync(postEmployeeData);
        }

        public async Task PostSubCategoryListAsync(SubCategoryMasterApplicationContractsModel postSubCategory)
        {
            var postSubCategoryData = objectMapper.Map<SubCategoryMasterApplicationContractsModel, SubCategoryMasterModel>(postSubCategory);
            await skillMatrixRepository.PostSubCategoryMasterListAsync(postSubCategoryData);
        }


        public async Task PostSubCategoryMappingListAsync(PostSubCategoryMappingApplicationContractsModel postSubCategoryMapping)
        {
            List<SubCategoryMappingApplicationContractsModel> listOfPostSubCategoryMapping = new List<SubCategoryMappingApplicationContractsModel>();
            foreach (var item in postSubCategoryMapping.scores)
            {
                var mode = new SubCategoryMappingApplicationContractsModel();
                mode.TeamId = postSubCategoryMapping.teamId;
                mode.SubCategoryId = item.subCategoryId;
                mode.ClientExpectedScore = item.expectedClientScore;
                //var postSubCategoryMappingData = objectMapper.Map<PostSubCategoryMappingApplicationContractsModel, SubCategoryMappingModel>(postSubCategoryMapping);
                //await skillMatrixRepository.PostSubCategoryMappingListAsync(postSubCategoryMappingData);
                listOfPostSubCategoryMapping.Add(mode);
            }
            foreach(var postItem in listOfPostSubCategoryMapping)
            {
                var postSubCategoryMappingData = objectMapper.Map<SubCategoryMappingApplicationContractsModel, SubCategoryMappingModel>(postItem);

                await skillMatrixRepository.PostSubCategoryMappingListAsync(postSubCategoryMappingData);
            }
        }



        public async Task PostSkillMatrixListAsync(PostSkillMatrixApplicationContractsModel postSkillMatrix)
        {
            List<SkillsMatrixApplicationContractsModel> listOfPostSkillsMatrixMapping = new List<SkillsMatrixApplicationContractsModel>();
            foreach (var item in postSkillMatrix.scores)
            {
                var mode = new SkillsMatrixApplicationContractsModel();
                mode.EmployeeId = postSkillMatrix.employeeId;
                mode.EmployeeId = item.employeeId;
                mode.EmployeeScore = item.employeeScore;
                //var postSubCategoryMappingData = objectMapper.Map<PostSubCategoryMappingApplicationContractsModel, SubCategoryMappingModel>(postSubCategoryMapping);
                //await skillMatrixRepository.PostSubCategoryMappingListAsync(postSubCategoryMappingData);
                listOfPostSkillsMatrixMapping.Add(mode);
            }
            foreach (var postItem in listOfPostSkillsMatrixMapping)
            {
                var postSkillsMatrixData = objectMapper.Map<SkillsMatrixApplicationContractsModel, SkillsMatrixModel>(postItem);
                await skillMatrixRepository.PostSkillMatrixListAsync(postSkillsMatrixData);
            }
        }



        public async Task PutSubCategoryMappingListAsync(SubCategoryMappingApplicationContractsModel putSubCategoryMapping)
        {
            var putSubCategoryMappingData = objectMapper.Map<SubCategoryMappingApplicationContractsModel, SubCategoryMappingModel>(putSubCategoryMapping);
            await skillMatrixRepository.PutSubCategoryMappingListAsync(putSubCategoryMappingData);
        }

        public async Task<List<ScoresSkillMatrixApplicationContractsModel>> GetEmployeeScores(int teamId)
        {
            var domainResult = await skillMatrixRepository.GetEmployeeScores(teamId);
            var scores = new List<ScoresSkillMatrixApplicationContractsModel>();
            foreach(var item in domainResult)
            {
                var singleScore = new ScoresSkillMatrixApplicationContractsModel();
                singleScore.employeeId = (int)item.EmployeeId;
                singleScore.employeeScore = item.EmployeeScore;
                scores.Add(singleScore);
            }
            return scores;
        }

        public async Task DeleteEmployee(int employeeId)
        {
            await skillMatrixRepository.DeleteEmployee(employeeId);
        }
        public async Task DeleteTeam(int teamId)
        {
            await skillMatrixRepository.DeleteTeam(teamId);
        }
        public async Task DeleteSubCategory(int subCategoryId)
        {
            await skillMatrixRepository.DeleteSubCategory(subCategoryId);
        }
        public async Task EditClientTeams(EditClientTeamsApplicationContractsModel editClientTeams)
        {
            var mapEditClientTeams = objectMapper.Map<EditClientTeamsApplicationContractsModel, EditClientTeamsModel>(editClientTeams);
            mapEditClientTeams.TeamMasterList = new List<TeamMasterModel>();
            foreach (var teamApplicationMaster in editClientTeams.Teams)
            {
                var teamMaster = objectMapper.Map<TeamMasterApplicationContractsModel, TeamMasterModel>(teamApplicationMaster);
                mapEditClientTeams.TeamMasterList.Add(teamMaster);
            }
            //mapEditClientTeams.TeamMasterList = objectMapper.Map<TeamMasterApplicationContractsModel, TeamMasterModel>(editClientTeams.TeamMasterApplicationList);
            await skillMatrixRepository.EditClientTeams(mapEditClientTeams);
        }
        public async Task EditCategorySubcategory(EditCategorySubcategoryApplicationContractsModel editCategorySubcategoryObj)
        {
            var mapEditCategorySubcategory = objectMapper.Map<EditCategorySubcategoryApplicationContractsModel, EditCategorySubcategoryModel>(editCategorySubcategoryObj);
            mapEditCategorySubcategory.SubCategories = new List<SubCategoryMasterModel>();
            foreach(var subCategory in  editCategorySubcategoryObj.SubCategories)
            {
                var mapSubCategory = objectMapper.Map<SubCategoryMasterApplicationContractsModel, SubCategoryMasterModel>(subCategory);
                mapEditCategorySubcategory.SubCategories.Add(mapSubCategory);
            }
            await skillMatrixRepository.EditCategorySubcategory(mapEditCategorySubcategory);
        }
        public async Task EditTeamEmployees(EditTeamEmployeesApplicationContractsModel editTeamEmployeesObj)
        {
            var mapEditTeamEmployees = objectMapper.Map<EditTeamEmployeesApplicationContractsModel, EditTeamEmployeesModel>(editTeamEmployeesObj);
            mapEditTeamEmployees.Employees = new List<EmployeeDetailsModel>();
            foreach(var employee in editTeamEmployeesObj.Employees)
            {
                var mapEmployees = objectMapper.Map<EmployeeDetailsApplicationContractsModel, EmployeeDetailsModel>(employee);
                mapEditTeamEmployees.Employees.Add(mapEmployees);
            }
            await skillMatrixRepository.EditTeamEmployees(mapEditTeamEmployees);
        }
    }
}
