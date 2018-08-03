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

      if (todoList.Members.Select(x => x.User).ToList().Exists(x => x.Id == currentUser.Id))
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

      if (!todoList.Members.Any(x => x.UserId == user.Id))
      {
        return BadRequest("user not a member");
      }

      var todo = (Todo)todoViewModel;
      todo.Creator = user;
      todo.Created = DateTime.Now;
      todo.TodoList = todoList;

      if (!string.IsNullOrWhiteSpace(todoViewModel.assigneeId))
      {
        todo.Assignee = await accountManager.GetUser(todoViewModel.assigneeId);
      }

      if (await todoRepository.AddAsync(todo))
      {
        return new OkObjectResult((TodoViewModel)todo);
      }

      return BadRequest();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteTodo(int id)
    {
      var user = await accountManager.GetUser();
      var todo = await todoRepository.GetAsync(id);
      var todoList = todo.TodoList;

      if(todo.Creator.Id != user.Id && todoList.Members.ToList().Exists(x=>x.UserId == user.Id))
      {
        return BadRequest("user not a creator , not an admin");
      }

      if(await todoRepository.DeleteAsync(todo))
      {
        return new OkObjectResult("todo deleted");
      }

      return BadRequest();
    }

    [HttpPost("[action]")]
    public async Task<ActionResult> CompleteTodo([FromBody]int id)
    { 
      var user = await accountManager.GetUser();
      var todo = await todoRepository.GetAsync(id);

      if(todo.Assignee != null && (todo.Assignee.Id != user.Id))
      {
        return BadRequest("user not assigneed to this todo");
      }

      todo.CompletedBy = user;
      if(await todoRepository.UpdateAsync(todo))
      {
        return new OkObjectResult("todo completed");
      }

      return BadRequest();
    }

  }
}
