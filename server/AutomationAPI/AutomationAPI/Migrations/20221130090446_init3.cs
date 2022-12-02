using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutomationAPI.Migrations
{
    public partial class init3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bugs_count",
                table: "StoryTrackerDB");

            migrationBuilder.DropColumn(
                name: "Code_deviation_count",
                table: "StoryTrackerDB");

            migrationBuilder.DropColumn(
                name: "Remarks",
                table: "StoryTrackerDB");

            migrationBuilder.DropColumn(
                name: "Serial_no",
                table: "StoryTrackerDB");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Bugs_count",
                table: "StoryTrackerDB",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Code_deviation_count",
                table: "StoryTrackerDB",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Remarks",
                table: "StoryTrackerDB",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Serial_no",
                table: "StoryTrackerDB",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
