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

    [HttpGet("{id}")]
    public async Task<IEnumerable<TodoViewModel>> Get(string id)
    {
      var currentUser = await accountManager.GetUser();
      var todoList = await todoListRepository.GetAsync(int.Parse(id));
      var result = new List<TodoViewModel>();

      if(todoList.Members.Select(x=>x.User).ToList().Exists(x=>x.Id == currentUser.Id))
      {
        var todos = todoList.Todos;
        foreach (var todo in todos)
        {
          result.Add((TodoViewModel)todo);
        }

        return result.ToArray();
      }

      return null;
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
      todo.Creator = user;
      todo.Created = DateTime.Now;
      todo.TodoList = todoList;

      if (!string.IsNullOrWhiteSpace(todoViewModel.assigneeId))
      {
        todo.Assignee = await accountManager.GetUser(todoViewModel.assigneeId);
      }

      if(await todoRepository.AddAsync(todo))
      {
        return new OkObjectResult("Todo added");
      }

      return BadRequest();
    }

  }
}
