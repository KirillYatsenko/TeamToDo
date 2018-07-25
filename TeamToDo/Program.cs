using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace TeamTodo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
             .UseKestrel()
             .UseContentRoot(Directory.GetCurrentDirectory())
             .UseIISIntegration()
             .UseStartup<Startup>()
              .ConfigureAppConfiguration((hostingContext, confing) =>
              {
                  confing.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
              })
             .UseUrls("http://localhost:5000/")
             .Build();

            host.Run();
        }
    }
}
