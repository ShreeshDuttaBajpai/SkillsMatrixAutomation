using Abp.StoryTracker.StoryTrackerServiceInterface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Abp.StoryTracker.Endpoints
{
    public static class StoryTrackerEndpoint
    {
        public static WebApplication MapStoryTrackerEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/storytracker", async ([FromServices] IStoryTrackerService storyTrackerService) =>
            {
                var result = await storyTrackerService.GetStoryListAsync();
                return (result);
            }).WithTags("StoryTracker");
            return app;
        }
    }
}
