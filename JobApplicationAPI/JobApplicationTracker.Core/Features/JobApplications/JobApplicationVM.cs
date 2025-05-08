using System;
using JobApplicationTracker.Domain.Entities;

namespace JobApplicationTracker.Core.Features.Users;

public class JobApplicationVM
{
    public required string CompanyName { get; set; }
    public required string Position { get; set; }
    public JobApplicationStatus Status { get; set; }
    public DateTime DateApplied { get; set; }
}

public class CreateJobApplicationVM
{
    public required string CompanyName { get; set; }
    public required string Position { get; set; }
}

public class UpdateJobApplicationVM
{
    public int JobApplicationId { get; set; }
    public JobApplicationStatus? Status { get; set; }
}

public class JobApplicationResponseVM : JobApplicationVM
{
    public int JobApplicationId { get; set; }
}