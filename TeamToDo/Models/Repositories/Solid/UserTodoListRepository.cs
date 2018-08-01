using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.HelperTables;
using TeamTodo.Models.Repositories.Interfaces;
using TeamToDo.Models.Contexts;

namespace TeamTodo.Models.Repositories.Solid
{
  public class UserTodoListRepository : IUserTodoListRepository
  {
    private TeamTodoContext db;

    public UserTodoListRepository(TeamTodoContext _db)
    {
      db = _db;
    }

    public IQueryable<TodoListUser> All => throw new NotImplementedException();

    public async Task<bool> AddAsync(TodoListUser entity)
    {
      db.Add(entity);
      return await RepositoryHelper.ValidateCorectnessAsync(db);
    }

    public Task<bool> DeleteAsync(TodoListUser entity)
    {
      throw new NotImplementedException();
    }

    public Task<TodoListUser> GetAsync(int id)
    {
      throw new NotImplementedException();
    }

    public Task<bool> UpdateAsync(TodoListUser entity)
    {
      throw new NotImplementedException();
    }
  }
}
