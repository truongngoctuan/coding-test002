using Microsoft.EntityFrameworkCore;
using JobApplicationTracker.Persistence.Configurations;
using JobApplicationTracker.Domain.Entities;

namespace JobApplicationTracker.Persistence;

public class AppDBContext : DbContext
{
    public AppDBContext(DbContextOptions<AppDBContext> options)
        : base(options)
    {
    }

    public DbSet<JobApplicationEntity> JobApplications { get; set; } = null!;

    override protected void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(JobApplicationConfiguration).Assembly);
    }
}
