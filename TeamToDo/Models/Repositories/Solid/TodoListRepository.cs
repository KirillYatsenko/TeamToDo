using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.Repositories.Interfaces;
using TeamToDo.Models;
using TeamToDo.Models.Contexts;
using TeamTodo.Models.HelperTables;

namespace TeamTodo.Models.Repositories.Solid
{
  public class TodoListRepository : ITodoListRepository
  {
    private TeamTodoContext db;

    public TodoListRepository(TeamTodoContext _db)
    {
      db = _db;
    }

    public IQueryable<TodoList> All
    {
      get
      {
        return db.TodoLists
            .Include(x => x.Members)
            .ThenInclude(x => x.User)
            .Include(x => x.Admins)
            .ThenInclude(x => x.Admin);
      }

    }

    public async Task<bool> AddAsync(TodoList entity)
    {
      db.TodoLists.Add(entity);
      int rowsChanged = await db.SaveChangesAsync();

      if(rowsChanged > 0)
      {
        return true;
      }

      return false;
    }

    public async Task<bool> DeleteAsync(TodoList entity)
    {
      db.TodoLists.Remove(entity);
      int rowsChanged = await db.SaveChangesAsync();

      if (rowsChanged > 0)
      {
        return true;
      }

      return false;
    }

    public async Task<TodoList> GetAsync(int id)
    {
      return await All.FirstAsync(x => x.Id == id);
    }
  }
}
