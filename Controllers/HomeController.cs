using LawyerApp.Models;
using LawyerApp.Persistent;
using LawyerApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LawyerApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMailService mailService;
        private readonly IUnitOfWork unitOfWork;

        public HomeController(
            IMailService mailService,
            IUnitOfWork unitOfWork
            )
        {
            this.mailService = mailService;
            this.unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var result = unitOfWork.Cases.GetAllCases();
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
