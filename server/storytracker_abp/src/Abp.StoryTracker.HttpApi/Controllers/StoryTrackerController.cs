using Abp.StoryTracker.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Abp.StoryTracker.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class StoryTrackerController : AbpControllerBase
{
    protected StoryTrackerController()
    {
        LocalizationResource = typeof(StoryTrackerResource);
    }
}
