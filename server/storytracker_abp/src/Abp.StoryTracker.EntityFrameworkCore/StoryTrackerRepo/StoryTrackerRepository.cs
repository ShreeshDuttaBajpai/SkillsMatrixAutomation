using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
//using Abp.StoryTracker.StoryTrackerApplicationModels;
using Abp.StoryTracker.StoryTrackerRepoInterface;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.Dapper;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.ObjectMapping;

namespace Abp.StoryTracker.StoryTrackerRepo
{
    public class StoryTrackerRepository : DapperRepository<StoryTrackerDbContext>, IStoryTrackerRepository
    {
        public StoryTrackerRepository(IDbContextProvider<StoryTrackerDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public async Task<List<StoryTrackerModel>> GetStoryListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<StoryTrackerModel>("select * from StoryTrackerTable",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }
    }
}
