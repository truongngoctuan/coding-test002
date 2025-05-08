using JobApplicationTracker.Core.Contracts.Persistences;
using JobApplicationTracker.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace JobApplicationTracker.Persistence;

public class JobApplicationRepositoryInMemory : IJobApplicationRepository
{
    private readonly AppDBContext _dbContext;
    public JobApplicationRepositoryInMemory(AppDBContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<JobApplicationEntity> AddAsync(JobApplicationEntity entity)
    {
        entity.CreatedDate = DateTime.UtcNow;
        entity.UpdatedDate = DateTime.UtcNow;
        entity.Status = JobApplicationStatus.Applied;

        _dbContext.JobApplications.Add(entity);
        await _dbContext.SaveChangesAsync();
        return entity;
    }

    public async Task<IEnumerable<JobApplicationEntity>> GetAllAsync()
    {
        return await _dbContext.JobApplications.AsNoTracking().ToListAsync();
    }

    public Task<JobApplicationEntity?> GetByIdAsync(int id)
    {
        return _dbContext.JobApplications
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.JobApplicationId == id);
    }

    public Task UpdateAsync(JobApplicationEntity entity)
    {
        entity.UpdatedDate = DateTime.UtcNow;
        _dbContext.JobApplications.Update(entity);
        return _dbContext.SaveChangesAsync();
    }
}