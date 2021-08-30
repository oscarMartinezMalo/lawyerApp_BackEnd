using AutoMapper;
using LawyerApp.Data;
using LawyerApp.Data.Entities;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LawyerApp.Controllers
{
    [Route("api/clients/{cliendid}/cases")]
    [ApiController]
    public class ClientCasesController : ControllerBase
    {

        private readonly ILawyerAppRepository repository;
        private readonly ILogger<ClientCasesController> logger;
        private readonly IMapper mapper;

        public ClientCasesController(
            ILawyerAppRepository repository,
            ILogger<ClientCasesController> logger,
            IMapper mapper)
        {
            this.repository = repository;
            this.logger = logger;
            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int cliendid)
        {
            var client = repository.GetClientById(cliendid);
            if (client != null) return Ok(mapper.Map<IEnumerable<Case>, IEnumerable<CaseDto>>(client.Cases));
            return NotFound();
        }

        [HttpGet("{caseid}")]
        public IActionResult Get(int cliendid, int caseid)
        {
            var client = repository.GetClientById(cliendid);
            if (client != null)
            {
                var caseSelected = client.Cases.Where(ca => ca.Id == caseid).FirstOrDefault();
                if (caseSelected != null)
                {
                    return Ok(mapper.Map<Case, CaseDto>(caseSelected));
                }
            }
            return NotFound();
        }

        //// GET api/<ClientCasesController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<ClientCasesController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<ClientCasesController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<ClientCasesController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
