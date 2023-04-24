using Volo.Abp.Settings;

namespace Abp.StoryTracker.Settings;

public class StoryTrackerSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(StoryTrackerSettings.MySetting1));
    }
}
