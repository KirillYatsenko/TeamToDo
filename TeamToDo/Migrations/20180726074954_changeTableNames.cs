using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamTodo.Migrations
{
    public partial class changeTableNames : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Groups_GroupId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Todos_Groups_GroupId",
                table: "Todos");

            migrationBuilder.DropTable(
                name: "Groups");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Todos",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "GroupId",
                table: "Todos",
                newName: "TodoListId");

            migrationBuilder.RenameIndex(
                name: "IX_Todos_GroupId",
                table: "Todos",
                newName: "IX_Todos_TodoListId");

            migrationBuilder.RenameColumn(
                name: "GroupId",
                table: "AspNetUsers",
                newName: "TodoListId");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_GroupId",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_TodoListId");

            migrationBuilder.CreateTable(
                name: "TodoLists",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    AdminId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoLists", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TodoLists_AspNetUsers_AdminId",
                        column: x => x.AdminId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TodoLists_AdminId",
                table: "TodoLists",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TodoLists_TodoListId",
                table: "AspNetUsers",
                column: "TodoListId",
                principalTable: "TodoLists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Todos_TodoLists_TodoListId",
                table: "Todos",
                column: "TodoListId",
                principalTable: "TodoLists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TodoLists_TodoListId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_Todos_TodoLists_TodoListId",
                table: "Todos");

            migrationBuilder.DropTable(
                name: "TodoLists");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Todos",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "TodoListId",
                table: "Todos",
                newName: "GroupId");

            migrationBuilder.RenameIndex(
                name: "IX_Todos_TodoListId",
                table: "Todos",
                newName: "IX_Todos_GroupId");

            migrationBuilder.RenameColumn(
                name: "TodoListId",
                table: "AspNetUsers",
                newName: "GroupId");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_TodoListId",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_GroupId");

            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AdminId = table.Column<string>(nullable: true),
                    Crated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Groups_AspNetUsers_AdminId",
                        column: x => x.AdminId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Groups_AdminId",
                table: "Groups",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Groups_GroupId",
                table: "AspNetUsers",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Todos_Groups_GroupId",
                table: "Todos",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
