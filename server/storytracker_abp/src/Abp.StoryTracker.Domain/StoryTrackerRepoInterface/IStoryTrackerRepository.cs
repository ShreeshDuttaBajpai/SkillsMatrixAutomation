using Abp.StoryTracker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Abp.StoryTracker.StoryTrackerRepoInterface
{
    public interface IStoryTrackerRepository : IRepository
    {
        Task<List<StoryTrackerModel>> GetStoryListAsync();
    }
}
