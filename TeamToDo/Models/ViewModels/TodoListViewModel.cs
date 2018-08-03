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
    public TodoUserViewModel Creator { get; set; }

    public List<TodoUserViewModel> Admins { get; set; } = new List<TodoUserViewModel>();
    public List<TodoUserViewModel> Members { get; set; } = new List<TodoUserViewModel>();

    public static explicit operator TodoListViewModel(TodoList todoList)
    {
      var viewModel = new TodoListViewModel
      {
        Id = todoList.Id.ToString(),
        Title = todoList.Title,
        Created = todoList.Created.ToString(),
        Creator = (TodoUserViewModel)todoList.Creator
      };

      foreach (var user in todoList.Members.Select(x=>x.User))
      {
        var casterUser = (TodoUserViewModel)user;
        viewModel.Members.Add(casterUser);
      }

      foreach (var admin in todoList.Admins.Select(x=>x.Admin))
      {
        var castedAdmin = (TodoUserViewModel)admin;
        viewModel.Admins.Add(castedAdmin);
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
