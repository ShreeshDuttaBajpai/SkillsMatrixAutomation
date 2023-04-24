using Abp.StoryTracker.ApplicationModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Abp.StoryTracker.StoryTrackerServiceInterface
{
    public interface IStoryTrackerService : IApplicationService
    {
        Task<List<StoryTrackerApplicationContractsModel>> GetStoryListAsync();
    }
}
