using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamToDo.Models;

namespace TeamTodo.Models.ViewModels
{
  public class TodoViewModel
  {
    public string Id { get; set; }
    public TodoUserViewModel User { get; set; }
    public bool Completed { get; set; }
    public string Text { get; set; }

    public static explicit operator TodoViewModel(Todo todo)
    {
      return new TodoViewModel
      {
        Id = todo.Id.ToString(),
        User = (TodoUserViewModel)todo.Creator,
        Completed = todo.Completed,
        Text = todo.Text
      };
    }

    public static explicit operator Todo(TodoViewModel todoViewModel)
    {
      return new Todo
      {
        Created = DateTime.Now,
        Completed = todoViewModel.Completed,
        Text = todoViewModel.Text
      };
    }

  }
}
