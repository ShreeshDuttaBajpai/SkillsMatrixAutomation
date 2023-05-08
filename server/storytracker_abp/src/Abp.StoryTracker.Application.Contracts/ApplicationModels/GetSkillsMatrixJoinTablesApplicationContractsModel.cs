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
        public string? teamName { get; set; }
        public int? employeeID { get; set; }
        public string? employeeName { get; set; }
        public string? categoryName { get; set; }
        public string? subCategoryName { get; set; }
        public int? clientExpectedScore { get; set; }
        public int EmployeeScore { get; set; }
    }
}
