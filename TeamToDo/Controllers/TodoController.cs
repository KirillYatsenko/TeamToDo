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
using TeamTodo.Models.Repositories.Interfaces;
using TeamTodo.Models.User;
using TeamTodo.Models.ViewModels;
using TeamToDo.Models;
using TeamToDo.Models.Repositories;

namespace TeamToDo.Controllers.Api
{
  [Authorize]
  [Route("api/[controller]")]
  public class TodoController : Controller
  {
    private ITodoRepository todoRepository;
    private AccountManager accountManager;
    private ITodoListRepository todoListRepository;

    public TodoController(
      ITodoRepository _todoRepository,
      AccountManager _accountManager,
      ITodoListRepository _todoListRepository)
    {
      todoRepository = _todoRepository;
      accountManager = _accountManager;
      todoListRepository = _todoListRepository;
    }

    [HttpGet]
    public async Task<IEnumerable<TodoViewModel>> Get()
    {
      var currentUser = await accountManager.GetUser();
      var userId = currentUser.Id;

      var todos = todoRepository.All.Cast<TodoViewModel>().ToArray();

      return todos;
    }

    [HttpPost("[action]")]
    public async Task<ActionResult> AddTodo([FromBody] TodoViewModel todoViewModel)
    {
      var user = await accountManager.GetUser();
      var todoList = await todoListRepository.GetAsync(todoViewModel.ListId);

      if(!todoList.Members.Any(x=>x.UserId == user.Id))
      {
        return BadRequest();
      }

      var todo = (Todo)todoViewModel;
      todo.Creator = await accountManager.GetUser();
      todo.Created = DateTime.Now;
      todo.TodoList = todoList;

      if(await todoRepository.AddAsync(todo))
      {
        return new OkObjectResult("Todo added");
      }

      return BadRequest();
    }

  }
}
