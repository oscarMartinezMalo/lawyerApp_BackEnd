using LawyerApp.Repositories;

namespace LawyerApp.Persistent
{
    public interface IUnitOfWork
    {
        ICaseRepository Cases { get; }
        IClientRepository Clients { get; }

        void AddEntity(object model);
        bool Complete();
        void Dispose();
    }
}