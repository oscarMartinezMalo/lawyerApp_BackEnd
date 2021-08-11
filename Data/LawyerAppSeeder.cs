using LawyerApp.Data.Entities;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerApp.Data
{
    public class LawyerAppSeeder
    {
        private readonly LawyerAppContext ctx;
        private readonly UserManager<LawyerUser> userManager;

        public LawyerAppSeeder(LawyerAppContext ctx
            , UserManager<LawyerUser> userManager
            )
        {
            this.ctx = ctx;
            this.userManager = userManager;
        }

        public async Task SeedAsync()
        {
            ctx.Database.EnsureCreated();


            LawyerUser user = await userManager.FindByNameAsync("ommalor@gmail.com");

            if (user == null)
            {
                user = new LawyerUser()
                {
                    FirstName = "Oscar",
                    LastName = "Martinez",
                    Email = "ommalor@gmail.com",
                    UserName = "ommalor@gmail.com"
                };

                var result = await userManager.CreateAsync(user, "P@ssw0rd!");
            }

            if (!ctx.Cases.Any())
            {
                var client = ctx.Clients.Where(cl => cl.Id == 1).FirstOrDefault();
                if (client != null)
                {
                    var newCase = new Case()
                    {
                        CaseNumber = "1111",
                        Type = "Inmigration",
                        Client = client,
                        Lawyer = user
                    };

                    ctx.Add(newCase);
                }
            }

            ctx.SaveChanges();
        }
    }
}
