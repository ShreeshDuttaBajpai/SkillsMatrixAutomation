using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Abp.StoryTracker.Data;

/* This is used if database provider does't define
 * IStoryTrackerDbSchemaMigrator implementation.
 */
public class NullStoryTrackerDbSchemaMigrator : IStoryTrackerDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
