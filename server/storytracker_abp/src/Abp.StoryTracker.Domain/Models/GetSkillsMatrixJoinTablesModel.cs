using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class GetSkillsMatrixJoinTablesModel
    {
        public string? clientName { get; set; }
        [ForeignKey(nameof(clientName))]
        public ClientMasterModel? ClientMasterModel { get; set; }

        public string? teamName { get; set; }
        [ForeignKey(nameof(teamName))]
        public TeamMasterModel? TeamMasterModel { get; set; }

        public int? employeeID { get; set; }
        [ForeignKey(nameof(employeeID))]
        public EmployeeDetailsModel? EmployeeDetailsModel { get; set; }

        public string? employeeName { get; set; }
        [ForeignKey(nameof(employeeName))]
        public EmployeeDetailsModel? EmployeeDetailsModels { get; set; }

        public string? categoryName { get; set; }
        [ForeignKey(nameof(categoryName))]
        public CategoryMasterModel? CategoryMasterModel { get; set; }

        public string? subCategoryName { get; set; }
        [ForeignKey(nameof(subCategoryName))]
        public SubCategoryMappingModel? SubCategoryMappingModel { get; set; }


        public int? clientExpectedScore { get; set; }
        [ForeignKey(nameof(clientExpectedScore))]
        public SubCategoryMappingModel? SubCategoryMappingModels { get; set; }
        public int EmployeeScore { get; set; }
    }
}
