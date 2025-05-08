using System;
namespace JobApplicationTracker.Core.Exceptions;

public class NotFoundException : Exception
{
    public NotFoundException(string entityName, int id) : base($"{entityName} with id {id} not found.")
    {
    }
}