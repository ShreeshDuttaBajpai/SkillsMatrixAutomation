using System;
using System.Threading.Tasks;
using Abp.StoryTracker.Endpoints;
using Abp.StoryTracker.SkillsMatrixRepo;
using Abp.StoryTracker.SkillsMatrixRepoInterface;
using Abp.StoryTracker.SkillsMatrixService;
using Abp.StoryTracker.SkillsMatrixServiceInterface;
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
            builder.Services.AddScoped<ISkillsMatrixService, Abp.StoryTracker.SkillsMatrixService.SkillsMatrixService>();
            builder.Services.AddScoped<ISkillsMatrixRepository, SkillsMatrixRepository>();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddCors(policyBuilder =>
             policyBuilder.AddDefaultPolicy(policy =>
             policy.WithOrigins("*").AllowAnyMethod().AllowAnyHeader())
            );
            builder.Services.AddSwaggerGen();
            var app = builder.Build();
            app.UseCors();
            app.MapSkillsMatrixEndpoints();
            app.MapClientMasterEndpoints();
            app.MapTeamMasterEndpoints();
            app.MapTeamMasterandClientsEndpoints();
            app.MapCategoryMasterEndpoints();
            app.MapPostClientMasterEndpoints();
            app.MapPostTeamMasterEndpoints();
            app.MapSubCategoryMasterAndCategoryEndpoints();
            app.MapSubCategoryMasterEndpoints();
            app.MapPostCategoryMasterEndpoints();
            app.MapGetSubCategoryMappingEndpoints();
            app.MapPostSubCategoryMasterEndpoints();
            app.MapPostSubCategoryMappingEndpoints();
            app.MapEmployeeDetailsEndpoints();
            app.MapPutSubCategoryMappingEndpoints();
            app.MapEmployeeDetailsTeamWiseEndpoints();
            app.MapPostSkillMatrixEndpoints();
            app.MapSkillsMatrixJoinTablesEndpoints();
            app.MapEmployeeScoreEndpoints();
            app.MapPostEmployeeEndpoints();
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
