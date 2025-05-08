import { request } from "@/apis/Request";
import { ApplicationEndpoints } from "./ApplicationEndPoints";

export const getApplications = () => {
  console.log("getApplications");
  return request({
    url: ApplicationEndpoints.getApplications(),
    method: "GET",
    params: {
    },
  });
};