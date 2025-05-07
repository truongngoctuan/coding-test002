using System;
namespace JobApplicationTracker.Domain.Common;

public class AuditableEntity
{
    public DateTime CreatedDate { get; set; }
    public DateTime? UpdatedDate { get; set; }
}