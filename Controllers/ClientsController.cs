using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.Persistent;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LawyerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ClientsController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly ILogger<CasesController> logger;
        private readonly IMapper mapper;

        public ClientsController(
            IUnitOfWork unitOfWork,
            ILogger<CasesController> logger,
            IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.logger = logger;
        }

        // GET: api/<ClientsController>
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Client>> Get(bool includesCases = true)
        {
            try
            {
                var results = unitOfWork.Clients.GetAllClients(includesCases);
                return Ok(mapper.Map<IEnumerable<Client>, IEnumerable<ClientDto>>(results));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Clients: {ex}");
                return BadRequest("Failed to get Clients");
            }
        }

        // GET api/<ClientsController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var client = unitOfWork.Clients.GetClientById(id);

                if (client != null) { return Ok(mapper.Map<Client, ClientDto>(client)); }
                else { return NotFound(); }
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Client: {ex}");
                return BadRequest("Failed to get Client");
            }
        }

        // POST api/<ClientsController>
        [HttpPost]
        public IActionResult Post([FromBody] ClientDto model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newClient = mapper.Map<ClientDto, Client>(model);

                    unitOfWork.AddEntity(newClient);
                    if (unitOfWork.Complete())
                    {
                        return Created($"/api/clients/{newClient.Id}", mapper.Map<Client, ClientDto>(newClient));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to save new Client: {ex}");
            }

            return BadRequest("Failed to save Client");

        }

        //// PUT api/<ClientsController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<ClientsController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
