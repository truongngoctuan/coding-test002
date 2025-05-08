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

public interface IInseartionRepository<T> where T : class
{
    Task<T> AddAsync(T entity);
}
public interface IDeletionRepository<T> where T : class
{
    Task DeleteAsync(Guid id);
}
public interface IUpdateRepository<T> where T : class
{
    Task UpdateAsync(T entity);
}
public interface IGetByIdRepository<T> where T : class
{
    Task<T?> GetByIdAsync(int id);
}
public interface IGetAllRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
}