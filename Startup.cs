using LawyerApp.Data;
using LawyerApp.Data.Entities;
using LawyerApp.Persistent;
using LawyerApp.Security;
using LawyerApp.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Text;

namespace LawyerApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Adding support for JWT
            services.AddAuthentication()
                .AddCookie(cfg => cfg.SlidingExpiration = true)
            .AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;

                cfg.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidIssuer = Configuration["Tokens:Issuer"],
                    ValidAudience = Configuration["Tokens:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:key"]))
                };
            });

            services.AddIdentity<LawyerUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
                cfg.SignIn.RequireConfirmedAccount = true;

                cfg.Tokens.EmailConfirmationTokenProvider = "CustomEmailConfirmation"; // This line is neccesary to change emailConfirmation token lifeSpan
            })
                .AddEntityFrameworkStores<LawyerAppContext>()
                .AddDefaultTokenProviders()
                .AddTokenProvider<CustomEmailConfirmationTokenProvider<LawyerUser>>("CustomEmailConfirmation");   // This line is neccesary to change emailConfirmation token lifeSpan

            // Setting General tokens lifespan to 5 hour
            services.Configure<DataProtectionTokenProviderOptions>(o =>
            o.TokenLifespan = TimeSpan.FromHours(5));

            // Change token lifespan of just Email Confirmation token 
            services.Configure< CustomEmailConfirmationTokenProviderOptions>(o =>
           o.TokenLifespan = TimeSpan.FromDays(2));

            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            // FluentEmail SMTP service configuration
            //var from = Configuration.GetSection("Gmail")["From"];
            //var gmailSender = Configuration.GetSection("Gmail")["Sender"];
            //var gmailPassword = Configuration.GetSection("Gmail")["Password"];
            //var gmailPort = Convert.ToInt32(Configuration.GetSection("Gmail")["Port"]);

            //services
            //    .AddFluentEmail(gmailSender, from)
            //    .AddRazorRenderer()
            //    .AddSmtpSender(new SmtpClient("smtp.gmail.com")
            //    {
            //        UseDefaultCredentials = false,
            //        Port = gmailPort,
            //        Credentials = new NetworkCredential(gmailSender, gmailPassword),
            //        EnableSsl = true,
            //    });
            // End FluentEmail service configuration

            // FluentEmail SendGrid
            var sendGridSender = Configuration.GetSection("Sendgrid")["Sender"];
            var sendGridKey = Configuration.GetSection("Sendgrid")["SendgridKey"];
            var sendGridfrom = Configuration.GetSection("Sendgrid")["From"];

            services.AddFluentEmail(sendGridSender, sendGridfrom)
                .AddRazorRenderer()
                .AddSendGridSender(sendGridKey);
        // End FluentEmail SendGrid

            services.AddTransient<IMailService, MailService>();
            services.AddTransient<IDocumentService, DocumentService>();

            services.AddTransient<LawyerAppSeeder>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();


            services.AddDbContext<LawyerAppContext>(cfg =>
            {
                cfg.UseSqlServer(Configuration.GetConnectionString("LawyerAppConnectionString"));
            });

            services.AddMvc()
                .AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_3_0);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                DeveloperExceptionPageOptions developerExceptionPageOptions = new DeveloperExceptionPageOptions()
                {
                    SourceCodeLineCount = 10
                };

                app.UseDeveloperExceptionPage();

                // Log Error using NLog the path to the logs are in nlog.config file
                app.UseExceptionHandler("/Error");
                app.UseStatusCodePagesWithReExecute("/Error/{0}");
            }
            else
            {
                // Log Error using NLog the path to the logs are in nlog.config file
                app.UseExceptionHandler("/Error");
                app.UseStatusCodePagesWithReExecute("/Error/{0}");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseRouting();

            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true) // allow any origin
                .AllowCredentials()); // allow credentials

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
