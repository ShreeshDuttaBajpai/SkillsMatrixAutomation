using Abp.StoryTracker.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Abp.StoryTracker.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class StoryTrackerPageModel : AbpPageModel
{
    protected StoryTrackerPageModel()
    {
        LocalizationResourceType = typeof(StoryTrackerResource);
    }
}
