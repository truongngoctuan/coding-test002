using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using JobApplicationTracker.Core.Contracts.Persistences;
using MediatR;

namespace JobApplicationTracker.Core.Features.Users;

public class GetJobApplicationsRequestHandle : IRequestHandler<GetJobApplicationsRequest, IEnumerable<JobApplicationResponseVM>>
{
    private readonly IMapper _mapper;
    private readonly IJobApplicationRepository _jobApplicationRepository;
    public GetJobApplicationsRequestHandle(IMapper mapper, IJobApplicationRepository jobApplicationRepository)
    {
        _mapper = mapper;
        _jobApplicationRepository = jobApplicationRepository;
    }

    public async Task<IEnumerable<JobApplicationResponseVM>> Handle(GetJobApplicationsRequest request, CancellationToken cancellationToken)
    {
        var users = await _jobApplicationRepository.GetAllAsync();
        return _mapper.Map<IEnumerable<JobApplicationResponseVM>>(users);
    }
}