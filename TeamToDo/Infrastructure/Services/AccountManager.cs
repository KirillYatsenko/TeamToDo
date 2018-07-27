using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TeamTodo.Models.User;

namespace TeamTodo.Infrastructure.Services
{
  public class AccountManager
  {
    private UserManager<TeamTodoUser> userManager;
    private ClaimsPrincipal caller;

    public AccountManager(
     UserManager<TeamTodoUser> _userManager,
     IHttpContextAccessor httpContextAccessor)
    {
      caller = httpContextAccessor.HttpContext.User;
      userManager = _userManager;
    }

    public async Task<TeamTodoUser> GetUser()
    {
      var userEmail = caller.Claims.Single(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress").Value.ToString();
      return await userManager.FindByEmailAsync(userEmail);
    }
  }
}