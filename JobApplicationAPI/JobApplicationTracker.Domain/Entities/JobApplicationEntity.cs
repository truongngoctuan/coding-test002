using System;
using JobApplicationTracker.Domain.Common;

namespace JobApplicationTracker.Domain.Entities;

public class JobApplicationEntity : AuditableEntity
{
    public Guid JobApplicationId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
}

