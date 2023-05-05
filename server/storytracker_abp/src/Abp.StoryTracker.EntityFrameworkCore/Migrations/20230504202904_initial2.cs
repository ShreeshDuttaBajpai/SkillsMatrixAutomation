using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Abp.StoryTracker.Migrations
{
    /// <inheritdoc />
    public partial class initial2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SkillsMatrix_TeamMaster_TeamId",
                table: "SkillsMatrix");

            migrationBuilder.DropIndex(
                name: "IX_SkillsMatrix_TeamId",
                table: "SkillsMatrix");

            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "SkillsMatrix");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TeamId",
                table: "SkillsMatrix",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SkillsMatrix_TeamId",
                table: "SkillsMatrix",
                column: "TeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_SkillsMatrix_TeamMaster_TeamId",
                table: "SkillsMatrix",
                column: "TeamId",
                principalTable: "TeamMaster",
                principalColumn: "Id");
        }
    }
}
