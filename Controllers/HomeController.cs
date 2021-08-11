using LawyerApp.Data;
using LawyerApp.Models;
using LawyerApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;

namespace LawyerApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IMailService mailService;
        private readonly ILawyerAppRepository repository;

        public HomeController(
            ILogger<HomeController> logger,
            IMailService mailService,
            ILawyerAppRepository repository)
        {
            _logger = logger;
            this.mailService = mailService;
            this.repository = repository;
        }

        public IActionResult Index()
        {
            var result = repository.GetAllCases();
            mailService.SendMessage("ommalor@gmail.com", "Oscar", "Body of Message");
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
