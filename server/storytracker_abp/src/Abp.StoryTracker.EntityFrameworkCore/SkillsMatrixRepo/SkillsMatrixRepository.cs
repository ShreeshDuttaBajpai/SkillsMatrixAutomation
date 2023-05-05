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



        public async Task<List<GetSkillsMatrixJoinTablesModel>> GetSkillsMatrixJoinTablesListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = "SELECT\r\n\tClientMaster.ClientName,\r\n\tTeamMaster.TeamName,\r\n\tSkillsMatrix.EmployeeId,\r\n\tEmployeeDetails.EmployeeName,\r\n\tCategoryMaster.CategoryName,\r\n\tSubCategoryMaster.SubCategoryName,\r\n\tSubCategoryMapping.ClientExpectedScore,\r\n\tSkillsMatrix.EmployeeScore\r\nFROM SkillsMatrix\r\ninner JOIN EmployeeDetails\r\nON EmployeeDetails.EmployeeId = SkillsMatrix.EmployeeId\r\ninner JOIN SubCategoryMapping\r\nON SkillsMatrix.SubCategoryId = SubCategoryMapping.SubCategoryId and SubCategoryMapping.TeamId=EmployeeDetails.TeamId\r\ninner JOIN TeamMaster\r\nON EmployeeDetails.TeamId=TeamMaster.Id\r\ninner JOIN ClientMaster\r\nON TeamMaster.ClientId=ClientMaster.Id\r\ninner JOIN SubCategoryMaster\r\nON SubCategoryMapping.SubCategoryId = SubCategoryMaster.Id \r\nJOIN CategoryMaster\r\nON SubCategoryMaster.CategoryId = CategoryMaster.Id";
            var result = (await dbConnection.QueryAsync<GetSkillsMatrixJoinTablesModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }


        
        public async Task<List<SubCategoryMasterModel>> GetSubCategoryListAsync()
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<SubCategoryMasterModel>("select * from SubCategoryMaster",
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

        public async Task<List<SubCategoryMappingModel>> GetTeamSubCategoryMappingListAsync(int teamId)
        {
            var dbConnection = await GetDbConnectionAsync();
            var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>($"select * from SubCategoryMapping where TeamId={teamId}",
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



        public async Task<List<SkillsMatrixModel>> PostSkillMatrixListAsync(SkillsMatrixModel postSkillMatrix)
        {
            var dbConnection = await GetDbConnectionAsync();

            var query2 = "Select * from dbo. SkillsMatrix where EmployeeId=" + postSkillMatrix.EmployeeId + " and SubCategoryId=" + postSkillMatrix.SubCategoryId + "";
            var result2 = (await dbConnection.QueryAsync<SkillsMatrixModel>(query2,
            transaction: await GetDbTransactionAsync())).ToList();

            var query3 = "UPDATE dbo.SkillsMatrix set EmployeeScore = " + postSkillMatrix.EmployeeScore + " where EmployeeId=" + postSkillMatrix.EmployeeId + " and SubCategoryId=" + postSkillMatrix.SubCategoryId + "";
            var result3 = (await dbConnection.QueryAsync<SkillsMatrixModel>(query3,
                transaction: await GetDbTransactionAsync())).ToList();

            if (result2.Count() == 0)
            {
                var query = "INSERT INTO dbo.SkillsMatrix VALUES ('" + postSkillMatrix.EmployeeId + "', '" + postSkillMatrix.SubCategoryId + "', '" + postSkillMatrix.EmployeeScore + "' , '" + DateTime.Now + "', '" + DateTime.Now + "')";
                var result = (await dbConnection.QueryAsync<SkillsMatrixModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
                return result;
            }
            else return result3;
        }



        public async Task<List<SubCategoryMappingModel>> PostSubCategoryMappingListAsync(SubCategoryMappingModel postSubCategoryMapping)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query2 = "Select * from dbo. SubCategoryMapping where TeamId=" + postSubCategoryMapping.TeamId + " and SubCategoryId=" + postSubCategoryMapping.SubCategoryId + "";
            //if (postSubCategoryMapping.SubCategoryId == query2.) { }
            
            
            var result2 = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query2,
            transaction: await GetDbTransactionAsync())).ToList();


            var query3 = "UPDATE dbo.SubCategoryMapping set ClientExpectedScore = " + postSubCategoryMapping.ClientExpectedScore + " where TeamId=" + postSubCategoryMapping.TeamId + " and SubCategoryId=" + postSubCategoryMapping.SubCategoryId + "";
            var result3 = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query3,
                transaction: await GetDbTransactionAsync())).ToList();
            // return result3;


            if (result2.Count() == 0)
            {
                var query = "INSERT INTO dbo.SubCategoryMapping VALUES ('" + postSubCategoryMapping.TeamId + "', '" + postSubCategoryMapping.SubCategoryId + "', '" + postSubCategoryMapping.ClientExpectedScore + "' , '" + DateTime.Now + "', '" + DateTime.Now + "')";
                var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
                return result;
            }
            else
                return result3;
            {
            //    var query = "UPDATE dbo.SubCategoryMapping set ClientExpectedScore = " + postSubCategoryMapping.ClientExpectedScore + " where TeamId=" + postSubCategoryMapping.TeamId + " and SubCategoryId=" + postSubCategoryMapping.SubCategoryId + "";
            //    var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query,
            //        transaction: await GetDbTransactionAsync())).ToList();
            //    return result;
            }
        }

        public async Task<List<SubCategoryMasterModel>> PostSubCategoryMasterListAsync(SubCategoryMasterModel postSubCategoryMaster)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = "INSERT INTO dbo.SubCategoryMaster VALUES ('" + postSubCategoryMaster.CategoryId + "', '" + postSubCategoryMaster.SubCategoryName + "', '" + postSubCategoryMaster.SubCategoryDescription + "' , '" + DateTime.Now + "', '" + DateTime.Now + "')";
            var result = (await dbConnection.QueryAsync<SubCategoryMasterModel>(query,
            transaction: await GetDbTransactionAsync())).ToList();
            return result;
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
