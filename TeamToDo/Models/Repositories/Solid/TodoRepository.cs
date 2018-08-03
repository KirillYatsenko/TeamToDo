using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.Repositories;
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
      return await RepositoryHelper.ValidateCorectnessAsync(db);
    }

    public async Task<bool> DeleteAsync(Todo entity)
    {
      db.Todos.Remove(entity);
      return await RepositoryHelper.ValidateCorectnessAsync(db);
    }

    public async Task<Todo> GetAsync(int id)
    {
      var issue = await db.Todos.FindAsync(id);
      return issue;
    }

    public async Task<bool> UpdateAsync(Todo entity)
    {
      db.Todos.Update(entity);
      return await RepositoryHelper.ValidateCorectnessAsync(db);
    }
  }
}
