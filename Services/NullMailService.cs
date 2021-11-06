using FluentEmail.Core;
using FluentEmail.Smtp;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Net;
using System.Net.Mail;

namespace LawyerApp.Services
{
    public class NullMailService : IMailService
    {
        private readonly ILogger<NullMailService> logger;
        private readonly IFluentEmailFactory emailFactory;

        public NullMailService(ILogger<NullMailService> logger,
            IFluentEmailFactory emailFactory)
        {
            this.logger = logger;
            this.emailFactory = emailFactory;
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
                    .UsingTemplateFromFile($"{Directory.GetCurrentDirectory()}/wwwroot/emails/resetPassword.cshtml",
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

    }
}
