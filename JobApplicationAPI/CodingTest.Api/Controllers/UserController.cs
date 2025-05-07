using CodingTest.Api.Models;
using CodingTest.Core.Features.Users;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ToDoApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    public IMediator _mediator { get; set; }

    public UserController(ILogger<UserController> logger, IMediator mediator)
    {
        _logger = logger;
        _mediator = mediator;
    }

    [HttpGet()]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<UserVM>>> GetAll()
    {
        var results = await _mediator.Send(new GetUsersRequest());
        return Ok(results);
    }

    [HttpPost()]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<UserVM>> CreateUser(UserParams user)
    {
        var results = await _mediator.Send(new CreateUserRequest
        {
            FirstName = user.FirstName,
            LastName = user.LastName,
        });
        return Ok(results);
    }
}
