using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamToDo.Models;
using TeamToDo.Models.Repositories;

namespace TeamTodo.Models.Repositories.Interfaces
{
    public interface ITodoListRepository : IRepository<TodoList,int>
    {
    }
}
