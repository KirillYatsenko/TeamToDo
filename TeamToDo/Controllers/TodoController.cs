using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TeamTodo.Infrastructure.Services;
using TeamTodo.Models.User;
using TeamTodo.Models.ViewModels;
using TeamToDo.Models;
using TeamToDo.Models.Repositories;

namespace TeamToDo.Controllers.Api
{
  //[Authorize]
  [Route("api/[controller]")]
  public class TodoController : Controller
  {
    private ITodoRepository todoRepository;
    private AccountManager accountManager;

    public TodoController(ITodoRepository _todoRepository,
      AccountManager _accountManager)
    {
      todoRepository = _todoRepository;
      accountManager = _accountManager;
    }

    [HttpGet]
    public async Task<IEnumerable<TodoViewModel>> Get()
    {
      var currentUser = await accountManager.GetUser();
      var userId = currentUser.Id;

      var todos = todoRepository.All.Cast<TodoViewModel>().ToArray();

      return todos;
    }

    //[HttpGet("{id}")]
    //public async Task<TodoViewModel> Get(int id)
    //{
    //  var todo = await todoRepository.Get(id);
    //  return (TodoViewModel)todo;
    //}

    [HttpPost]
    public async void Post([FromBody] TodoViewModel todoViewModel)
    {
      var todo = (Todo)todoViewModel;
      todo.Creator = await accountManager.GetUser();
      todoRepository.AddAsync(todo);
    }

  }
}
