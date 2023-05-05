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
    public static class SkillsMatrixEndpoint
    {
        public static WebApplication MapSkillsMatrixEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/skillsmatrix", async ([FromServices] ISkillsMatrixService skillsMatrixService) =>
            {
                var result = await skillsMatrixService.GetSkillsMatrixListAsync();
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }

        public static WebApplication MapPostSkillMatrixEndpoints(this WebApplication app)
        {
            _ = app.MapPost("/PostSkillMatrix", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromBody] PostSkillMatrixApplicationContractsModel postSkillMatrix) =>
            {
                await skillsMatrixService.PostSkillMatrixListAsync(postSkillMatrix);
            }).WithTags("SkillsMatrix");
            return app;
        }
    }
}
