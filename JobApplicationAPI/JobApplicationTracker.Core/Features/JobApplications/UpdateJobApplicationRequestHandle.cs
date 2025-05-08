using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using JobApplicationTracker.Core.Contracts.Persistences;
using JobApplicationTracker.Domain.Entities;
using MediatR;

namespace JobApplicationTracker.Core.Features.Users;

public class UpdateJobApplicationRequestHandle : IRequestHandler<UpdateJobApplicationRequest, JobApplicationResponseVM>
{
    private readonly IMapper _mapper;
    private readonly IJobApplicationRepository _jobApplicationRepository;

    public UpdateJobApplicationRequestHandle(IMapper mapper, IJobApplicationRepository jobApplicationRepository)
    {
        _mapper = mapper;
        _jobApplicationRepository = jobApplicationRepository;
    }

    public async Task<JobApplicationResponseVM> Handle(UpdateJobApplicationRequest request, CancellationToken cancellationToken)
    {
        var validator = new UpdateJobApplicationValidator();
        var validationResult = await validator.ValidateAsync(request);
        if (validationResult.Errors.Count > 0)
        {
            throw new Exceptions.ValidationException(validationResult);
        }

        var jobApplication = await _jobApplicationRepository.GetByIdAsync(request.JobApplicationId);
        if (jobApplication == null)
        {
            throw new Exceptions.NotFoundException(nameof(JobApplicationEntity), request.JobApplicationId);
        }

        jobApplication.Status = request.Status ?? jobApplication.Status;

        await _jobApplicationRepository.UpdateAsync(jobApplication);

        return _mapper.Map<JobApplicationResponseVM>(jobApplication);
    }
}