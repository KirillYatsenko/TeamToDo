using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TeamTodo.Infrastructure.Services;
using TeamTodo.Models;
using TeamTodo.Models.HelperTables;
using TeamTodo.Models.Repositories.Interfaces;
using TeamTodo.Models.User;
using TeamToDo.Models;

namespace TeamTodo.Controllers
{
  [Route("api/[controller]/[action]")]
  [ApiController]
  [Authorize]
  public class InvitationController : ControllerBase
  {
    private UserManager<TeamTodoUser> userManager;
    private ITodoListRepository todoListRepository;
    private IUserTodoListRepository userTodoListRepository;
    private AccountManager accountManager;
    private IInvitationRepository invitationRepository;

    public InvitationController(UserManager<TeamTodoUser> _userManager
      , ITodoListRepository _todoListRepository,
       AccountManager _accountManager,
      IUserTodoListRepository _userTodoListRepository,
      IInvitationRepository _invitationRepository)
    {
      userManager = _userManager;
      todoListRepository = _todoListRepository;
      accountManager = _accountManager;
      userTodoListRepository = _userTodoListRepository;
      invitationRepository = _invitationRepository;
    }

    [HttpPost]
    public async Task<ActionResult> GenerateInvitationHash([FromBody]int listid)
    {
      var todoList = await todoListRepository.GetAsync(listid);

      if (todoList == null)
      {
        return BadRequest("No todolist with given id");
      }

      var invitation = new Invitation() { Expiration = DateTime.Now.AddHours(24), Inviter = await accountManager.GetUser(), TodoList = todoList };
      if (await invitationRepository.AddAsync(invitation))
      {
        return new OkObjectResult(invitation.Id);
      }

      return BadRequest();
    }

    [HttpPost]
    public async Task<ActionResult> AcceptInvitation([FromBody]string id)
    {
      var invitation = await invitationRepository.GetAsync(id);

      if (invitation == null)
      {
        return BadRequest("No invitation with given id");
      }

      var todoList = await todoListRepository.GetAsync(invitation.TodoList.Id);
      var user = await accountManager.GetUser();

      if (todoList.Members.Any(x => x.UserId == user.Id))
      {
        return new OkObjectResult(todoList.Id);
      }

      if (invitation.Expiration < DateTime.Now)
      {
        return BadRequest("Invitation Expired");
      }

      if (await userTodoListRepository.AddAsync(new TodoListUser() { TodoList = todoList, User = user }))
      {
        return new OkObjectResult(todoList.Id);
      }

      return BadRequest();
    }


  }
}
