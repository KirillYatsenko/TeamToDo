using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.HelperTables;
using TeamTodo.Models.User;

namespace TeamToDo.Models
{
  public class TodoList
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public DateTime Created { get; set; }

    public ICollection<Todo> Todos { get; set; } = new List<Todo>();
    public ICollection<TodoListUser> Members { get; } = new List<TodoListUser>();
    public TeamTodoUser Admin { get; set; }
  }
}
