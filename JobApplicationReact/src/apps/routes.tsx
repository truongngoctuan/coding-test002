import { createBrowserRouter } from "react-router";
import JobListPage from "./job-application/JobListPage";
import CreateJobPage from "./job-application/CreateJobPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <JobListPage />,
  },
  {
    path: "/applications",
    element: <JobListPage />,
  },
  {
    path: "/applications/create",
    element: <CreateJobPage />,
  },
]);
