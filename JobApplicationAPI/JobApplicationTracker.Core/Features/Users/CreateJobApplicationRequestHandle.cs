using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using JobApplicationTracker.Core.Contracts.Persistences;
using JobApplicationTracker.Domain.Entities;
using MediatR;

namespace JobApplicationTracker.Core.Features.Users;

public class CreateJobApplicationRequestHandle : IRequestHandler<CreateJobApplicationRequest, JobApplicationVM>
{
    private readonly IMapper _mapper;
    private readonly IJobApplicationRepository _jobApplicationRepository;

    public CreateJobApplicationRequestHandle(IMapper mapper, IJobApplicationRepository jobApplicationRepository)
    {
        _mapper = mapper;
        _jobApplicationRepository = jobApplicationRepository;
    }

    public async Task<JobApplicationVM> Handle(CreateJobApplicationRequest request, CancellationToken cancellationToken)
    {
        var validator = new CreateJobApplicationValidator();
        var validationResult = await validator.ValidateAsync(request);
        if (validationResult.Errors.Count > 0)
        {
            throw new Exceptions.ValidationException(validationResult);
        }

        var userToSave = _mapper.Map<JobApplicationEntity>(request);
        userToSave.JobApplicationId = Guid.NewGuid();

        var user = await _jobApplicationRepository.AddAsync(userToSave);
        return _mapper.Map<JobApplicationVM>(user);
    }
}