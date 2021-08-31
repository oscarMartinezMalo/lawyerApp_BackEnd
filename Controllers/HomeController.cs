using LawyerApp.Data;
using LawyerApp.Models;
using LawyerApp.Repositories;
using LawyerApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LawyerApp.Controllers
{
    public class HomeController : Controller
    {
        //private readonly ILogger<HomeController> _logger;
        private readonly IMailService mailService;
        private readonly ILawyerAppRepository repository;
        private readonly ICaseRepository caseRepository;

        public HomeController(
            //ILogger<HomeController> logger,
            IMailService mailService,
            ILawyerAppRepository repository,
            ICaseRepository caseRepository
            )
        {
            //_logger = logger;
            this.mailService = mailService;
            this.repository = repository;
            this.caseRepository = caseRepository;
        }

        public IActionResult Index()
        {
            var result = caseRepository.GetAllCases();
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
