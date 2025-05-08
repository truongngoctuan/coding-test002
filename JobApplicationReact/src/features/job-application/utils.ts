import { JobApplicationStatus } from "./api/types";

export function getJobApplicationStatusString(status: JobApplicationStatus) {
  switch (status) {
    case JobApplicationStatus.Applied:
      return "Applied";
    case JobApplicationStatus.Interview:
      return "Interview";
    case JobApplicationStatus.Offer:
      return "Offer";
    case JobApplicationStatus.Rejected:
      return "Rejected";
    default:
      return "Unknown";
  }
}