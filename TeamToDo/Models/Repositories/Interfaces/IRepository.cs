using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamToDo.Models.Repositories
{
    public interface IRepository<T,K>
    {
        IQueryable<T> All { get; }

        Task<bool> AddAsync(T entity);
        Task<bool> DeleteAsync(T entity);
        Task<bool> UpdateAsync(T entity);
        Task<T> GetAsync(K id);
    }
}
