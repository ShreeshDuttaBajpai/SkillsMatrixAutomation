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
    public static class ClientMasterEndpoint
    {
        public static WebApplication MapClientMasterEndpoints(this WebApplication app)
        {
            _ = app.MapGet("/clientmaster", async ([FromServices] ISkillsMatrixService skillsMatrixService) =>
            {
                var result = await skillsMatrixService.GetClientListAsync();
                return (result);
            }).WithTags("SkillsMatrix");
            return app;
        }
    }
}
