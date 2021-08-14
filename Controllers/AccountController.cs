using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace LawyerApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<AccountController> logger;
        private readonly SignInManager<LawyerUser> signInManager;
        private readonly UserManager<LawyerUser> userManager;
        private readonly IMapper mapper;
        private readonly IConfiguration config;

        public AccountController(ILogger<AccountController> logger,
            SignInManager<LawyerUser> signInManager,
            UserManager<LawyerUser> userManager,
            IMapper mapper,
            IConfiguration config
            )
        {
            this.logger = logger;
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.mapper = mapper;
            this.config = config;
        }

        // Get Token to used in Angular
        [HttpPost]
        [ActionName("signin")]
        public async Task<IActionResult> GenerateToken([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByNameAsync(model.Email);

                if (user != null)
                {
                    var result = await signInManager.CheckPasswordSignInAsync(user, model.Password, false);
                    if (result.Succeeded)
                    {
                        // Create the Token
                        var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, new Guid().ToString()),
                            new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
                        };


                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:key"]));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(
                            config["Tokens:Issuer"],
                            config["Tokens:Audience"],
                            claims,
                            expires: DateTime.UtcNow.AddMinutes(30),
                            signingCredentials: creds
                            );

                        var results = new
                        {
                            id = user.Id,
                            email = user.Email,
                            role = "NotSetYet",
                            accessToken = new JwtSecurityTokenHandler().WriteToken(token),
                            refreshToken = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                        };

                        return Created("", results);
                    }
                }
            }

            return Unauthorized();
        }

        [HttpPost]
        [ActionName("signup")]
        public async Task<IActionResult> SignUp([FromBody] SignupViewModel model)
        {
            try
            {
                var user = mapper.Map<LawyerUser>(model);
                user.UserName = model.Email;

                var result = await userManager.CreateAsync(user, model.Password);
                return Created("", result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
