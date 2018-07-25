using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.User;
using TeamToDo.Models;

namespace TeamToDo.Models.Contexts
{
    public class TeamTodoContext : IdentityDbContext<TeamTodoUser>
    {
        public TeamTodoContext(DbContextOptions<TeamTodoContext> options)
            : base(options) { }

        public DbSet<Issue> Issues { get; set; }
    }
}
