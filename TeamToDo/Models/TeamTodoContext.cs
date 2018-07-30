using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.HelperTables;
using TeamTodo.Models.User;
using TeamToDo.Models;

namespace TeamToDo.Models.Contexts
{
  public class TeamTodoContext : IdentityDbContext<TeamTodoUser>
  {
    public TeamTodoContext(DbContextOptions<TeamTodoContext> options)
        : base(options) {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      modelBuilder.Entity<TodoListUser>()
        .HasKey(x => new { x.TodoListId, x.UserId });

      modelBuilder.Entity<TodoListUser>()
        .HasOne(t => t.TodoList)
        .WithMany(t => t.Members)
        .HasForeignKey(t => t.TodoListId);

      modelBuilder.Entity<TodoListUser>()
        .HasOne(u => u.User)
        .WithMany(u => u.TodoLists)
        .HasForeignKey(u => u.UserId);

      modelBuilder.Entity<TodoListAdmin>()
       .HasKey(x => new { x.TodoListId, x.AdminId });

      modelBuilder.Entity<TodoListAdmin>()
      .HasOne(t => t.TodoList)
      .WithMany(t => t.Admins)
      .HasForeignKey(t => t.TodoListId);

      modelBuilder.Entity<TodoListAdmin>()
        .HasOne(u => u.Admin)
        .WithMany(u => u.TodoListsAdmin)
        .HasForeignKey(u => u.AdminId);
    }

    public DbSet<Todo> Todos { get; set; }
    public DbSet<TodoList> TodoLists { get; set; }
  }
}
