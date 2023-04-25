﻿using Abp.StoryTracker.SkillsMatrixServiceInterface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abp.StoryTracker.Endpoints
{
    public static class TeamMasterEndpoint
    {
        public static WebApplication MapTeamMasterEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/teammaster", async ([FromServices] ISkillsMatrixService skillsMatrixService) =>
            {
                var result = await skillsMatrixService.GetTeamListAsync();
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }

        public static WebApplication MapTeamMasterandClientsEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/teamclients", async ([FromServices] ISkillsMatrixService skillsMatrixService, [FromQuery] int ClientId) =>
            {
                var result = await skillsMatrixService.GetClientTeamListAsync(ClientId);
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }
    }
}
