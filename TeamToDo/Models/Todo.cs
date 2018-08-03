using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.User;

namespace TeamToDo.Models
{
  public class Todo
  {
    public int Id { get; set; }
    public string Text { get; set; }
    public DateTime Created { get; set; }
    public bool Important { get; set; }

    public virtual TeamTodoUser CompletedBy { get; set; }

    public virtual TeamTodoUser Assignee { get; set; }
    public virtual TeamTodoUser Creator { get; set; }
    public virtual TodoList TodoList { get; set; }
  }
}
