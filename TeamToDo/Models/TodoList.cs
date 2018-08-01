using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models;
using TeamTodo.Models.HelperTables;
using TeamTodo.Models.User;

namespace TeamToDo.Models
{
  public class TodoList
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public DateTime Created { get; set; }

    public virtual TeamTodoUser Creator { get; set; }

    public virtual ICollection<Invitation> Invitations { get; set; } = new List<Invitation>();
    public virtual ICollection<Todo> Todos { get; set; } = new List<Todo>();
    public virtual ICollection<TodoListUser> Members { get; } = new List<TodoListUser>();
    public virtual ICollection<TodoListAdmin> Admins { get; } = new List<TodoListAdmin>();
  }
}
