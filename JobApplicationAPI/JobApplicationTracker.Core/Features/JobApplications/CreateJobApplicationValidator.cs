using FluentValidation;

namespace JobApplicationTracker.Core.Features.Users;

public class CreateJobApplicationValidator : AbstractValidator<CreateJobApplicationRequest>
{
    public CreateJobApplicationValidator()
    {
        RuleFor(p => p.CompanyName)
            .NotEmpty().WithMessage("{PropertyName} is required.")
            .NotNull()
            .MaximumLength(100).WithMessage("{PropertyName} must not exceed 100 characters.");

        RuleFor(p => p.Position)
                .NotEmpty().WithMessage("{PropertyName} is required.")
                .NotNull()
                .MaximumLength(100).WithMessage("{PropertyName} must not exceed 100 characters.");
    }
}