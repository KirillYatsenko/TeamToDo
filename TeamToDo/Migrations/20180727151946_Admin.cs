using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamTodo.Migrations
{
    public partial class Admin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoLists_AspNetUsers_AdminId",
                table: "TodoLists");

            migrationBuilder.RenameColumn(
                name: "AdminId",
                table: "TodoLists",
                newName: "CreatorId");

            migrationBuilder.RenameIndex(
                name: "IX_TodoLists_AdminId",
                table: "TodoLists",
                newName: "IX_TodoLists_CreatorId");

            migrationBuilder.CreateTable(
                name: "TodoListAdmin",
                columns: table => new
                {
                    TodoListId = table.Column<int>(nullable: false),
                    AdminId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoListAdmin", x => new { x.TodoListId, x.AdminId });
                    table.ForeignKey(
                        name: "FK_TodoListAdmin_AspNetUsers_AdminId",
                        column: x => x.AdminId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TodoListAdmin_TodoLists_TodoListId",
                        column: x => x.TodoListId,
                        principalTable: "TodoLists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TodoListAdmin_AdminId",
                table: "TodoListAdmin",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_TodoLists_AspNetUsers_CreatorId",
                table: "TodoLists",
                column: "CreatorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoLists_AspNetUsers_CreatorId",
                table: "TodoLists");

            migrationBuilder.DropTable(
                name: "TodoListAdmin");

            migrationBuilder.RenameColumn(
                name: "CreatorId",
                table: "TodoLists",
                newName: "AdminId");

            migrationBuilder.RenameIndex(
                name: "IX_TodoLists_CreatorId",
                table: "TodoLists",
                newName: "IX_TodoLists_AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_TodoLists_AspNetUsers_AdminId",
                table: "TodoLists",
                column: "AdminId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
