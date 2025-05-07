using System.Collections.Generic;
using MediatR;

namespace JobApplicationTracker.Core.Features.Users;
public class GetJobApplicationsRequest : IRequest<IEnumerable<JobApplicationVM>>
{
    public GetJobApplicationsRequest()
    {
    }
}