using System;
using AutoMapper;
using JobApplicationTracker.Core.Features.Users;
using JobApplicationTracker.Domain.Entities;

namespace JobApplicationTracker.Core.Profiles;

public class JobApplicationProfile : Profile
{
    public JobApplicationProfile()
    {
        CreateMap<JobApplicationEntity, JobApplicationVM>();
        CreateMap<CreateJobApplicationRequest, JobApplicationEntity>();
    }
}