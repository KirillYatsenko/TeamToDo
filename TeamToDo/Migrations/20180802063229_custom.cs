using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamTodo.Migrations
{
    public partial class custom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AssigneeId",
                table: "Todos",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Important",
                table: "Todos",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Todos_AssigneeId",
                table: "Todos",
                column: "AssigneeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Todos_AspNetUsers_AssigneeId",
                table: "Todos",
                column: "AssigneeId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Todos_AspNetUsers_AssigneeId",
                table: "Todos");

            migrationBuilder.DropIndex(
                name: "IX_Todos_AssigneeId",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "AssigneeId",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "Important",
                table: "Todos");
        }
    }
}
