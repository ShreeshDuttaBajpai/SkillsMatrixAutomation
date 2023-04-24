using Abp.StoryTracker.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Abp.StoryTracker.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(StoryTrackerEntityFrameworkCoreModule),
    typeof(StoryTrackerApplicationContractsModule)
    )]
public class StoryTrackerDbMigratorModule : AbpModule
{

}
