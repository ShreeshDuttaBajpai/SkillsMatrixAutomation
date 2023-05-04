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
    public static class SubCategoryMasterEndpoint
    {
        public static WebApplication MapSubCategoryMasterEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/SubCategoryMaster", async ([FromServices] ISkillsMatrixService skillsMatrixService) =>
            {
                var result = await skillsMatrixService.GetCategoryListAsync();
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }

        public static WebApplication MapSubCategoryMasterAndCategoryEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/SubCategoryAndCategoryMaster", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromQuery] int CategoryId) =>
            {
                var result = await skillsMatrixService.GetSubCategoryAndCategoryListAsync(CategoryId);
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }


        public static WebApplication MapPostSubCategoryMasterEndpoints(this WebApplication app)
        {
            _ = app.MapPost("/postSubCategoryMaster", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromBody] SubCategoryMasterApplicationContractsModel postSubCategory) =>
            {
                await skillsMatrixService.PostSubCategoryListAsync(postSubCategory);
            }).WithTags("SkillsMatrix");
            return app;
        }
    }
}
