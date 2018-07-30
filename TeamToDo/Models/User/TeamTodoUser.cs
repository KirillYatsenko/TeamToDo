using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.HelperTables;
using TeamToDo.Models;

namespace TeamTodo.Models.User
{
  public class TeamTodoUser : IdentityUser
  {
    public ICollection<TodoListUser> TodoLists { get; } = new List<TodoListUser>();
    public ICollection<TodoListAdmin> TodoListsAdmin { get; } = new List<TodoListAdmin>();
  }
}
