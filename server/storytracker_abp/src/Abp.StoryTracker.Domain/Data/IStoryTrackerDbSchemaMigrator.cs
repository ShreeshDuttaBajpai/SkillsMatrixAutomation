using System.Threading.Tasks;

namespace Abp.StoryTracker.Data;

public interface IStoryTrackerDbSchemaMigrator
{
    Task MigrateAsync();
}
