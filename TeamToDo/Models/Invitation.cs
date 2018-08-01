using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TeamTodo.Models.User;
using TeamToDo.Models;

namespace TeamTodo.Models
{
  public class Invitation
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    public TodoList TodoList { get; set; }
    public DateTime Expiration { get; set; }

    public TeamTodoUser Inviter { get; set; }
  }
}
