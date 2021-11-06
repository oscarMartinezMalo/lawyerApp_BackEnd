using LawyerApp.Models;
using LawyerApp.Persistent;
using LawyerApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;

namespace LawyerApp.Controllers
{
    public class ErrorController : Controller
    {
        private readonly ILogger<ErrorController> logger;
        private readonly IMailService mailService;
        private readonly IUnitOfWork unitOfWork;

        public ErrorController(
            ILogger<ErrorController> logger,
            IMailService mailService,
            IUnitOfWork unitOfWork
            )
        {
            this.logger = logger;
            this.mailService = mailService;
            this.unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var result = unitOfWork.Cases.GetAllCases();
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        [Route("Error/{statusCode}")]
        [AllowAnonymous]
        public IActionResult HttpStatusCodeHandler(int StatusCode)
        {
            var statusCodeResult = HttpContext.Features.Get<IStatusCodeReExecuteFeature>();

            switch (StatusCode)
            {
                case 404:
                    logger.LogError($"404 Error Occured. Path = {statusCodeResult.OriginalPath} " +
                        $"and QueryString = {statusCodeResult.OriginalQueryString}");
                        return NotFound();
            }

            return BadRequest();
        }

        [Route("Error")]
        [AllowAnonymous]
        public IActionResult Error()
        {
            var exceptionDetails = HttpContext.Features.Get<IExceptionHandlerPathFeature>();

            logger.LogError($"The path {exceptionDetails.Path} threw an exception {exceptionDetails.Error}");

            return BadRequest();
        }

    }
}
