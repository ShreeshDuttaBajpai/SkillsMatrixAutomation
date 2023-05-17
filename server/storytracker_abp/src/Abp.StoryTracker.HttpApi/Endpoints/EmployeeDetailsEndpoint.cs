using Abp.StoryTracker.ApplicationModels;
using Abp.StoryTracker.SkillsMatrixServiceInterface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Endpoints
{
    public static class EmployeeDetailsEndpoint
    {
        public static WebApplication MapEmployeeDetailsEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/EmployeeDetails", async ([FromServices] ISkillsMatrixService skillsMatrixService) =>
            {
                var result = await skillsMatrixService.GetEmployeeDetailsListAsync();
                return (result);
            }).WithTags("SkillsMatrix");

            _ = app.MapDelete("/EmployeeDelete", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromQuery] int employeeId) =>
            {
                await skillsMatrixService.DeleteEmployee(employeeId);
            }).WithTags("SkillsMatrix");
            return app;
        }


        public static WebApplication MapEmployeeDetailsTeamWiseEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/EmployeeDetailsTeamWise", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromQuery] int TeamId) =>
            {
                var result = await skillsMatrixService.GetEmployeeDetailsTeamWiseListAsync(TeamId);
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }

        public static WebApplication MapEmployeeScoreEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/EmployeeScores", async ([FromServices] ISkillsMatrixService skillsMatrixService, int teamId) =>
            {
                var result = await skillsMatrixService.GetEmployeeScores(teamId);
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }


        public static WebApplication MapPostEmployeeEndpoints(this WebApplication app)
        {
            _ = app.MapPost("/postEmployeeMaster", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromBody] EmployeeDetailsApplicationContractsModel postEmployee) =>
            {
                await skillsMatrixService.PostEmployeeListAsync(postEmployee);
            }).WithTags("SkillsMatrix");
            return app;
        }
    }
}
