import { createBrowserRouter } from "react-router";
import JobListPage from "./applications/JobListPage";
import CreateJobPage from "./applications/CreateJobPage";
import { APP_ROUTES } from "./route_path";

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.DEFAULT_PAGE,
    element: <JobListPage />,
  },
  {
    path: APP_ROUTES.JOB_LIST,
    element: <JobListPage />,
  },
  {
    path: APP_ROUTES.CREATE_JOB,
    element: <CreateJobPage />,
  },
]);
