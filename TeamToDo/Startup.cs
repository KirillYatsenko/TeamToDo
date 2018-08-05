using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TeamTodo.Infrastructure.Services;
using TeamTodo.Models.Repositories.Interfaces;
using TeamTodo.Models.Repositories.Solid;
using TeamTodo.Models.User;
using TeamToDo.Models;
using TeamToDo.Models.Contexts;
using TeamToDo.Models.Repositories;
using TeamToDo.Models.Repositories.Solid;

namespace TeamTodo
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors();

      services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();
      services.AddTransient<AccountManager>();

      services.AddDbContext<TeamTodoContext>(
        options => options.UseLazyLoadingProxies().UseSqlServer(
               Configuration["Data:TeamTodo:ConnectionString"]
            ));

      services.AddIdentity<TeamTodoUser, IdentityRole>(options =>
      {
        options.User.RequireUniqueEmail = true;
        options.Password.RequiredLength = 6;
        options.Password.RequireDigit = false;
        options.Password.RequireLowercase = false;
        options.Password.RequireUppercase = false;
        options.Password.RequireNonAlphanumeric = false;
      })
          .AddEntityFrameworkStores<TeamTodoContext>()
          .AddDefaultTokenProviders();

      services.AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = "JwtBearer";
        options.DefaultChallengeScheme = "JwtBearer";
      }).AddJwtBearer("JwtBearer", jwtBearerOptions =>
      {
        jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["SecurityKey"])),
          ValidateIssuer = true,
          ValidIssuer = "teamtodo.com",
          ValidateAudience = true,
          ValidAudience = "teamtodo.com",
          ValidateLifetime = true, //validate the expiration and not before values in the token
          ClockSkew = TimeSpan.FromMinutes(1) //5 minute tolerance for the expiration date
       };
      });

      setRepositoriesTransient(services);

      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.UseCors(builder =>
          builder.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader());

      app.UseAuthentication();
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseMvc();
    }

    private void setRepositoriesTransient(IServiceCollection services)
    {
      services.AddTransient<ITodoRepository, TodoRepository>();
      services.AddTransient<ITodoListRepository, TodoListRepository>();
      services.AddTransient<IUserTodoListRepository, UserTodoListRepository>();
      services.AddTransient<IAdminTodoListRepository, AdminTodoListRepository>();
      services.AddTransient<IInvitationRepository, InvitationRepository>();
    }
  }
}
