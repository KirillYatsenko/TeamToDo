using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamToDo.Models.Contexts;

namespace TeamToDo.Models.Repositories.Solid
{
    public class IssueRepository : IIssueRepository
    {
        private TeamTodoContext db;

        public IssueRepository(TeamTodoContext _db)
        {
            db = _db;
        }

        public IQueryable<Issue> All
        {
            get
            {
                return db.Issues;
            }
        }

        public async void Add(Issue entity)
        {
            db.Issues.Add(entity);
            await db.SaveChangesAsync();
        }

        public async void Delete(Issue entity)
        {
            db.Issues.Remove(entity);
            await db.SaveChangesAsync();
        }

        public async Task<Issue> Get(int id)
        {
            var issue = await db.Issues.FindAsync(id);
            return issue;
        }
    }
}
