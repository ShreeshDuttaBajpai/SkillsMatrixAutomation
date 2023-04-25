using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
using Abp.StoryTracker.SkillsMatrixRepoInterface;
using Abp.StoryTracker.StoryTrackerRepoInterface;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.Dapper;
using Volo.Abp.EntityFrameworkCore;

namespace Abp.StoryTracker.SkillsMatrixRepo
{
    public class SkillsMatrixRepository : DapperRepository<SkillsMatrixDbContext>, ISkillsMatrixRepository
    {
        public SkillsMatrixRepository(IDbContextProvider<SkillsMatrixDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public async Task<List<CategoryMasterModel>> GetCategoryListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<CategoryMasterModel>("select * from CategoryMaster",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<ClientMasterModel>> GetClientListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<ClientMasterModel>("select * from ClientMaster",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<TeamMasterModel>> GetClientTeamListAsync(int clientId)
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<TeamMasterModel>("select * from TeamMaster where ClientIdFK=" + clientId + "",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<SkillsMatrixModel>> GetSkillsMatrixListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<SkillsMatrixModel>("select * from SkillsMatrix",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<SkillsSubCategoryModel>> GetSkillsSubCategoryListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<SkillsSubCategoryModel>("select * from SkillsSubCategory",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<StoryTrackerModel>> GetStoryTrackerListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<StoryTrackerModel>("select * from StoryTrackerTable",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<TeamMasterModel>> GetTeamListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<TeamMasterModel>("select * from TeamMaster",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }
    }
}
