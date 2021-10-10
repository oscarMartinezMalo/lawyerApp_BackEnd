using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.Persistent;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LawyerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Authorize(Roles = "Admin,Lawyer")]
    public class CasesController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly ILogger<CasesController> logger;
        private readonly IMapper mapper;

        public CasesController(
            IUnitOfWork unitOfWork,
            ILogger<CasesController> logger,
            IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.logger = logger;
            this.mapper = mapper;
        }

        // GET Cases by Lawyer
        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Case>> Get()
        {
            try
            {
                var lawyerUser = User.Identity.Name;

                return Ok(mapper.Map<IEnumerable<Case>, IEnumerable<CaseDto>>(unitOfWork.Cases.GetAllCasesByLawyer(lawyerUser)));
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Cases: {ex}");
                return BadRequest("Failed to get Cases");
            }
        }

        // GET api/<CasesController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var oneCase = unitOfWork.Cases.GetCaseById(id);

                if (oneCase != null) { return Ok(mapper.Map<Case, CaseDto>(oneCase)); }
                else { return NotFound(); }
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Case: {ex}");
                return BadRequest("Failed to get Case");
            }
        }

        // POST api/<CasesController>
        [HttpPost]
        public IActionResult Post([FromBody] CaseDto model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var lawyerUser = User.Identity.Name;

                    model.CreatedDate = DateTime.Now;
                    var newCase = mapper.Map<CaseDto, Case>(model);

                    unitOfWork.AddEntity(newCase);
                    if (unitOfWork.Complete())
                    {
                        return Created($"/api/orders/{newCase.Id}", mapper.Map<Case, CaseDto>(newCase));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to save new Case: {ex}");
            }

            return BadRequest("Failed to save Case");
        }

        // PUT api/<CasesController>/caseId
        // PUT api/<CasesController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] CaseDto caseResource)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);

                var caseToEdit = unitOfWork.Cases.GetCaseById(id);

                mapper.Map<CaseDto, Case>(caseResource, caseToEdit);

                if (unitOfWork.Complete())
                {
                    return Ok(mapper.Map<Case, CaseDto>(caseToEdit));
                }

            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to save new Case: {ex}");
            }

            return BadRequest("Failed to save Case");
        }

        // DELETE api/<CasesController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Case caseToDelete = this.unitOfWork.Cases.FindCaseById(id, User.Identity.Name);
                if (caseToDelete == null) return NotFound();

                this.unitOfWork.Cases.Delete(caseToDelete);

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
