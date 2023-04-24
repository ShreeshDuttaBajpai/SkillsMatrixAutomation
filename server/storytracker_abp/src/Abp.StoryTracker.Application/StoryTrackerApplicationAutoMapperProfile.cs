using Abp.StoryTracker.ApplicationModels;
using Abp.StoryTracker.Models;
using AutoMapper;

namespace Abp.StoryTracker;

public class StoryTrackerApplicationAutoMapperProfile : Profile
{
    public StoryTrackerApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<StoryTrackerModel, StoryTrackerApplicationContractsModel>();
    }
}
