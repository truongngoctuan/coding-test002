using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JobApplicationTracker.Core.Contracts.Persistences;

public interface IAsyncRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetById(Guid id);
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(Guid id);
}