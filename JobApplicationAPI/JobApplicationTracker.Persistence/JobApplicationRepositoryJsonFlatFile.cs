using JobApplicationTracker.Core.Contracts.Persistences;
using JobApplicationTracker.Domain.Entities;
using JsonFlatFileDataStore;

namespace JobApplicationTracker.Persistence;

public class JobApplicationRepositoryJsonFlatFile : IJobApplicationRepository
{
    public JobApplicationRepositoryJsonFlatFile()
    {
    }

    private DataStore getStore()
    {
        // Open database (create new if file doesn't exist)
        var store = new DataStore("data.json");
        return store;
    }

    IDocumentCollection<JobApplicationEntity> getCollection()
    {
        var store = getStore();

        // Get employee collection
        var collection = store.GetCollection<JobApplicationEntity>();

        return collection;
    }

    public async Task<JobApplicationEntity> AddAsync(JobApplicationEntity entity)
    {
        var store = getStore();
        await store.InsertItemAsync("items", entity);
        return entity;
    }

    public Task<IEnumerable<JobApplicationEntity>> GetAllAsync()
    {
        var collection = getCollection();
        return Task.FromResult<IEnumerable<JobApplicationEntity>>(collection.AsQueryable().AsEnumerable<JobApplicationEntity>());
    }

    public Task UpdateAsync(JobApplicationEntity entity)
    {
        throw new NotImplementedException();
    }

    public Task<JobApplicationEntity?> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }
}