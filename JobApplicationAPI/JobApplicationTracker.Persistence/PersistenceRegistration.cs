using Microsoft.Extensions.DependencyInjection;
using JobApplicationTracker.Core.Contracts.Persistences;

namespace JobApplicationTracker.Persistence;

public static class PersistenceRegistration
{
    public static IServiceCollection AddPersistenceService(this IServiceCollection services)
    {
        // services.AddScoped<IJobApplicationRepository, JobApplicationRepositoryJsonFlatFile>();
        services.AddScoped<IJobApplicationRepository, JobApplicationRepositoryInMemory>();
        return services;
    }
}