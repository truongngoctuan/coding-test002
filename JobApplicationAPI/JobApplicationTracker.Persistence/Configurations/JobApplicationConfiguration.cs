using JobApplicationTracker.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JobApplicationTracker.Persistence.Configurations;

public class JobApplicationConfiguration : IEntityTypeConfiguration<JobApplicationEntity>
{
    public void Configure(EntityTypeBuilder<JobApplicationEntity> builder)
    {
        builder.HasKey(t => t.JobApplicationId);

        builder.Property(t => t.CompanyName)
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(t => t.Position)
            .HasMaxLength(200)
            .IsRequired();
    }
}