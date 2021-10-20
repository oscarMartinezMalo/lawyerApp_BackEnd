using LawyerApp.Data;
using LawyerApp.Repositories;

namespace LawyerApp.Persistent
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly LawyerAppContext ctx;

        public ICaseRepository Cases { get; private set; }
        public IClientRepository Clients { get; private set; }
        public IDocumentRepository Documents { get; private set; }

        public UnitOfWork(
            LawyerAppContext ctx
            )
        {
            this.ctx = ctx;
            Cases = new CaseRepository(ctx);
            Clients = new ClientRepository(ctx);
            Documents = new DocumentRepository(ctx);
        }

        public bool Complete()
        {
            return ctx.SaveChanges() > 0;
        }

        public void AddEntity(object model)
        {
            ctx.Add(model);
        }

        public void Dispose()
        {
            ctx.Dispose();
        }
    }
}
