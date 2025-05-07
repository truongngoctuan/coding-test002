using JobApplicationTracker.Domain.Entities;

namespace JobApplicationTracker.Core.Contracts.Persistences;

public interface IJobApplicationRepository : IInseartionRepository<JobApplicationEntity>,
    IUpdateRepository<JobApplicationEntity>,
    IGetAllRepository<JobApplicationEntity>
{
}
