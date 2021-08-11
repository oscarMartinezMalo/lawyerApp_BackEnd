using Microsoft.Extensions.Logging;

namespace LawyerApp.Services
{
    public class NullMailService : IMailService
    {
        private readonly ILogger<NullMailService> logger;

        public NullMailService(ILogger<NullMailService> logger)
        {
            this.logger = logger;
        }

        public void SendMessage(string to, string subject, string body)
        {
            logger.LogInformation($"To: {to} Subject: {subject} Body {body}");
        }
    }
}
