import { request } from "@/apis/Request";
import { ApplicationEndpoints } from "./ApplicationEndPoints";

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