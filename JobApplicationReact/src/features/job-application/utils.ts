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

export function getNextStatuses(status: JobApplicationStatus) {
  switch (status) {
    case JobApplicationStatus.Applied:
      return [
        JobApplicationStatus.Interview,
        JobApplicationStatus.Offer,
        JobApplicationStatus.Rejected,
      ];
    case JobApplicationStatus.Interview:
      return [JobApplicationStatus.Offer, JobApplicationStatus.Rejected];
    case JobApplicationStatus.Offer:
      return [JobApplicationStatus.Rejected];
    case JobApplicationStatus.Rejected:
      return [];
    default:
      return [];
  }
}