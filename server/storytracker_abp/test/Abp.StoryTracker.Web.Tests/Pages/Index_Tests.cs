using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace Abp.StoryTracker.Pages;

public class Index_Tests : StoryTrackerWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
