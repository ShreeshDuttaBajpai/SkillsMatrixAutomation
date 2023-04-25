using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Abp.StoryTracker.Data;
using Volo.Abp.DependencyInjection;

namespace Abp.StoryTracker.EntityFrameworkCore;

public class EntityFrameworkCoreStoryTrackerDbSchemaMigrator
    : IStoryTrackerDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreStoryTrackerDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the StoryTrackerDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<SkillsMatrixDbContext>()
            .Database
            .MigrateAsync();
    }
}
