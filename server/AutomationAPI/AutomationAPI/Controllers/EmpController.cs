using AutomationAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AutomationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly LoginContext _context;
        public EmpController(LoginContext context,IConfiguration configuration)
        {
            _configuration = configuration;
            _context = context;
        }
        private string Generate(Employee emp)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim("Emp_id",emp.Emp_id.ToString()),
                new Claim("Emp_name",emp.Emp_name.ToString()),
                new Claim("Emp_designation",emp.Emp_designation.ToString()),
            };
            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                 _configuration["Jwt:Audience"],
                 claims,
                 expires: DateTime.Now.AddMinutes(15),
                 signingCredentials: credentials
                 );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        
        [HttpPost]
        public IActionResult Post([FromBody] Employee us)
        {
            string query1 = $"insert into dbo.Emp_details values(" + us.Emp_id + "," +
                "'" + us.Emp_name + "', '" + us.Emp_designation + "')";
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
            var token = Generate(us);

            return Ok(token);
           
        }
    }
}
