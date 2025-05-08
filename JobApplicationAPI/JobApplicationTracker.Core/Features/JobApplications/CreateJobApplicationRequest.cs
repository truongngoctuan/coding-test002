using MediatR;

namespace JobApplicationTracker.Core.Features.Users;

public class CreateJobApplicationRequest : CreateJobApplicationVM, IRequest<JobApplicationResponseVM>
{
}