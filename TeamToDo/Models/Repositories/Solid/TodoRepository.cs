using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamToDo.Models.Contexts;

namespace TeamToDo.Models.Repositories.Solid
{
  public class TodoRepository : ITodoRepository
  {
    private TeamTodoContext db;

    public TodoRepository(TeamTodoContext _db)
    {
      db = _db;
    }

    public IQueryable<Todo> All
    {
      get
      {
        return db.Todos;
      }
    }

    public async Task<bool> AddAsync(Todo entity)
    {
      db.Todos.Add(entity);
      int rowsChanged = await db.SaveChangesAsync();

      if (rowsChanged > 0)
      {
        return true;
      }

      return false;
    }

    public async Task<bool> DeleteAsync(Todo entity)
    {
      db.Todos.Remove(entity);
      int rowsChanged = await db.SaveChangesAsync();

      if (rowsChanged > 0)
      {
        return true;
      }

      return false;
    }

    public async Task<Todo> GetAsync(int id)
    {
      var issue = await db.Todos.FindAsync(id);
      return issue;
    }
  }
}
