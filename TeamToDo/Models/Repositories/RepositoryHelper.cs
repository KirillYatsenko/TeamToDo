using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TeamTodo.Models.Repositories
{
  public static class RepositoryHelper
  {
    public static async Task<bool> ValidateCorectnessAsync(DbContext db)
    {
      int rowsChanged = await db.SaveChangesAsync();

      if (rowsChanged > 0)
      {
        return true;
      }

      return false;
    }

      
  }
}
