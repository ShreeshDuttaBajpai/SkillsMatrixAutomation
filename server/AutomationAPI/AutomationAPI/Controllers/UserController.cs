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
        [HttpPost]
        public JsonResult Post([FromBody] StoryTrackerDB us)
        {
            string query1 = $"insert into dbo.StoryTrackerDB values('" + us.Ticket_no + "'," +
                "'" + us.Client + "', '" + us.Team + "','" + us.Name + "','" + us.Ticket_type + "'," +
                " " + us.Story_point + ",'" + us.Start_date + "','" + us.End_date + "'," + us.Hours + "," +
                "'" + us.Status + "','" + us.Code_reviewer + "', '" + us.Code_deviation_count + "', '"+ us.Bugs_count+"', '"+ us.Remarks+"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query1, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }


        [HttpPut("{ticket}")]
        public JsonResult Put([FromBody] StoryTrackerDB us)
        {
            string query1 = $"update dbo.StoryTrackerDB set Client = '" + us.Client + "', Team='" + us.Team + "', Name='" + us.Name + "'" +
                ", Ticket_type = '" + us.Ticket_type + "', Story_point=" + us.Story_point + ", Start_date='" + us.Start_date + "', End_date='" + us.End_date + "', Hours=" + us.Hours + "," +
                "Status='" + us.Status + "', Code_reviewer='" + us.Code_reviewer + "', Code_deviation_count='" + us.Code_deviation_count + "', Bugs_count='" + us.Bugs_count + "', " +
                "Remarks='" + us.Remarks + "'  where Ticket_no = '" + us.Ticket_no + "'";
            DataTable table2 = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query1, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table2.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{ticket}")]
        public JsonResult Delete(string ticket)
        {
            string query3 = $"delete from StoryTrackerDB where Ticket_no ='{ticket} '";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query3, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
