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
                mode.SubCategoryId = item.subCategoryId;
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
    }
}
