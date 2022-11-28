using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AutomationtestAPIs.Migrations
{
    public partial class initmig1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StoryTrackerDBs",
                columns: table => new
                {
                    Ticket_no = table.Column<string>(nullable: false),
                    Serial_no = table.Column<int>(nullable: false),
                    Client = table.Column<string>(nullable: true),
                    Team = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Ticket_type = table.Column<string>(nullable: true),
                    Story_point = table.Column<int>(nullable: false),
                    Start_date = table.Column<DateTime>(nullable: false),
                    End_date = table.Column<DateTime>(nullable: false),
                    Hours = table.Column<int>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    Code_reviewer = table.Column<string>(nullable: true),
                    Code_deviation_count = table.Column<string>(nullable: true),
                    Bugs_count = table.Column<string>(nullable: true),
                    Remarks = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoryTrackerDBs", x => x.Ticket_no);
                });

            migrationBuilder.CreateTable(
                name: "UserModels",
                columns: table => new
                {
                    Username = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Designation = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModels", x => x.Username);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StoryTrackerDBs");

            migrationBuilder.DropTable(
                name: "UserModels");
        }
    }
}
