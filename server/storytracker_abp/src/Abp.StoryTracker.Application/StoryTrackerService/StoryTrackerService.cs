using Abp.StoryTracker.ApplicationModels;
using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
using Abp.StoryTracker.StoryTrackerApplicationModels;
using Abp.StoryTracker.StoryTrackerRepoInterface;
using Abp.StoryTracker.StoryTrackerServiceInterface;
using AutoMapper.Internal.Mappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.ObjectMapping;

namespace Abp.StoryTracker.StoryTrackerService
{
    public class StoryTrackerService : IStoryTrackerService
    {
        private readonly IStoryTrackerRepository storyTrackerRepository;
        public IObjectMapper<StoryTrackerEntityFrameworkCoreModule> objectMapper { get; }

        public StoryTrackerService(IStoryTrackerRepository storyTrackerRepository, IObjectMapper<StoryTrackerEntityFrameworkCoreModule> objectMapper)
        {
            this.storyTrackerRepository = storyTrackerRepository;
            this.objectMapper = objectMapper;
        }


        public async Task<List<StoryTrackerApplicationContractsModel>> GetStoryListAsync()
        {
            var domainResult = await storyTrackerRepository.GetStoryListAsync();
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
    }
}
