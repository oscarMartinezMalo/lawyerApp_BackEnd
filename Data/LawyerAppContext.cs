using LawyerApp.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LawyerApp.Data
{
    public class LawyerAppContext : IdentityDbContext<LawyerUser>
    {
        public LawyerAppContext(DbContextOptions<LawyerAppContext> options) : base(options)
        { }

        public DbSet<Case> Cases { get; set; }
        public DbSet<Client> Clients { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Client>()
                .HasData(new Client()
                {
                    Id = 1,
                    FirstName = "Katherine",
                    LastName = "Llosa",
                    Phone = "786-789-8976",
                    Address = "5ta entre B y C",
                });
        }
    }
}
