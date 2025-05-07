using MediatR;

namespace JobApplicationTracker.Core.Features.Users;

public class CreateJobApplicationRequest : JobApplicationVM, IRequest<JobApplicationResponseVM>
{
}