using JobApplicationTracker.Domain.Common;

namespace JobApplicationTracker.Domain.Entities;

public class JobApplicationEntity : AuditableEntity
{
    public int JobApplicationId { get; set; }
    public required string CompanyName { get; set; }
    public required string Position { get; set; }
    public JobApplicationStatus Status { get; set; }
}

