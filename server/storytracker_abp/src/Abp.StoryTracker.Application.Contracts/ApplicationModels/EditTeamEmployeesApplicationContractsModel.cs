using System;
using System.Collections.Generic;
using System.Text;

namespace Abp.StoryTracker.ApplicationModels
{
    public class EditTeamEmployeesApplicationContractsModel
    {
        public int Id { get; set; }
        public string? TeamName { get; set; }
        public string? TeamDescription { get; set;}
        public DateTime ModifiedOn = DateTime.Now;
        public List<EmployeeDetailsApplicationContractsModel> Employees { get; set; }
    }
}
