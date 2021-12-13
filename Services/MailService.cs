using FluentEmail.Core;
using FluentEmail.Smtp;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace LawyerApp.Services
{
    public class MailService : IMailService
    {
        private readonly ILogger<MailService> logger;
        private readonly IFluentEmailFactory emailFactory;
        private readonly IWebHostEnvironment env;

        public MailService(ILogger<MailService> logger,
            IFluentEmailFactory emailFactory,
            IWebHostEnvironment env)
        {
            this.logger = logger;
            this.emailFactory = emailFactory;
            this.env = env;
        }

        public async void SendMessage(string to, string subject, string body)
        {
            try
            {
                await emailFactory.Create()
                    .To(to, to)
                    .Subject(subject)
                    .Body($"{subject} <br> {body}")
                    .SendAsync();

                //logger.LogInformation($"To: {to} Subject: {subject} Body {body}");
            }
            catch (Exception ex)
            {
                logger.LogError("Email was not send", ex);
            }
        }

        public async void SendAccountConfirmation(string to, string subject, string confirmationLink)
        {
            try
            {
                await emailFactory.Create()
                    .To(to, to)
                    .Subject(subject)
                    .UsingTemplateFromFile($"{Directory.GetCurrentDirectory()}/wwwroot/emails/accountConfirmation.cshtml",
                    new
                    {
                        Subject = subject,
                        ConfirmationLink = confirmationLink,
                    })
                    .SendAsync();
            }
            catch (Exception ex)
            {
                logger.LogError("Account Confirmation link Email was not send", ex);
            }
        }

        public async void SendResetPasswordLink(string to, string subject, string resetLink)
        {
            try
            {
                await emailFactory.Create()
                    .To(to, to)
                    .Subject(subject)
                    .UsingTemplateFromFile($"{this.env.WebRootPath}/wwwroot/emails/resetPassword.cshtml",
                    new
                    {
                        Subject = subject,
                        ResetLink = resetLink,
                    })
                    .SendAsync();
            }
            catch (Exception ex)
            {
                logger.LogError("Reset Link Email was not send", ex);
            }
        }

        public async void SendResetPasswordLinkSendGrid(string to, string subject, string resetLink)
        {
            try
            {
                var result = await emailFactory.Create()
                    .To(to, to)
                    .Subject(subject)
                    //.PlaintextAlternativeBody("Some Ramdom email")
                    .UsingTemplateFromFile($"{this.env.WebRootPath}/emails/resetPassword.cshtml",
                    new
                    {
                        Subject = subject,
                        ResetLink = resetLink,
                    })
                    .SendAsync();

                if(!result.Successful)
                {
                    throw new Exception(result.ErrorMessages[1]);
                }
            }
            catch (Exception ex)
            {
                logger.LogError("Reset Link Email was not send", ex);
                throw new Exception("Reset Link Email was not send" + ex);
            }
        }

        public async Task<FluentEmail.Core.Models.SendResponse> SendAccountConfirmationSendGrid(string to, string subject, string confirmationLink)
        {
            try
            {
               var result = await emailFactory.Create()
                    .To(to, to)
                    .Subject(subject)
                    .UsingTemplateFromFile($"{this.env.WebRootPath}/emails/accountConfirmation.cshtml",
                    new
                    {
                        Subject = subject,
                        ConfirmationLink = confirmationLink,
                    })
                    .SendAsync();

                return result;
            }
            catch (Exception ex)
            {
                logger.LogError("Account Confirmation link Email was not send", ex);
                return null;
            }

        }
    }
}
