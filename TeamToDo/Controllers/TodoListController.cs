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
    private IAdminTodoListRepository adminTodoListRepository;

    private AccountManager accountManager;

    public TodoListController(ITodoListRepository _todoListRepository,
      IUserTodoListRepository _userTodoListRepository,
      IAdminTodoListRepository _adminTodoListRepository,
      AccountManager _accountManager)
    {
      todoListRepository = _todoListRepository;
      userTodoListRepository = _userTodoListRepository;
      adminTodoListRepository = _adminTodoListRepository;
      accountManager = _accountManager;
    }

    [HttpGet]
    public async Task<IEnumerable<TodoListViewModel>> Get()
    {
      var user = await accountManager.GetUser();

      var todoLists = todoListRepository.All.ToList();
      var userTodoLists = todoLists.Where(x => x.Members.Select(u => u.User)
        .Any(z => z.Id == user.Id)).ToList();

      var result = new List<TodoListViewModel>();
      foreach (var item in userTodoLists)
      {
        var viewModel = (TodoListViewModel)item;
        result.Add(viewModel);
      }

      return result;
    }

    [HttpGet("{id}")]
    public async Task<TodoListViewModel> Get(int id)
    {
      var todoList = await todoListRepository.GetAsync(id);

      if (todoList != null)
      {
        return (TodoListViewModel)todoList;
      }

      return null;
    }


    [HttpPost]
    public async Task<ActionResult> Add([FromBody]string title)
    {
      if (!string.IsNullOrWhiteSpace(title))
      {
        var user = await accountManager.GetUser();

        var todo = new TodoList();
        todo.Title = title;
        todo.Created = DateTime.Now;
        todo.Creator = user;

        if (await todoListRepository.AddAsync(todo)
          && await userTodoListRepository.AddAsync(new TodoListUser() { User = user, TodoList = todo })
          && await adminTodoListRepository.AddAsync(new TodoListAdmin() { Admin = user, TodoList = todo })
         )
        {
          return new OkObjectResult((TodoListViewModel)todo);
        }

      }

      return BadRequest();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
      var user = await accountManager.GetUser();

      var todoList = await todoListRepository.GetAsync(id);
      if (todoList != null
        && todoList.Creator.Id == user.Id
        && await todoListRepository.DeleteAsync(todoList)
        )
      {
        return new OkObjectResult("Todolist deleted");
      }

      return BadRequest();
    }

    [HttpDelete("[action]/{id}")]
    public async Task<ActionResult> LeaveGroup(int id)
    {
      var user = await accountManager.GetUser();
      var userTodoList = user.TodoLists.FirstOrDefault(x => x.TodoListId == id);

      if (userTodoList != null)
      {
        if (await userTodoListRepository.DeleteAsync(userTodoList))
        {
          return new OkObjectResult("User deleted");
        }
      }

      return BadRequest();
    }


  }
}
