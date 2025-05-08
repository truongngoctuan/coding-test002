import { NavLink } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getApplications } from "./Service";

function JobListPage() {
  const query = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
    staleTime: 1000,
  });
  console.log(query.data);

  return (
    <div>
      JobList{" "}
      <NavLink to="/applications/create" end>
        Create
      </NavLink>
    </div>
  );
}

export default JobListPage;
