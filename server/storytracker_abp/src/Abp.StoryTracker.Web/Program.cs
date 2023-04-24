using System;
using System.Threading.Tasks;
using Abp.StoryTracker.Endpoints;
using Abp.StoryTracker.StoryTrackerRepo;
using Abp.StoryTracker.StoryTrackerRepoInterface;
using Abp.StoryTracker.StoryTrackerService;
using Abp.StoryTracker.StoryTrackerServiceInterface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Events;

namespace Abp.StoryTracker.Web;

public class Program
{
    public async static Task<int> Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
#if DEBUG
            .MinimumLevel.Debug()
#else
            .MinimumLevel.Information()
#endif
            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
            .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
            .Enrich.FromLogContext()
            .WriteTo.Async(c => c.File("Logs/logs.txt"))
            .WriteTo.Async(c => c.Console())
            .CreateLogger();

        try
        {
            Log.Information("Starting web host.");
            var builder = WebApplication.CreateBuilder(args);
            builder.Host.AddAppSettingsSecretsJson()
                .UseAutofac()
                .UseSerilog();
            await builder.AddApplicationAsync<StoryTrackerWebModule>();
            builder.Services.AddScoped<IStoryTrackerService, Abp.StoryTracker.StoryTrackerService.StoryTrackerService>();
            builder.Services.AddScoped<IStoryTrackerRepository, StoryTrackerRepository>();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddCors(policyBuilder =>
             policyBuilder.AddDefaultPolicy(policy =>
             policy.WithOrigins("*").AllowAnyMethod().AllowAnyHeader())
            );
            builder.Services.AddSwaggerGen();
            var app = builder.Build();
            app.UseCors();
            app.MapStoryTrackerEndpoints();
            await app.InitializeApplicationAsync();
            await app.RunAsync();
            return 0;
        }
        catch (Exception ex)
        {
            if (ex is HostAbortedException)
            {
                throw;
            }

            Log.Fatal(ex, "Host terminated unexpectedly!");
            return 1;
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }
}
