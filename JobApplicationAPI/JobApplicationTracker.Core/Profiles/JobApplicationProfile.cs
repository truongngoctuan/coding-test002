using AutoMapper;
using JobApplicationTracker.Core.Features.Users;
using JobApplicationTracker.Domain.Entities;

namespace JobApplicationTracker.Core.Profiles;

public class JobApplicationProfile : Profile
{
    public JobApplicationProfile()
    {
        CreateMap<JobApplicationEntity, JobApplicationResponseVM>()
            .ForMember(dest => dest.DateApplied, opt => opt.MapFrom(src => src.CreatedDate));
        CreateMap<CreateJobApplicationRequest, JobApplicationEntity>();
    }
}