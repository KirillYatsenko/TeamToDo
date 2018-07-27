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
using TeamTodo.Models.HelperTables;
using TeamTodo.Models.Repositories.Interfaces;
using TeamTodo.Models.User;
using TeamTodo.Models.ViewModels;
using TeamToDo.Models;
using TeamToDo.Models.Repositories;


namespace TeamTodo.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  public class TodoListController : Controller
  {
    private ITodoListRepository todoListRepository;
    private IUserTodoListRepository userTodoListRepository;

    private AccountManager accountManager;

    public TodoListController(ITodoListRepository _todoListRepository,
      IUserTodoListRepository _userTodoListRepository,
      AccountManager _accountManager)
    {
      todoListRepository = _todoListRepository;
      userTodoListRepository = _userTodoListRepository;
      accountManager = _accountManager;
    }

    [HttpGet]
    public async Task<IEnumerable<TodoListViewModel>> Get()
    {
      var user = await accountManager.GetUser();

      var todoLists = todoListRepository.All;
      var userTodoLists = todoLists.Where(x => x.Members.Select(u => u.User)
        .Any(z => z.Id == user.Id)).ToList();

      var result = new List<TodoListViewModel>();
      foreach (var item in userTodoLists)
      {
        result.Add((TodoListViewModel)item);
      }

      return result;
    }

    [HttpPost]
    public async Task<ActionResult> Add([FromBody]string title)
    {
      if (!string.IsNullOrWhiteSpace(title))
      {
        var user = await accountManager.GetUser();

        var todo = new TodoList();
        todo.Title = title;
        todo.Admin = user;
        todo.Created = DateTime.Now;

        if (await todoListRepository.AddAsync(todo)
          && await userTodoListRepository.AddAsync(new TodoListUser() { User = user, TodoList = todo }))
        {
          return new OkObjectResult("Todolist added");
        }
       
      }

      return BadRequest();
    }

  }
}
