using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
using Abp.StoryTracker.SkillsMatrixRepoInterface;
//using Abp.StoryTracker.StoryTrackerRepoInterface;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.Dapper;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Users;

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
            var result = (await dbConnection.QueryAsync<TeamMasterModel>("select * from TeamMaster where ClientId=" + clientId + "",
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

        public async Task<List<SubCategoryMasterModel>> GetSubCategoryListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<SubCategoryMasterModel>("select * from SkillsSubCategory",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        //public async Task<List<StoryTrackerModel>> GetStoryTrackerListAsync()
        //{
        //    var dbConnection = await GetDbConnectionAsync();
        //    var result = (await dbConnection.QueryAsync<StoryTrackerModel>("select * from StoryTrackerTable",
        //        transaction: await GetDbTransactionAsync())).ToList();
        //    return result;
        //}

        public async Task<List<TeamMasterModel>> GetTeamListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<TeamMasterModel>("select * from TeamMaster",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<ClientMasterModel>> PostClientListAsync(string PostClientName, string PostClientDescription, DateTime PostClientCreatedOn, DateTime PostClientModifiedOn)
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<ClientMasterModel>(" INSERT INTO dbo.ClientMaster VALUES ("+PostClientName+ ", "+ PostClientDescription + ", "+ PostClientCreatedOn + ", "+ PostClientModifiedOn + ")",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<SubCategoryMasterModel>> GetSubCategoryAndCategoryListAsync(int categoryId)
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<SubCategoryMasterModel>("select * from SubCategoryMaster where CategoryId=" + categoryId + "",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }
    }
}
