using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.HelperTables;
using TeamTodo.Models.Repositories.Interfaces;
using TeamToDo.Models.Contexts;

namespace TeamTodo.Models.Repositories.Solid
{
  public class AdminTodoListRepository : IAdminTodoListRepository
  {
    private TeamTodoContext db;

    public AdminTodoListRepository(TeamTodoContext _db) => db = _db;

    public IQueryable<TodoListAdmin> All => throw new NotImplementedException();

    public async Task<bool> AddAsync(TodoListAdmin entity)
    {
      db.Add(entity);
      int result = await db.SaveChangesAsync();

      if (result > 0)
      {
        return true;
      }

      return false;
    }

    public Task<bool> DeleteAsync(TodoListAdmin entity)
    {
      throw new NotImplementedException();
    }

    public Task<TodoListAdmin> GetAsync(int id)
    {
      throw new NotImplementedException();
    }
  }
}
