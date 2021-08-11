using AutoMapper;
using LawyerApp.Data;
using LawyerApp.Data.Entities;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
        private readonly ILawyerAppRepository repository;
        private readonly ILogger<CasesController> logger;
        private readonly IMapper mapper;

        public ClientsController(
            ILawyerAppRepository repository,
            ILogger<CasesController> logger,
            IMapper mapper)
        {
            this.repository = repository;
            this.logger = logger;
            this.mapper = mapper;
        }

        // GET: api/<ClientsController>
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Client>> Get(bool includesCases = true)
        {
            try
            {
                var results = repository.GetAllClients(includesCases);
                return Ok(mapper.Map<IEnumerable<Client>, IEnumerable<ClientViewModel>>(results));
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
                var client = repository.GetClientById(id);

                if (client != null) { return Ok(mapper.Map<Client, ClientViewModel>(client)); }
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
        public IActionResult Post([FromBody] ClientViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newClient = mapper.Map<ClientViewModel, Client>(model);

                    repository.AddEntity(newClient);
                    if (repository.SaveAll())
                    {
                        return Created($"/api/clients/{newClient.Id}", mapper.Map<Client, ClientViewModel>(newClient));
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
