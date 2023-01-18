using AutomationAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using System.Data;
using System.Data.Common;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace AutomationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartsController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public ChartsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("{firstCol}/{secondCol}")]

        public JsonResult Get(string firstCol, string secondCol)
        {
                string query2 = $"select Status ,count(*) as valcount from StoryTrackerDB where " +
                $"( Team = '{firstCol}' and  Name = '{secondCol}') group by Status ";
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


//public string GetBarChartVals(string tableName, string firstCol, string secondCol, string[] selectedValArr)
//{
//    List<string> dataList = new List<string>();
//    foreach (var val in selectedValArr)
//    {
//        string getGroupedValsQuery = $"SELECT [{secondCol}], COUNT(*) AS ValCount " +
//        $"FROM [{tableName}] WHERE [{firstCol}] = '{val}' GROUP BY [{secondCol}]";
//        System.Data.DataTable table = new System.Data.DataTable();
//        string sqlDataSource = dbConnection;
//        SqlDataReader myReader;
//        using (SqlConnection myCon = new SqlConnection(sqlDataSource))
//        {
//            myCon.Open();
//            using (SqlCommand myCommand = new SqlCommand(getGroupedValsQuery, myCon))
//            {
//                myReader = myCommand.ExecuteReader();
//                table.Load(myReader);
//                myReader.Close();
//                myCon.Close();
//            }
//        }
//        //Console.WriteLine(JsonConvert.SerializeObject(table));
//        dataList.Add(JsonConvert.SerializeObject(table));
//    }

//    return JsonConvert.SerializeObject(dataList);

//}
