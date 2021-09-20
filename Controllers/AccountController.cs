using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.Services;
using LawyerApp.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.Extensions;
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
        public readonly RoleManager<IdentityRole> roleManager;
        private readonly IMailService mailService;
        private readonly IMapper mapper;
        private readonly IConfiguration config;

        public AccountController(ILogger<AccountController> logger,
            SignInManager<LawyerUser> signInManager,
            UserManager<LawyerUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IMailService mailService,
            IMapper mapper,
            IConfiguration config
            )
        {
            this.logger = logger;
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.mailService = mailService;
            this.mapper = mapper;
            this.config = config;
        }

        // Get Token to used in Angular
        [HttpPost]
        [ActionName("signin")]
        public async Task<IActionResult> GenerateToken([FromBody] LoginDto model)
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
                            expires: DateTime.UtcNow.AddMinutes(1),
                            signingCredentials: creds
                            );

                        var results = new
                        {
                            id = user.Id,
                            firstName = user.FirstName,
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
        public async Task<IActionResult> SignUp([FromBody] SignupDto model)
        {
            try
            {
                var user = mapper.Map<LawyerUser>(model);
                user.UserName = model.Email;

                var result = await userManager.CreateAsync(user, model.Password);
                var test = Request.GetDisplayUrl();
                if (result.Succeeded)
                {
                    // Create a role and assign it to the User
                    //var resultRole = await roleManager.CreateAsync(new IdentityRole("Admin"));
                    //await userManager.AddToRoleAsync(user, "Admin");

                    return Created("", model);
                }

                return BadRequest(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPut]
        [ActionName("forgotPassword")]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDto model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);

            if (user == null) return Ok(new { message = "A reset link was sent to your Email" }); //&& userManager.IsEmailConfirmedAsync(user)
            try
            {
                var token = await userManager.GeneratePasswordResetTokenAsync(user);

                var resetPasswordLink = config["FrontEnd:url"] + "forgot-password-token?token=" + token;

                mailService.SendMessage($"{user.Email}", "Reset you Email", resetPasswordLink);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to create link: {ex}");
            }

            return Ok(new { message = "A reset link was sent to your Email" });
        }

        [HttpGet]
        [ActionName("getUser")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetUserByToken()
        {
            var userAccount = await userManager.FindByNameAsync(User.Identity.Name);
            var user = mapper.Map<LawyerUser, LoginResponseDto>(userAccount);
            return Ok(user);
        }

        [HttpPost]
        [ActionName("forgotPasswordToken")]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPasswordToken([FromBody] ResetPasswordTokenDto model)
        {
            try
            {
                var user = await userManager.FindByEmailAsync(model.Email);
                if (user != null)
                {
                    // Replace blank with + sign because the browser url automaticaly change it in the frontEnd
                    model.ForgotPasswordToken = model.ForgotPasswordToken.Replace(' ', '+');

                    var result = await userManager.ResetPasswordAsync(user, model.ForgotPasswordToken, model.Password);
                    if (result.Succeeded)
                    {
                        return Ok(new { message = "Password successfully changed" });
                    }
                    else
                    {
                        return Unauthorized(result.Errors);
                    }
                }

                return Ok("Password successfully changed");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [ActionName("changePassword")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> changePassword([FromBody] ChangePasswordDto model)
        {
            try
            {
                if (model.newPassword != model.retypePassword) return BadRequest("New Password and RetypePassword dont match");

                var user = await userManager.FindByNameAsync(User.Identity.Name);
                if (user == null) return BadRequest();

                var result = await userManager.ChangePasswordAsync(user, model.currentPassword, model.newPassword);
                if (!result.Succeeded) return BadRequest(result);

                return Ok(new { message = "Password successfully changed" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
