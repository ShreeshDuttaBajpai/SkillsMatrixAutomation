using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class GetSkillsMatrixJoinTablesApplicationContractsModel
    {
        public string? clientName { get; set; }
        [ForeignKey(nameof(clientName))]
        public ClientMasterApplicationContractsModel? ClientMasterApplicationContractsModel { get; set; }

        public string? teamName { get; set; }
        [ForeignKey(nameof(teamName))]
        public TeamMasterApplicationContractsModel? TeamMasterApplicationContractsModel { get; set; }

        public int? employeeID { get; set; }
        [ForeignKey(nameof(employeeID))]
        public EmployeeDetailsApplicationContractsModel? EmployeeDetailsApplicationContractsModel { get; set; }

        public string? employeeName { get; set; }
        [ForeignKey(nameof(employeeName))]
        public EmployeeDetailsApplicationContractsModel? EmployeeDetailsApplicationContractsModels { get; set; }

        public string? categoryName { get; set; }
        [ForeignKey(nameof(categoryName))]
        public CategoryMasterApplicationContractsModel? CategoryMasterApplicationContractsModel { get; set; }

        public string? subCategoryName { get; set; }
        [ForeignKey(nameof(subCategoryName))]
        public SubCategoryMappingApplicationContractsModel? SubCategoryMappingApplicationContractsModel { get; set; }


        public int? clientExpectedScore { get; set; }
        [ForeignKey(nameof(clientExpectedScore))]
        public SubCategoryMappingApplicationContractsModel? SubCategoryMappingApplicationContractsModels { get; set; }
        public int EmployeeScore { get; set; }
        //clientName
        //    TeamName
        //    EmployeeID
        //    EmployeeName
        //    CategoryName
        //    SubCategoryName
        //    ClientExpectedScore
        //    EmployeeScore
    }
}
