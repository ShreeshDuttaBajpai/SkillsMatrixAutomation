using AutomationAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace AutomationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("{Emp_id}")]
        public IActionResult GetEmp(int Emp_id)
        {

            string query2 = $"select * from StoryTrackerDB where Name in (select Emp_name from Emp_details  where Emp_id ={Emp_id})";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query2, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
