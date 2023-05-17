using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Models
{
    public class EditTeamEmployeesModel
    {
        public int Id { get; set; }
        public string? TeamName { get; set; }
        public string? TeamDescription { get; set; }
        public DateTime ModifiedOn = DateTime.Now;
        public List<EmployeeDetailsModel> Employees { get; set; }
    }
}
