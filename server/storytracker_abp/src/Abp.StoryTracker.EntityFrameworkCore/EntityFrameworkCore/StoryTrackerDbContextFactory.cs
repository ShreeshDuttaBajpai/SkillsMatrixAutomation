using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Abp.StoryTracker.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class StoryTrackerDbContextFactory : IDesignTimeDbContextFactory<StoryTrackerDbContext>
{
    public StoryTrackerDbContext CreateDbContext(string[] args)
    {
        StoryTrackerEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<StoryTrackerDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new StoryTrackerDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../Abp.StoryTracker.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
