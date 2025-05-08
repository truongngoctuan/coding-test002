import { NavLink } from "react-router";
import { ApplicationTable } from "@/features/job-application/components/ApplicationTable";
import { Button } from "@/components/ui/button";

function JobListPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-6">Job List</h1>
      <div className="flex gap-4">
        <NavLink to="/applications/create" end>
          <Button>Create</Button>
        </NavLink>
      </div>
      <ApplicationTable data={[]} />
    </div>
  );
}

export default JobListPage;
