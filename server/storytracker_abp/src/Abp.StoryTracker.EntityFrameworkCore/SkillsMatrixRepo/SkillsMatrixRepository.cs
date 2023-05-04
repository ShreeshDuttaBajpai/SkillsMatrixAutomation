﻿using Abp.StoryTracker.EntityFrameworkCore;
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
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

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


        public async Task<List<EmployeeDetailsModel>> GetEmployeeDetailsListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<EmployeeDetailsModel>("select * from EmployeeDetails",
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

        public async Task<List<SubCategoryMappingModel>> GetSubCategoryMappingListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>("select * from SubCategoryMapping",
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

        public async Task<List<EmployeeDetailsModel>> GetEmployeeDetailsTeamWiseListAsync(int teamId)
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<EmployeeDetailsModel>("select * from EmployeeDetails where TeamId=" + teamId + "",
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }


        public async Task<List<ClientMasterModel>> PostClientListAsync(ClientMasterModel postClient)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = "INSERT INTO dbo.ClientMaster VALUES ('" + postClient.ClientName + "', '" + postClient.ClientDescription + "', '" + postClient.CreatedOn + "', '" + postClient.ModifiedOn + "')";
            var result = (await dbConnection.QueryAsync<ClientMasterModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }


        public async Task<List<TeamMasterModel>> PostTeamListAsync(TeamMasterModel postTeam)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = "INSERT INTO dbo.TeamMaster VALUES ('" + postTeam.ClientId + "', '" + postTeam.TeamName + "', '" + postTeam.TeamDescription + "' , '" + postTeam.CreatedOn + "', '" + postTeam.ModifiedOn + "')";
            var result = (await dbConnection.QueryAsync<TeamMasterModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }


        public async Task<List<CategoryMasterModel>> PostCategoryListAsync(CategoryMasterModel postCategory)
        {   
            var dbConnection = await GetDbConnectionAsync();
            var query = "INSERT INTO dbo.CategoryMaster VALUES ('" + postCategory.CategoryFunction + "', '" + postCategory.CategoryName + "', '" + postCategory.CategoryDescription + "' , '" + postCategory.CreatedOn + "', '" + postCategory.ModifiedOn + "')";
            var result = (await dbConnection.QueryAsync<CategoryMasterModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task<List<SubCategoryMappingModel>> PostSubCategoryMappingListAsync(Object obj)
        {
            var dbConnection = await GetDbConnectionAsync();
            List<SubCategoryMappingModel> listOfPostMapping = new List<SubCategoryMappingModel>();
            var mode = new SubCategoryMappingModel();
            //foreach (var item in obj.scores)
            //{

            //}
            //var query = "INSERT INTO dbo.SubCategoryMapping VALUES ('" + postSubCategoryMapping.TeamId + "', '" + postSubCategoryMapping.SubCategoryId + "', '" + postSubCategoryMapping.ClientExpectedScore + "' , '" + postSubCategoryMapping.CreatedOn + "', '" + postSubCategoryMapping.ModifiedOn + "')";
            //var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query,
            //transaction: await GetDbTransactionAsync())).ToList();
            // var query = "INSERT INTO dbo.SubCategoryMapping VALUES ('" + postSubCategoryMapping.TeamId + "', '" + postSubCategoryMapping.SubCategoryId + "', '" + postSubCategoryMapping.ClientExpectedScore + "' , '" + postSubCategoryMapping.CreatedOn + "', '" + postSubCategoryMapping.ModifiedOn + "')";
            // var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query,
            //   transaction: await GetDbTransactionAsync())).ToList();
            return null;
        }



        public async Task<List<SubCategoryMappingModel>> PutSubCategoryMappingListAsync(SubCategoryMappingModel putSubCategoryMapping)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = "UPDATE dbo.SubCategoryMapping set ClientExpectedScore = " + putSubCategoryMapping.ClientExpectedScore + " where Id=2";
            var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }


    }
}
