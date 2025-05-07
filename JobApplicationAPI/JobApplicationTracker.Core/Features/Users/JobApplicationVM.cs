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