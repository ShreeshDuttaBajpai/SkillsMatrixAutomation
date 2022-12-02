using AutomationAPI.Controllers;
using FakeItEasy;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace GettingUser.Tests
{
    public class UserControllerTests
    {
        private readonly IConfiguration _configuration;
        public UserControllerTests()
        {
            _configuration = A.Fake<IConfiguration>();
        }
        [Fact]
        public void GetUserByIdSuccess()
        {
            //Arrange

            var controller = new UserController();


        }
    }
}