using System.Threading.Tasks;

namespace LawyerApp.Services
{
    public interface IMailService
    {
        void SendMessage(string to, string subject, string body);
        void SendAccountConfirmation(string to, string subject, string confirmationLink);
        void SendResetPasswordLink(string to, string subject, string resetLink);

        Task<FluentEmail.Core.Models.SendResponse> SendAccountConfirmationSendGrid(string to, string subject, string confirmationLink);
        void SendResetPasswordLinkSendGrid(string to, string subject, string resetLink);
    }
}