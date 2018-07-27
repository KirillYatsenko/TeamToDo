using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamToDo.Models;

namespace TeamTodo.Models.ViewModels
{
  public class TodoListViewModel
  {
    public string Id { get; set; }
    public string Title { get; set; }
    public string Created { get; set; }

    public TodoUserViewModel Admin { get; set; }
    public IEnumerable<TodoViewModel> Todos { get; set; } = new List<TodoViewModel>();
    public List<TodoUserViewModel> Members { get; set; } = new List<TodoUserViewModel>();

    public static explicit operator TodoListViewModel(TodoList todoList)
    {
      var viewModel = new TodoListViewModel
      {
        Id = todoList.Id.ToString(),
        Title = todoList.Title,
        Created = todoList.Created.ToString(),
        Admin = (TodoUserViewModel)todoList.Admin,
        Todos = todoList.Todos.Cast<TodoViewModel>(),
      };

      foreach (var user in todoList.Members.Select(x=>x.User))
      {
        var casterUser = (TodoUserViewModel)user;
        viewModel.Members.Add(casterUser);
      }

      return viewModel;
    }

    public static explicit operator TodoList(TodoListViewModel todoList)
    {
      return new TodoList
      {
        Title = todoList.Title,
      };
    }

  }
}
