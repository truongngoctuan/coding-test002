using MediatR;

namespace JobApplicationTracker.Core.Features.Users;

public class UpdateJobApplicationRequest : UpdateJobApplicationVM, IRequest<JobApplicationResponseVM>
{
}