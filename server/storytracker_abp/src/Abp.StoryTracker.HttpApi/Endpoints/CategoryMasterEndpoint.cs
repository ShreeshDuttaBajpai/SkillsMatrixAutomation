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
    public static class CategoryMasterEndpoint
    {
        public static WebApplication MapCategoryMasterEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/categorymaster", async ([FromServices] ISkillsMatrixService skillsMatrixService) =>
            {
                var result = await skillsMatrixService.GetCategoryListAsync();
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }

        public static WebApplication MapPostCategoryMasterEndpoints(this WebApplication app)
        {
            _ = app.MapPost("/postCategoryMaster", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromBody] CategoryMasterApplicationContractsModel postCategory) =>
            {
                await skillsMatrixService.PostCategoryListAsync(postCategory);
            }).WithTags("SkillsMatrix");
            return app;
        }
    }
}
