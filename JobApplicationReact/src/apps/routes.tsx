import { createBrowserRouter } from "react-router";
import JobListPage from "./applications/JobListPage";
import CreateJobPage from "./applications/CreateJobPage";

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
