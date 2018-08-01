using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.HelperTables;
using TeamToDo.Models.Repositories;

namespace TeamTodo.Models.Repositories.Interfaces
{
    public interface IAdminTodoListRepository : IRepository<TodoListAdmin,int>
    {
    }
}
