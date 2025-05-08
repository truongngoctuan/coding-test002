import { request } from "@/apis/Request";
import { ApplicationEndpoints } from "./ApplicationEndPoints";
import type { JobApplicationStatus } from "./types";

export const getApplications = () => {
  return request({
    url: ApplicationEndpoints.getApplications(),
    method: "GET",
    params: {
    },
  });
};

export const createApplication = (data: {
  companyName: string;
  position: string;
}) => {
  return request({
    url: ApplicationEndpoints.getApplications(),
    method: "POST",
    data,
  });
};

export const updateApplicationStatus = ({ id, data }: { id: number, data: { status?: JobApplicationStatus } }) => {
  return request({
    url: ApplicationEndpoints.getApplicationById(id),
    method: "PATCH",
    data,
  });
};