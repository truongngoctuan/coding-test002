using JobApplicationTracker.Domain.Entities;

namespace JobApplicationTracker.Api.Models
{
    public class UpdateJobApplicationParams
    {
        public JobApplicationStatus? Status { get; set; }
    }
}