﻿using AutomationAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace AutomationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ReviewController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("{Emp_name}")]
        public JsonResult Get(string Emp_name)
        {
            string query2 = $"select * from StoryTrackerDB where Code_reviewer like '%{Emp_name}%'";
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
        [HttpPut("{ticket}")]
        public JsonResult Put(string ticket, [FromBody] StoryTrackerDB us)
        {
            string query1 = $"update dbo.CodeReview values set Code_deviation_count='" + us.Code_deviation_count +
                "',Bugs_count='" + us.Bugs_count + "',Remarks='" + us.Remarks + "')";
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
    }
}
