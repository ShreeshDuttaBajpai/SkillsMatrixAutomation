using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class EmployeeDetailsApplicationContractsModel
    {

        public int EmployeeId { get; set; }
        public int? TeamId { get; set; }
        public string EmployeeName { get; set; }
    }
}
