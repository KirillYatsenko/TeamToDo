using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamTodo.Migrations
{
    public partial class completedBy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Completed",
                table: "Todos");

            migrationBuilder.AddColumn<string>(
                name: "CompletedById",
                table: "Todos",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Todos_CompletedById",
                table: "Todos",
                column: "CompletedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Todos_AspNetUsers_CompletedById",
                table: "Todos",
                column: "CompletedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Todos_AspNetUsers_CompletedById",
                table: "Todos");

            migrationBuilder.DropIndex(
                name: "IX_Todos_CompletedById",
                table: "Todos");

            migrationBuilder.DropColumn(
                name: "CompletedById",
                table: "Todos");

            migrationBuilder.AddColumn<bool>(
                name: "Completed",
                table: "Todos",
                nullable: false,
                defaultValue: false);
        }
    }
}
