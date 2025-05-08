using FluentValidation;

namespace JobApplicationTracker.Core.Features.Users;

public class UpdateJobApplicationValidator : AbstractValidator<UpdateJobApplicationRequest>
{
    public UpdateJobApplicationValidator()
    {
    }
}