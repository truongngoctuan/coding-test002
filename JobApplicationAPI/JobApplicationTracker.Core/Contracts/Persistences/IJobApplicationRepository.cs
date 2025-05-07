using JobApplicationTracker.Domain.Entities;

namespace JobApplicationTracker.Core.Contracts.Persistences;

public interface IJobApplicationRepository : IAsyncRepository<JobApplicationEntity>
{
}
