using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace Abp.StoryTracker.Web;

[Dependency(ReplaceServices = true)]
public class StoryTrackerBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "StoryTracker";
}
