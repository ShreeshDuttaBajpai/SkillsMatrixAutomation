using AutomationAPI.Controllers;
using AutomationAPI.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.IO;
using System.Web.Http.Results;

namespace EmployeeControl.Tests
{
    [TestClass]
    public class UnitTest1
    {
     
        UserController _controller;
        public UnitTest1()
        {
           
            var builder = new ConfigurationBuilder()
         .SetBasePath(Directory.GetCurrentDirectory())
         .AddJsonFile("appsettings.json");
            var config = builder.Build();
            _controller = new UserController(config);
        }

        [TestMethod]
            public void UserGetByIdSuccess()
            {
                
                var response = _controller.GetEmp(300);

                var contentResult = response as OkNegotiatedContentResult<Employee>;

                Assert.IsNotNull(contentResult);
                Assert.IsNotNull(contentResult.Content);
                Assert.AreEqual(300, contentResult.Content.Emp_id);
            }
        }
    }
