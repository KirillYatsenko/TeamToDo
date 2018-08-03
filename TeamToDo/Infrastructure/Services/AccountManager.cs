using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TeamTodo.Models.Repositories.Interfaces;
using TeamTodo.Models.User;

namespace TeamTodo.Infrastructure.Services
{
  public class AccountManager
  {
    private UserManager<TeamTodoUser> userManager;
    private ClaimsPrincipal caller;
    private ITodoListRepository todoListRepository;

    public AccountManager(
     UserManager<TeamTodoUser> _userManager,
     IHttpContextAccessor httpContextAccessor,
     ITodoListRepository _todoListRepository)
    {
      caller = httpContextAccessor.HttpContext.User;
      userManager = _userManager;
      todoListRepository = _todoListRepository;
    }

    public async Task<TeamTodoUser> GetUser()
    {
      var userEmail = caller.Claims.Single(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress").Value.ToString();
      return await userManager.FindByEmailAsync(userEmail);
    }

    public async Task<TeamTodoUser> GetUser(string id)
    {
      return await userManager.FindByIdAsync(id);
    }

    //private async Task<TeamTodoUser> LoadRelatedEntities(TeamTodoUser user)
    //{
    //  user.
    //  var todoLists = todoListRepository.All.Where(x=>x)
    //} 
  }
}
