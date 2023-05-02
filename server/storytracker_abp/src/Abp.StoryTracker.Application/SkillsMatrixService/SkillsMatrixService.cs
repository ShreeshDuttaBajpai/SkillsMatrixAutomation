﻿using Abp.StoryTracker.ApplicationModels;
using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
using Abp.StoryTracker.SkillsMatrixRepoInterface;
using Abp.StoryTracker.SkillsMatrixServiceInterface;
//using Abp.StoryTracker.StoryTrackerRepoInterface;
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


        //public async task<list<subcategorymasterapplicationcontractsmodel>> getsubcategoryandcategorylistasync(int categoryid)
        //{
        //    var domainresult = await skillmatrixrepository.getsubcategoryandcategorylistasync(categoryid);
        //    var applicationresult = new list<subcategorymasterapplicationcontractsmodel>();
        //    foreach (var item in domainresult)
        //    {
        //        var applicationstory = objectmapper.map<subcategorymastermodel, subcategorymasterapplicationcontractsmodel>(item);
        //        applicationresult.add(applicationstory);
        //    }
        //    //list<string> strings = new list<string>() { "sadgdsa" };
        //    //return strings;
        //    return applicationresult;
        //}


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


        public async Task<List<ClientMasterApplicationContractsModel>> PostClientListAsync(string postClientName, string postClientDescription, DateTime postClientCreatedOn, DateTime postClientModifiedOn)
        {
            var domainResult = await skillMatrixRepository.PostClientListAsync( postClientName, postClientDescription, postClientCreatedOn, postClientModifiedOn);
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

        public async Task<List<SubCategoryMasterApplicationContractsModel>> GetSubCategoryAndCategoryListAsync(int categoryId)
        {
            var domainResult = await skillMatrixRepository.GetSubCategoryAndCategoryListAsync(categoryId);
            var applicationResult = new List<SubCategoryMasterApplicationContractsModel>();
            foreach (var item in domainResult)
            {
                var applicationStory = objectMapper.Map<SubCategoryMasterModel, SubCategoryMasterApplicationContractsModel>(item);
                applicationResult.Add(applicationStory);
            }
            //List<string> strings = new List<string>() { "sadgdsa" };
            //return strings;
            return applicationResult;
        }
    }
}