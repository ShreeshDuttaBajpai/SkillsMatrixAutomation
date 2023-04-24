using System;
using System.Collections.Generic;
using System.Text;
using Abp.StoryTracker.Localization;
using Volo.Abp.Application.Services;

namespace Abp.StoryTracker;

/* Inherit your application services from this class.
 */
public abstract class StoryTrackerAppService : ApplicationService
{
    protected StoryTrackerAppService()
    {
        LocalizationResource = typeof(StoryTrackerResource);
    }
}
