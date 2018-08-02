﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TeamToDo.Models.Contexts;

namespace TeamTodo.Migrations
{
    [DbContext(typeof(TeamTodoContext))]
    partial class TeamTodoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("TeamTodo.Models.HelperTables.TodoListAdmin", b =>
                {
                    b.Property<int>("TodoListId");

                    b.Property<string>("AdminId");

                    b.HasKey("TodoListId", "AdminId");

                    b.HasIndex("AdminId");

                    b.ToTable("TodoListAdmin");
                });

            modelBuilder.Entity("TeamTodo.Models.HelperTables.TodoListUser", b =>
                {
                    b.Property<int>("TodoListId");

                    b.Property<string>("UserId");

                    b.HasKey("TodoListId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("TodoListUser");
                });

            modelBuilder.Entity("TeamTodo.Models.Invitation", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Expiration");

                    b.Property<string>("InviterId");

                    b.Property<int?>("TodoListId");

                    b.HasKey("Id");

                    b.HasIndex("InviterId");

                    b.HasIndex("TodoListId");

                    b.ToTable("Invitations");
                });

            modelBuilder.Entity("TeamToDo.Models.Todo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AssigneeId");

                    b.Property<bool>("Completed");

                    b.Property<DateTime>("Created");

                    b.Property<string>("CreatorId");

                    b.Property<bool>("Important");

                    b.Property<string>("Text");

                    b.Property<int?>("TodoListId");

                    b.HasKey("Id");

                    b.HasIndex("AssigneeId");

                    b.HasIndex("CreatorId");

                    b.HasIndex("TodoListId");

                    b.ToTable("Todos");
                });

            modelBuilder.Entity("TeamToDo.Models.TodoList", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Created");

                    b.Property<string>("CreatorId");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("CreatorId");

                    b.ToTable("TodoLists");
                });

            modelBuilder.Entity("TeamTodo.Models.User.TeamTodoUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("TeamTodo.Models.User.TeamTodoUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("TeamTodo.Models.User.TeamTodoUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TeamTodo.Models.User.TeamTodoUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("TeamTodo.Models.User.TeamTodoUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TeamTodo.Models.HelperTables.TodoListAdmin", b =>
                {
                    b.HasOne("TeamTodo.Models.User.TeamTodoUser", "Admin")
                        .WithMany("TodoListsAdmin")
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TeamToDo.Models.TodoList", "TodoList")
                        .WithMany("Admins")
                        .HasForeignKey("TodoListId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TeamTodo.Models.HelperTables.TodoListUser", b =>
                {
                    b.HasOne("TeamToDo.Models.TodoList", "TodoList")
                        .WithMany("Members")
                        .HasForeignKey("TodoListId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TeamTodo.Models.User.TeamTodoUser", "User")
                        .WithMany("TodoLists")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TeamTodo.Models.Invitation", b =>
                {
                    b.HasOne("TeamTodo.Models.User.TeamTodoUser", "Inviter")
                        .WithMany()
                        .HasForeignKey("InviterId");

                    b.HasOne("TeamToDo.Models.TodoList", "TodoList")
                        .WithMany("Invitations")
                        .HasForeignKey("TodoListId");
                });

            modelBuilder.Entity("TeamToDo.Models.Todo", b =>
                {
                    b.HasOne("TeamTodo.Models.User.TeamTodoUser", "Assignee")
                        .WithMany()
                        .HasForeignKey("AssigneeId");

                    b.HasOne("TeamTodo.Models.User.TeamTodoUser", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorId");

                    b.HasOne("TeamToDo.Models.TodoList", "TodoList")
                        .WithMany("Todos")
                        .HasForeignKey("TodoListId");
                });

            modelBuilder.Entity("TeamToDo.Models.TodoList", b =>
                {
                    b.HasOne("TeamTodo.Models.User.TeamTodoUser", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorId");
                });
#pragma warning restore 612, 618
        }
    }
}
