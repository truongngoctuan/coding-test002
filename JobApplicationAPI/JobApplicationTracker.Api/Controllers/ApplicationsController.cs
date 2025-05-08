using CodingTest.Api.Models;
using JobApplicationTracker.Api.Models;
using JobApplicationTracker.Core.Features.Users;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationTracker.Api.Controllers;

[ApiController]
[Route("/api/applications")]
// [Authorize]
public class ApplicationsController : ControllerBase
{
    private readonly ILogger<ApplicationsController> _logger;
    private readonly IMediator _mediator;

    public ApplicationsController(ILogger<ApplicationsController> logger, IMediator mediator)
    {
        _logger = logger;
        _mediator = mediator;
    }

    [HttpGet()]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<JobApplicationVM>>> GetAll()
    {
        var results = await _mediator.Send(new GetJobApplicationsRequest());
        return Ok(results);
    }

    [HttpPost()]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<JobApplicationVM>> CreateJobApplication(JobApplicationParams application)
    {
        var results = await _mediator.Send(new CreateJobApplicationRequest
        {
            CompanyName = application.CompanyName,
            Position = application.Position,
        });
        return Ok(results);
    }

    [HttpPatch("{jobApplicationId}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<JobApplicationVM>> UpdateJobApplication(int jobApplicationId, UpdateJobApplicationParams application)
    {
        var results = await _mediator.Send(new UpdateJobApplicationRequest
        {
            JobApplicationId = jobApplicationId,
            Status = application.Status,
        });
        return Ok(results);
    }
}
