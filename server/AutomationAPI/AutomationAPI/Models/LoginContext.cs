using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AutomationAPI.Models
{
    public class LoginContext : DbContext
    {
        public LoginContext()
        {
        }
        public LoginContext(DbContextOptions<LoginContext> options) : base(options)
        {
        }
        //public virtual DbSet<Login> UserModels { get; set; }
        public virtual DbSet<StoryTrackerDB> StoryTrackerDB { get; set; }
    }
}
