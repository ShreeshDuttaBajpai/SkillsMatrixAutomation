using Abp.StoryTracker.EntityFrameworkCore;
using Abp.StoryTracker.Models;
using Abp.StoryTracker.SkillsMatrixRepoInterface;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
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


        public async Task<List<EmployeeDetailsModel>> PostEmployeeListAsync(EmployeeDetailsModel postEmployee)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = "INSERT INTO dbo.EmployeeDetails VALUES ('" + postEmployee.EmployeeId + "', '" + postEmployee.TeamId + "', '" + postEmployee.EmployeeName + "')";
            var result = (await dbConnection.QueryAsync<EmployeeDetailsModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }



        public async Task<List<SkillsMatrixModel>> PostSkillMatrixListAsync(SkillsMatrixModel postSkillMatrix)
        {
            var dbConnection = await GetDbConnectionAsync();


            var query2 = "Select * from dbo.SkillsMatrix where EmployeeId=" + postSkillMatrix.EmployeeId + " and SubCategoryId=" + postSkillMatrix.SubCategoryId + "";
            var result2 = (await dbConnection.QueryAsync<SkillsMatrixModel>(query2,
            transaction: await GetDbTransactionAsync())).ToList();

            var query5 = "select TeamId from EmployeeDetails where EmployeeId=" + postSkillMatrix.EmployeeId + "";
            var result5 = (await dbConnection.QueryAsync<EmployeeDetailsModel>(query5,
            transaction: await GetDbTransactionAsync())).ToList();

            var query4 = "Select * from dbo.SubCategoryMapping where SubCategoryId=" + postSkillMatrix.SubCategoryId + " and TeamId=" + result5[0].TeamId + "";
            var result4 = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query4,
            transaction: await GetDbTransactionAsync())).ToList();


            if (result2.Count() == 1)
            {
                var query3 = "UPDATE dbo.SkillsMatrix set EmployeeScore = " + postSkillMatrix.EmployeeScore + " where EmployeeId=" + postSkillMatrix.EmployeeId + " and SubCategoryId=" + postSkillMatrix.SubCategoryId + "";
                var result3 = (await dbConnection.QueryAsync<SkillsMatrixModel>(query3,
                    transaction: await GetDbTransactionAsync())).ToList();
                return result3;
            }

            else if (result2.Count() == 0 && result4.Count() == 1)
            {
                var query = "INSERT INTO dbo.SkillsMatrix VALUES (" + postSkillMatrix.EmployeeId + ", " + postSkillMatrix.SubCategoryId + ", " + postSkillMatrix.EmployeeScore + " , '" + DateTime.Now + "', '" + DateTime.Now + "')";
                var result = (await dbConnection.QueryAsync<SkillsMatrixModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
                return result;
            }
            else
                return null;
        }



        public async Task<List<SubCategoryMappingModel>> PostSubCategoryMappingListAsync(SubCategoryMappingModel postSubCategoryMapping)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query2 = "Select * from dbo. SubCategoryMapping where TeamId=" + postSubCategoryMapping.TeamId + " and SubCategoryId=" + postSubCategoryMapping.SubCategoryId + "";
            var result2 = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query2,
            transaction: await GetDbTransactionAsync())).ToList();

            if (result2.Count() == 0)
            {
                var query = "INSERT INTO dbo.SubCategoryMapping VALUES ('" + postSubCategoryMapping.TeamId + "', '" + postSubCategoryMapping.SubCategoryId + "', '" + postSubCategoryMapping.ClientExpectedScore + "' , '" + DateTime.Now + "', '" + DateTime.Now + "')";
                var result = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query,
                    transaction: await GetDbTransactionAsync())).ToList();
                return result;
            }
            else

            {
                var query3 = "UPDATE dbo.SubCategoryMapping set ClientExpectedScore = " + postSubCategoryMapping.ClientExpectedScore + " where TeamId=" + postSubCategoryMapping.TeamId + " and SubCategoryId=" + postSubCategoryMapping.SubCategoryId + "";
                var result3 = (await dbConnection.QueryAsync<SubCategoryMappingModel>(query3,
                    transaction: await GetDbTransactionAsync())).ToList();
                return result3;
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


        public async Task<List<SkillsMatrixModel>> GetEmployeeScores(int employeeId)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = $"SELECT * FROM dbo.SkillsMatrix WHERE EmployeeId={employeeId};";
            var result = (await dbConnection.QueryAsync<SkillsMatrixModel>(query,
                transaction: await GetDbTransactionAsync())).ToList();
            return result;
        }

        public async Task DeleteEmployee(int employeeId)
        {
            var dbConnection = await GetDbConnectionAsync();
            var query = $"DELETE FROM dbo.EmployeeDetails WHERE EmployeeId={employeeId}";
            await dbConnection.QueryAsync<string>(query, transaction: await GetDbTransactionAsync());
        }

        public async Task DeleteTeam(int teamId)
        {
            var dbConnection = await GetDbConnectionAsync();
            var getEmployeesQuery = $"SELECT EmployeeId from dbo.EmployeeDetails where TeamId={teamId}";
            var employeeIds = (await dbConnection.QueryAsync<int>(getEmployeesQuery,
                transaction: await GetDbTransactionAsync())).ToList();

            foreach (var employeeId in employeeIds)
            {
                var deleteScoreQuery = $"DELETE FROM dbo.SkillsMatrix where EmployeeId={employeeId}";
                await dbConnection.QueryAsync(deleteScoreQuery, transaction: await GetDbTransactionAsync());
            }

            var deleteMappingsQuery = $"DELETE FROM dbo.SubCategoryMapping where TeamId={teamId}";
            await dbConnection.QueryAsync(deleteMappingsQuery, transaction: await GetDbTransactionAsync());

            var deleteEmployeesQuery = $"DELETE FROM dbo.EmployeeDetails where TeamId={teamId}";
            await dbConnection.QueryAsync(deleteEmployeesQuery, transaction: await GetDbTransactionAsync());

            var deleteTeamQuery = $"DELETE FROM dbo.TeamMaster WHERE id={teamId}";
            await dbConnection.QueryAsync(deleteTeamQuery, transaction: await GetDbTransactionAsync());
        }
        public async Task DeleteSubCategory(int subCategoryId)
        {
            var dbConnection = await GetDbConnectionAsync();

            var deleteScoreQuery = $"DELETE FROM dbo.SkillsMatrix where SubCategoryId={subCategoryId}";
            await dbConnection.QueryAsync(deleteScoreQuery , transaction: await GetDbTransactionAsync());

            var deleteMappingsQuery = $"DELETE FROM dbo.SubCategoryMapping where SubCategoryId={subCategoryId}";
            await dbConnection.QueryAsync(deleteMappingsQuery , transaction: await GetDbTransactionAsync());

            var deleteSubCategoryQuery = $"DELETE FROM dbo.SubCategoryMaster WHERE id={subCategoryId}";
            await dbConnection.QueryAsync(deleteSubCategoryQuery, transaction: await GetDbTransactionAsync());
        }
        public async Task EditClientTeams(EditClientTeamsModel editClientTeams)
        {
            var dbConnection = await GetDbConnectionAsync();

            var updateClientQuery = $"UPDATE dbo.ClientMaster " +
                $"SET ClientName='{editClientTeams.ClientName}', " +
                $"ClientDescription='{editClientTeams.ClientDescription}', " +
                $"ModifiedOn='{editClientTeams.ModifiedOn}' " +
                $"WHERE Id={editClientTeams.Id}" ;
            await dbConnection.QueryAsync(updateClientQuery, transaction: await GetDbTransactionAsync());

            foreach(var team in editClientTeams.TeamMasterList)
            {
                var updateTeamQuery = $"UPDATE dbo.TeamMaster " +
                $"SET TeamName='{team.TeamName}', " +
                $"TeamDescription='{team.TeamDescription}', " +
                $"ModifiedOn='{editClientTeams.ModifiedOn}' " +
                $"WHERE Id={team.Id}";
                await dbConnection.QueryAsync(updateTeamQuery, transaction: await GetDbTransactionAsync());
            }
        }
        public async Task EditCategorySubcategory(EditCategorySubcategoryModel editCategorySubcategoryObj)
        {
            var dbConnection = await GetDbConnectionAsync();

            var updateCategoryQuery = $"UPDATE dbo.CategoryMaster " +
                $"SET CategoryName='{editCategorySubcategoryObj.CategoryName}', " +
                $"CategoryDescription='{editCategorySubcategoryObj.CategoryDescription}', " +
                $"ModifiedOn='{editCategorySubcategoryObj.ModifiedOn}' " +
                $"WHERE Id={editCategorySubcategoryObj.Id}";
            await dbConnection.QueryAsync(updateCategoryQuery, transaction: await GetDbTransactionAsync());


            foreach (var subCategory in editCategorySubcategoryObj.SubCategories)
            {
                var updateSubCategoryQuery = $"UPDATE dbo.SubCategoryMaster " +
                $"SET SubCategoryName='{subCategory.SubCategoryName}', " +
                $"SubCategoryDescription='{subCategory.SubCategoryDescription}', " +
                $"ModifiedOn='{editCategorySubcategoryObj.ModifiedOn}' " +
                $"WHERE Id={subCategory.Id}";
                await dbConnection.QueryAsync(updateSubCategoryQuery, transaction: await GetDbTransactionAsync());
            }
        }
        public async Task EditTeamEmployees(EditTeamEmployeesModel editTeamEmployeesObj)
        {
            var dbConnection = await GetDbConnectionAsync();

            var updateTeamQuery = $"UPDATE dbo.TeamMaster " +
                $"SET TeamName='{editTeamEmployeesObj.TeamName}', " +
                $"TeamDescription='{editTeamEmployeesObj.TeamDescription}', " +
                $"ModifiedOn='{editTeamEmployeesObj.ModifiedOn}' " +
                $"WHERE Id={editTeamEmployeesObj.Id}";
            await dbConnection.QueryAsync(updateTeamQuery, transaction: await GetDbTransactionAsync());


            foreach (var employee in editTeamEmployeesObj.Employees)
            {
                var updateEmployeeQuery = $"UPDATE dbo.EmployeeDetails " +
                $"SET EmployeeName='{employee.EmployeeName}' " +
                $"WHERE EmployeeId={employee.EmployeeId}";
                await dbConnection.QueryAsync(updateEmployeeQuery, transaction: await GetDbTransactionAsync());
            }
        }
    }
}
