using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.User;

namespace TeamTodo.Models.ViewModels
{
  public class TodoUserViewModel
  {
    public string Id{ get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }

    public static explicit operator TodoUserViewModel(TeamTodoUser teamTodoUser)
    {
      return new TodoUserViewModel
      {
        Id = teamTodoUser.Id,
        UserName = teamTodoUser.UserName,
        Email = teamTodoUser.Email
      };
    }

  }
}
