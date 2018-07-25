using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamToDo.Models.Repositories
{
    public interface IRepository<T>
    {
        IQueryable<T> All { get; }

        void Add(T entity);
        void Delete(T entity);
        Task<T> Get(int id);
    }
}
