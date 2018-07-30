using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.User;
using TeamToDo.Models;

namespace TeamTodo.Models.HelperTables
{
  public class TodoListAdmin
  {
    public int TodoListId { get; set; }
    public TodoList TodoList { get; set; }

    public string AdminId { get; set; }
    public TeamTodoUser Admin { get; set; }
  }
}
