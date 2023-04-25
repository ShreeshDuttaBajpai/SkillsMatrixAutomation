using Abp.StoryTracker.ApplicationModels;
using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
using Abp.StoryTracker.SkillsMatrixRepoInterface;
using Abp.StoryTracker.SkillsMatrixServiceInterface;
using Abp.StoryTracker.StoryTrackerRepoInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
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
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
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
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
            return applicationResult;
        }


        public async Task<List<SkillsSubCategoryApplicationContractsModel>> GetSkillsSubCategoryListAsync()
        {
            var domainResult = await skillMatrixRepository.GetSkillsSubCategoryListAsync();
            var applicationResult = new List<SkillsSubCategoryApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<SkillsSubCategoryModel, SkillsSubCategoryApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
            return applicationResult;
        }


        public async Task<List<StoryTrackerApplicationContractsModel>> GetStoryTrackerListAsync()
        {
            var domainResult = await skillMatrixRepository.GetStoryTrackerListAsync();
            var applicationResult = new List<StoryTrackerApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<StoryTrackerModel, StoryTrackerApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
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
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
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
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
            return applicationResult;
        }
    }
}
