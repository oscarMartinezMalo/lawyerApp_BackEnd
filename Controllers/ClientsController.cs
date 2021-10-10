using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.Persistent;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LawyerApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Produces("application/json")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Authorize(Roles = "Admin,Lawyer")]
    public class ClientsController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly ILogger<CasesController> logger;
        private readonly IMapper mapper;
        private readonly UserManager<LawyerUser> userManager;

        public ClientsController(
            IUnitOfWork unitOfWork,
            ILogger<CasesController> logger,
            IMapper mapper, 
            UserManager<LawyerUser> userManager)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
            this.userManager = userManager;
            this.logger = logger;
        }

        // GET: api/<ClientsController>
        //[HttpGet]
        //[ProducesResponseType(200)]
        //[ProducesResponseType(400)]
        //[ActionName("getAllClients")]
        //public ActionResult<IEnumerable<Client>> Get(bool includesCases = true)
        //{
        //    try
        //    {
        //        var results = unitOfWork.Clients.GetAllClients(includesCases);
        //        return Ok(mapper.Map<IEnumerable<Client>, IEnumerable<ClientDto>>(results));
        //    }
        //    catch (Exception ex)
        //    {
        //        logger.LogError($"Failed to get Clients: {ex}");
        //        return BadRequest("Failed to get Clients");
        //    }
        //}

        // GET: api/<ClientsController>
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ActionName("getAllClientsOfaLawyer")]
        public ActionResult<IEnumerable<Client>> Get(bool includesCases = true)
        {
            try
            {
                var lawyerUserName = User.Identity.Name;

                var results = unitOfWork.Clients.GetAllClientsByLawyerUser(includesCases, lawyerUserName);
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
        [ActionName("getClientById")]
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
        [ActionName("saveClient")]
        public async Task<IActionResult> PostAsync([FromBody] ClientDto model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    // Set the userId in the clientDTO
                    LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
                    model.LawyerId = user.Id;

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

        [HttpGet]
        [ActionName("getClientsByQuery")]
        public IEnumerable<Client> GetClients(string query = null)
        {
            var lawyerUserName = User.Identity.Name;

            var clientsQuery = unitOfWork.Clients.GetClients(query, lawyerUserName);
            return clientsQuery;
        }

        // PUT api/<ClientsController>/5
        [HttpPut("{id}")]
        [ActionName("updateClient")]
        public async Task<ActionResult<ClientDto>> PutAsync(int id, [FromBody] ClientDto model)
        {
            Client clientToUpdate = this.unitOfWork.Clients.FindClientById(id, User.Identity.Name);

            if (clientToUpdate == null) return NotFound("Couldn't find the Client");

            this.mapper.Map(model, clientToUpdate);     // Map everything from ClientDto in to Client

            // Set the userId in the client to update
            LawyerUser user = await userManager.FindByNameAsync(User.Identity.Name);
            clientToUpdate.LawyerId = user.Id;

            if (unitOfWork.Complete())
            {
                return Ok(this.mapper.Map<ClientDto>(clientToUpdate));
            }

            return BadRequest("Failed to Update Client");
        }

        // DELETE api/<ClientsController>/5
        [HttpDelete("{id}")]
        [ActionName("delete")]
        public IActionResult Delete(int id)
        {
            try
            {
                Client clientToDelete = this.unitOfWork.Clients.FindClientById(id, User.Identity.Name);
                if (clientToDelete == null) return NotFound();

                this.unitOfWork.Clients.Delete(clientToDelete);

                if (unitOfWork.Complete()) return Ok();
            }
            catch (Exception)
            {
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }

            return BadRequest("Failed to delete Case");
        }
    }
}
