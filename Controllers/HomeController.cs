using LawyerApp.Models;
using LawyerApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LawyerApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMailService mailService;

        public HomeController(
            IMailService mailService
            )
        {
            this.mailService = mailService;
        }

        public IActionResult Index()
        {
            // Sample of using a service
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
