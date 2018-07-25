using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamToDo.Models;
using TeamToDo.Models.Repositories;

namespace TeamToDo.Controllers.Api
{
    [Route("api/[controller]")]
    public class IssueController : Controller
    {
        private IIssueRepository issueRepository;

        public IssueController(IIssueRepository _taskRepository) => issueRepository = _taskRepository;

        [HttpGet]
        public IEnumerable<Issue> Get() => issueRepository.All;

        [HttpGet("{id}")]
        public async Task<Issue> Get(int id) => await issueRepository.Get(id);

        [HttpPost]
        public void Post([FromBody] Issue issue)
        {
            issueRepository.Add(issue);
        }

    }
}
