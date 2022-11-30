using AutomationAPI.Controllers;
using AutomationAPI.Models;
using Microsoft.Extensions.Configuration;
using System.Web.Http.Results;
using Xunit;

namespace EmployeeX.Tests
{
    public class EmployeeTests
    {
        private readonly IConfiguration _configuration;
        public UserController _controller;
        public EmployeeTests()
        {
            _controller = new UserController(_configuration);
        }
        [Fact]
        public void UserGetByIdSuccess()
        {
            var response = _controller.GetEmp(300);

            var contentResult = response as OkNegotiatedContentResult<Employee>;

            Assert.NotNull(contentResult);
            Assert.NotNull(contentResult.Content);
            Assert.Equal(300, contentResult.Content.Emp_id);

        }
    }
}