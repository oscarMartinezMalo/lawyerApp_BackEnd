using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.Repositories;
using LawyerApp.ViewModels;
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
        private readonly IClientRepository clientRepository;

        private readonly ILogger<ClientCasesController> logger;
        private readonly IMapper mapper;

        public ClientCasesController(
            ILogger<ClientCasesController> logger,
            IClientRepository clientRepository,
            IMapper mapper)
        {
            this.clientRepository = clientRepository;
            this.logger = logger;
            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int cliendid)
        {
            var client = clientRepository.GetClientById(cliendid);
            if (client != null) return Ok(mapper.Map<IEnumerable<Case>, IEnumerable<CaseDto>>(client.Cases));
            return NotFound();
        }

        [HttpGet("{caseid}")]
        public IActionResult Get(int cliendid, int caseid)
        {
            var client = clientRepository.GetClientById(cliendid);
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
