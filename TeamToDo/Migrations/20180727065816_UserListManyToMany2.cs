using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamTodo.Migrations
{
    public partial class UserListManyToMany2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TodoLists_TodoListId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TodoListId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TodoListId",
                table: "AspNetUsers");

            migrationBuilder.CreateTable(
                name: "TodoListUser",
                columns: table => new
                {
                    TodoListId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoListUser", x => new { x.TodoListId, x.UserId });
                    table.ForeignKey(
                        name: "FK_TodoListUser_TodoLists_TodoListId",
                        column: x => x.TodoListId,
                        principalTable: "TodoLists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TodoListUser_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TodoListUser_UserId",
                table: "TodoListUser",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TodoListUser");

            migrationBuilder.AddColumn<int>(
                name: "TodoListId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TodoListId",
                table: "AspNetUsers",
                column: "TodoListId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TodoLists_TodoListId",
                table: "AspNetUsers",
                column: "TodoListId",
                principalTable: "TodoLists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
