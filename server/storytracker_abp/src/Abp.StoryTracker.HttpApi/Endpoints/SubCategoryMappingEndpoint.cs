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
    public static class SubCategoryMappingEndpoint
    {
        public static WebApplication MapGetSubCategoryMappingEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/GetSubCategoryMapping", async ([FromServices] ISkillsMatrixService skillsMatrixService) =>
            {
                var result = await skillsMatrixService.GetSubCategoryMappingListAsync();
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }



        public static WebApplication MapPostSubCategoryMappingEndpoints(this WebApplication app)
        {
            _ = app.MapPost("/PostSubCategoryMapping", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromBody] Object obj) =>
            {
                await skillsMatrixService.PostSubCategoryMappingListAsync(obj);
            }).WithTags("SkillsMatrix");
            return app;
        }


        public static WebApplication MapPutSubCategoryMappingEndpoints(this WebApplication app)
        {
            _ = app.MapPut("/PutSubCategoryMapping", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromBody] SubCategoryMappingApplicationContractsModel putSubCategoryMapping) =>
            {
                await skillsMatrixService.PutSubCategoryMappingListAsync(putSubCategoryMapping);
            }).WithTags("SkillsMatrix");
            return app;
        }
    }
}
