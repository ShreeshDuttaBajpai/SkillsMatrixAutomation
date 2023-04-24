using Abp.StoryTracker.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Abp.StoryTracker.Permissions;

public class StoryTrackerPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(StoryTrackerPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(StoryTrackerPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<StoryTrackerResource>(name);
    }
}
