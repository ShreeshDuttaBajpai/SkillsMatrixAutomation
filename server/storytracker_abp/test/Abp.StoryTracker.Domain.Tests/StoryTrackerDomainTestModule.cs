using Abp.StoryTracker.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Abp.StoryTracker;

[DependsOn(
    typeof(StoryTrackerEntityFrameworkCoreTestModule)
    )]
public class StoryTrackerDomainTestModule : AbpModule
{

}
