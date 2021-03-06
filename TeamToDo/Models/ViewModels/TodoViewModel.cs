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
    public string assigneeId { get; set; }
    public int ListId { get; set; }
    public string Text { get; set; }
    public string Created { get; set; }
    public bool Important { get; set; }

    public TodoUserViewModel CompletedBy { get; set; }
    public TodoUserViewModel Creator { get; set; }
    public TodoUserViewModel Assignee { get; set; }

    public static explicit operator TodoViewModel(Todo todo)
    {
      var result = new TodoViewModel
      {
        Id = todo.Id.ToString(),
        Creator = (TodoUserViewModel)todo.Creator,
        Important = todo.Important,
        Text = todo.Text,
        ListId = todo.TodoList.Id,
        Created = todo.Created.ToString()
      };

      if(todo.Assignee != null)
      {
        result.Assignee = (TodoUserViewModel)todo.Assignee;
      }

      if(todo.CompletedBy != null)
      {
        result.CompletedBy = (TodoUserViewModel)todo.CompletedBy;
       }

      return result;
    }

    public static explicit operator Todo(TodoViewModel todoViewModel)
    {
      return new Todo
      {
        Created = DateTime.Now,
        Text = todoViewModel.Text,
        Important = todoViewModel.Important
      };
    }

  }
}
