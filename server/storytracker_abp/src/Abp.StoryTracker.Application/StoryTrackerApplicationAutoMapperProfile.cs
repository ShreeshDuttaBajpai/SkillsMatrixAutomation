﻿using Abp.StoryTracker.ApplicationModels;
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
        CreateMap<CategoryMasterModel, CategoryMasterApplicationContractsModel>();
        CreateMap<ClientMasterModel, ClientMasterApplicationContractsModel>();
        CreateMap<SkillsMatrixModel, SkillsMatrixApplicationContractsModel>();
        CreateMap<SubCategoryMasterModel, SubCategoryMasterApplicationContractsModel>();
        CreateMap<TeamMasterModel, TeamMasterApplicationContractsModel>();
        CreateMap<SubCategoryMappingModel, SubCategoryMappingApplicationContractsModel>();
        CreateMap<EmployeeDetailsModel, EmployeeDetailsApplicationContractsModel>();

        CreateMap<CategoryMasterApplicationContractsModel, CategoryMasterModel>();
        CreateMap<ClientMasterApplicationContractsModel, ClientMasterModel>();
        CreateMap<SkillsMatrixApplicationContractsModel, SkillsMatrixModel>();
        CreateMap<SubCategoryMasterApplicationContractsModel, SubCategoryMasterModel>();
        CreateMap<TeamMasterApplicationContractsModel, TeamMasterModel>();
        CreateMap<SubCategoryMappingApplicationContractsModel, SubCategoryMappingModel>();
        CreateMap<EmployeeDetailsApplicationContractsModel, EmployeeDetailsModel>();


        CreateMap<PostSubCategoryMappingApplicationContractsModel, SubCategoryMappingModel>();
        CreateMap<GetSkillsMatrixJoinTablesModel, GetSkillsMatrixJoinTablesApplicationContractsModel>();
        CreateMap<GetSkillsMatrixJoinTablesApplicationContractsModel, GetSkillsMatrixJoinTablesModel>();
        CreateMap<EditClientTeamsApplicationContractsModel, EditClientTeamsModel>();
        CreateMap<EditCategorySubcategoryApplicationContractsModel, EditCategorySubcategoryModel>();
        CreateMap<EditTeamEmployeesApplicationContractsModel, EditTeamEmployeesModel>();
    }
}
