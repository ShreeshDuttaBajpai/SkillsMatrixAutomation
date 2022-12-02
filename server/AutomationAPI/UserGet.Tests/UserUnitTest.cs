using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Http.Results;
using AutomationAPI;
using AutomationAPI.Models;
using System;
using System.Net.Http;
using System.Web.Http;

namespace UserGet.Tests
{
    [TestClass]
    public class UserUnitTest
    {
        [TestMethod]
        public void UserGetByIdSuccess()
        {
            var controller = new UserController();

            var response = controller.Get(300);

            var contentResult=response as OkNegotiatedContentResult<Employee>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
            Assert.AreEqual(300, contentResult.Content.Emp_id);
        }
    }
}
