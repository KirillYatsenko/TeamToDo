using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.Repositories.Interfaces;
using TeamToDo.Models.Contexts;

namespace TeamTodo.Models.Repositories.Solid
{
  public class InvitationRepository : IInvitationRepository
  {
    private TeamTodoContext db;

    public InvitationRepository(TeamTodoContext _db)
    {
      db = _db;
    }

    public IQueryable<Invitation> All => db.Invitations;

    public async Task<bool> AddAsync(Invitation entity)
    {
      db.Invitations.Add(entity);
      return await RepositoryHelper.ValidateCorectnessAsync(db);
    }

    public Task<bool> DeleteAsync(Invitation entity)
    {
      throw new NotImplementedException();
    }

    public async Task<Invitation> GetAsync(string id)
    {
      return await db.Invitations
        .Include(x => x.Inviter).Include(x => x.TodoList)
        .FirstOrDefaultAsync(x => x.Id == Guid.Parse(id));
    }

    public Task<bool> UpdateAsync(Invitation entity)
    {
      throw new NotImplementedException();
    }

  }
}
