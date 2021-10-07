using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.Persistent;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LawyerApp.Controllers
{
    [Route("api/clients/{cliendid}/cases")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Authorize(Roles = "Admin,Lawyer")]
    public class ClientCasesController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public ClientCasesController(
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int cliendid)
        {
            var client = unitOfWork.Clients.GetClientById(cliendid);
            if (client != null) return Ok(mapper.Map<IEnumerable<Case>, IEnumerable<CaseDto>>(client.Cases));
            return NotFound();
        }

        [HttpGet("{caseid}")]
        public IActionResult Get(int cliendid, int caseid)
        {
            var client = unitOfWork.Clients.GetClientById(cliendid);
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
