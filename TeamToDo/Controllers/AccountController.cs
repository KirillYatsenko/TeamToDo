using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using TeamTodo.Models.User;
using TeamTodo.Models.ViewModels;

namespace TeamToDo.Controllers.api
{
  [Route("api/[controller]/[action]")]
  public class AccountController : Controller
  {
    private UserManager<TeamTodoUser> userManager;
    private SignInManager<TeamTodoUser> signInManager;
    private IConfiguration configuration;

    public AccountController(UserManager<TeamTodoUser> _userManager, SignInManager<TeamTodoUser> _signInManager, IConfiguration _configuration)
    {
      userManager = _userManager;
      signInManager = _signInManager;
      configuration = _configuration;
    }

    public async Task<ActionResult> Login([FromBody]LoginViewModel loginViewModel)
    {
      if (await IsValidLoginData(loginViewModel))
      {
        return Ok(new { token = GenerateToken(loginViewModel.Email) });
      }

      return BadRequest("Invalid username of password");
    }


    [HttpPost]
    public async Task<ActionResult> Registration([FromBody]RegistrationViewModel registrationViewModel)
    {
      var user = new TeamTodoUser();
      user.UserName = registrationViewModel.UserName;
      user.Email = registrationViewModel.Email;

      var result = await userManager.CreateAsync(user, registrationViewModel.Password);

      if (result.Succeeded)
      {
        return new OkObjectResult("Account created");
      }
      else
      {
        return BadRequest(result.Errors.ToList()[0].Description);
      }
    }

    private async Task<bool> IsValidLoginData([FromBody]LoginViewModel loginData)
    {
      if (ModelState.IsValid)
      {
        var user = await userManager.FindByEmailAsync(loginData.Email);
        if (user != null)
        {
          await signInManager.SignOutAsync();
          if ((await signInManager.PasswordSignInAsync(user, loginData.Password, false, false)).Succeeded)
          {
            return true;
          }
        }
      }

      return false;
    }

    private string GenerateToken(string email)
    {
      var claims = new[]
      {
              new Claim(ClaimTypes.Email, email)
      };

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["SecurityKey"]));
      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

      var token = new JwtSecurityToken(
          issuer: "teamtodo.com",
          audience: "teamtodo.com",
          claims: claims,
          expires: DateTime.Now.AddMinutes(30),
          signingCredentials: creds);

      return new JwtSecurityTokenHandler().WriteToken(token);
    }
  }
}
