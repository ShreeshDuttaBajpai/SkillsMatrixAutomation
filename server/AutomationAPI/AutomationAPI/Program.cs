using AutomationAPI.Models;
using FluentAssertions.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);
string connect = builder.Configuration.GetConnectionString("MyConnectionString");

// Add services to the container.

builder.Services.AddMvc()
        .AddNewtonsoftJson(
         options => {
             options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
         });

builder.Services.AddControllers();
//builder.Services.AddDbContext<LoginContext>(options => options.(builder.Configuration.GetConnectionString("MyConnectionString")));

builder.Services.AddDbContext<LoginContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("MyConnectionString"));

});

builder.Services.AddCors();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Excel API");
    });
}

app.UseCors(x => x.WithOrigins("http://localhost:3000").AllowAnyHeader().WithMethods("GET", "POST","DELETE").AllowCredentials());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();



