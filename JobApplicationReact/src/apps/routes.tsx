import { createBrowserRouter } from "react-router";
import JobList from "./job-application/JobList";
import CreateJob from "./job-application/CreateJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <JobList />,
  },
  {
    path: "/applications",
    element: <JobList />,
  },
  {
    path: "/applications/create",
    element: <CreateJob />,
  },
]);
