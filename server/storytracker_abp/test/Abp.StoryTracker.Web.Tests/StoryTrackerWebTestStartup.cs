using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace Abp.StoryTracker;

public class StoryTrackerWebTestStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddApplication<StoryTrackerWebTestModule>();
    }

    public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
    {
        app.InitializeApplication();
    }
}
