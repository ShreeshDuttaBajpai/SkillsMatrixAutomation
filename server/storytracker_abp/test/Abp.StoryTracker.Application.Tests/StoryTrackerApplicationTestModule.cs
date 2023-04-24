using Volo.Abp.Modularity;

namespace Abp.StoryTracker;

[DependsOn(
    typeof(StoryTrackerApplicationModule),
    typeof(StoryTrackerDomainTestModule)
    )]
public class StoryTrackerApplicationTestModule : AbpModule
{

}
