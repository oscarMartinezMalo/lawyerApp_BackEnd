using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.Dtos;
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
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
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
                        var claims = new List<Claim>
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, new Guid().ToString()),
                            new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
                        };

                        // Add the Roles of the user to the token claims
                        //var userRoles = await this.GetUserRoles(user);
                        var userRoles = await userManager.GetRolesAsync(user);
                        foreach (var role in userRoles)
                        {                            
                            claims.Add(new Claim(ClaimTypes.Role, role));
                        }
                        ////

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
                            firstName = user.FirstName,
                            lastName = user.LastName,
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

        //[HttpGet]
        //[ActionName("getUser")]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        //public async Task<IActionResult> GetUserByToken()
        //{
        //    var userAccount = await userManager.FindByNameAsync(User.Identity.Name);

        //    var user = mapper.Map<LawyerUser, LoginResponseDto>(userAccount);

        //    var userRoles = await userManager.GetRolesAsync(userAccount);

        //    user.Roles = userRoles;

        //    return Ok(user);
        //}

        [HttpGet]
        [ActionName("getUser")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetUserByToken()
        {
            var userAccount = await userManager.FindByNameAsync(User.Identity.Name);

            var user = mapper.Map<LawyerUser, UserDto>(userAccount);

            var userWithRoles = await this.SetUserRoles(user, userAccount);

            return Ok(userWithRoles);
        }

        [HttpGet("{id}")]
        [ActionName("getUserById")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetUserById(string id)
        {
            var userAccount = await userManager.FindByIdAsync(id);

            var user = mapper.Map<LawyerUser, UserDto>(userAccount);
            //user.Roles = await userManager.GetRolesAsync(userAccount);

            var userWithRoles = await this.SetUserRoles(user, userAccount);

            return Ok(userWithRoles);
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
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto model)
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

        [HttpPut]
        [ActionName("updateProfile")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileDto model)
        {
            LawyerUser user;

            if (model.id != "")
            {
                user = await userManager.FindByIdAsync(model.id);
            }
            else
            {
                user = await userManager.FindByNameAsync(User.Identity.Name);
            }

            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.Email = model.Email;
            user.UserName = model.Email;

            var result = await userManager.UpdateAsync(user);
            if(result.Succeeded) {
                return Created("User Profile was successfully updated", user);
            }

            return BadRequest();
        }

        [HttpGet]
        [ActionName("roles")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public ActionResult<IEnumerable<RoleDto>> GetRoles()
        {
            try
            {
                var roles = roleManager.Roles;
                return Ok(roles);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Roles: {ex}");
                return BadRequest("Failed to get Roles");
            }
        }

        [HttpPost]
        [ActionName("addRole")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddRole([FromBody] RoleDto role)
        {
            try
            {
                IdentityRole identityRole = new IdentityRole { Name = role.Name };
                IdentityResult result = await roleManager.CreateAsync(identityRole);



                if (result.Succeeded) {
                    IdentityRole newIdentityRole = await roleManager.FindByNameAsync(role.Name);
                    return Created("Role was created successfully", newIdentityRole);
                }

                return BadRequest("Failed to create Roles");
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to create Roles: {ex}");
                return BadRequest("Failed to create Roles");
            }
        }

        [HttpDelete("{id}")]
        [ActionName("deleteRole")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteRole(string id)
        {
            try
            {
               var roleToDelete = await roleManager.FindByIdAsync(id);
               var result =  await roleManager.DeleteAsync(roleToDelete);
               if (result.Succeeded) return Ok();
            }
            catch (Exception ex)
            {
                logger.LogError("Role was not deleted", ex);
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }

            return BadRequest("Failed to delete Case");
        }

        [HttpGet]
        [ActionName("getAllRolesByQuery")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public ActionResult<IEnumerable<UserLawyerDto>> GetAllRolesByQuery(string query = null)
        {
            try
            {
                var roles = roleManager.Roles.Where(r => (r.Name).Contains(query)).ToList();
                return Ok(roles);
            }
            catch (Exception ex)
            {
                logger.LogError($"Get Users failed: {ex}");
                return BadRequest("Failed to get Users");
            }
        }

        [HttpPut("{id}")]
        [ActionName("updateRole")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateRole(string id, [FromBody] RoleDto model)
        {
            try
            {
                var role = await roleManager.FindByIdAsync(id);
                if (role == null) return BadRequest("Failed to Update Client");

                role.Name = model.Name;
                var result = await roleManager.UpdateAsync(role);

                if (result.Succeeded) return Ok();
            }
            catch (Exception ex)
            {
                logger.LogError("Role was not updated", ex);
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }

            return BadRequest("Something went wrong, role was not updated");
        }

        [HttpGet("{id}")]
        [ActionName("getRoleById")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetRoleById(string id, bool includesUsers = true)
        {
            var role = await roleManager.FindByIdAsync(id);

            if (role == null) return BadRequest("Failed to Update Client");

            var roleModel = new RoleDto
            {
                Id = role.Id,
                Name = role.Name
            };

            // Add the users that belong to that role.
            if (includesUsers)
            {
                roleModel.Users = new List<UserDto>();

                foreach (var user in userManager.Users)
                {
                    if (await userManager.IsInRoleAsync(user, role.Name))
                    {
                        roleModel.Users.Add(mapper.Map<LawyerUser, UserDto>(user));
                    }
                }
            }

            return Ok(roleModel);
        }

        [HttpGet]
        [ActionName("users")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public ActionResult<IEnumerable<UserLawyerDto>> GetAllUsers()
        {
            try
            {
                var users = userManager.Users;
                var userList = mapper.Map<IEnumerable<LawyerUser>, IEnumerable<UserLawyerDto>>(users);
                return Ok(userList);
            }
            catch (Exception ex)
            {
                logger.LogError($"Get Users failed: {ex}");
                return BadRequest("Failed to get Users");
            }

        }

        [HttpGet]
        [ActionName("getAllUsersByQuery")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public ActionResult<IEnumerable<UserLawyerDto>> GetAllUsersByQuery(string query = null)
        {
            try
            {
                var users = userManager.Users.Where(u => (u.FirstName + ' ' + u.LastName).Contains(query)).ToList();
                var userList = mapper.Map<IEnumerable<LawyerUser>, IEnumerable<UserLawyerDto>>(users);
                return Ok(userList);
            }
            catch (Exception ex)
            {
                logger.LogError($"Get Users failed: {ex}");
                return BadRequest("Failed to get Users");
            }
        }

        [HttpDelete("{id}")]
        [ActionName("deleteUser")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteUserById(string id)
        {
            try
            {
                var userToDelete = await userManager.FindByIdAsync(id);
                var result = await userManager.DeleteAsync(userToDelete);
                if (result.Succeeded) return Ok();
            }
            catch (Exception ex)
            {
                logger.LogError("User was not deleted",ex);
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }

            return BadRequest("Failed to delete User, this user may have some clients associated");
        }

        [HttpGet("{id}")]
        [ActionName("getUser")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUserWithRoles(string id)
        {
            try
            {
                var userAccount = await userManager.FindByIdAsync(id);
                var user = mapper.Map<UserDto>(userAccount);

                user.Roles = new List<IdentityRole>();
                foreach (var role in roleManager.Roles)
                {
                    if (await userManager.IsInRoleAsync(userAccount, role.Name))
                    {
                        user.Roles.Add(role);
                    }
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get Roles: {ex}");
                return BadRequest("Failed to get Roles");
            }
        }

        [HttpPost()]
        [ActionName("deleteUserfromRole")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteUserfromRole([FromBody] UserIdRoleIdDto model)
        {
            try
            {
                var role = await roleManager.FindByIdAsync(model.roleId);
                if (role == null) return BadRequest("Role not found");

                var user = await userManager.FindByIdAsync(model.userId);
                if (user == null) return BadRequest("User not found");

                IdentityResult result = await userManager.RemoveFromRoleAsync(user, role.Name);

                if (result.Succeeded) return Ok(model);

                return BadRequest("User was not deleted from this role");
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get delete: {ex}");
                return BadRequest("Failed to delete");
            }
        }

        [HttpPost()]
        [ActionName("addUserToRole")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddUserToRole([FromBody] UserIdRoleIdDto model)
        {
            try
            {
                var role = await roleManager.FindByIdAsync(model.roleId);
                if (role == null) return BadRequest("Role not found");

                var user = await userManager.FindByIdAsync(model.userId);
                if (user == null) return BadRequest("User not found");

                IdentityResult result = await userManager.AddToRoleAsync(user, role.Name);

                if (result.Succeeded) return Created("", user);

                return BadRequest(result);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get delete: {ex}");
                return BadRequest("Failed to delete");
            }
        }

        [HttpPost()]
        [ActionName("addRoleToUser")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddRoleToUser([FromBody] UserIdRoleIdDto model)
        {
            try
            {
                var role = await roleManager.FindByIdAsync(model.roleId);
                if (role == null) return BadRequest("Role not found");

                var user = await userManager.FindByIdAsync(model.userId);
                if (user == null) return BadRequest("User not found");

                IdentityResult result = await userManager.AddToRoleAsync(user, role.Name);

                if (result.Succeeded) return Created("", role);

                return BadRequest(result);
            }
            catch (Exception ex)
            {
                logger.LogError($"Failed to get delete: {ex}");
                return BadRequest("Failed to delete");
            }
        }
        ////
        // Get the Roles from an User
        private async Task<UserDto> SetUserRoles(UserDto user, LawyerUser userDb)
        {
            user.Roles = new List<IdentityRole>();
            foreach (var role in roleManager.Roles)
            {
                if (await userManager.IsInRoleAsync(userDb, role.Name))
                {
                    user.Roles.Add(role);
                }
            }

            return user;
        }
    }
}
