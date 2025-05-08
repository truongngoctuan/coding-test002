import React from "react";
import { NavLink } from "react-router";

function JobList() {
  return (
    <div>
      JobList{" "}
      <NavLink to="/applications/create" end>
        Create
      </NavLink>
    </div>
  );
}

export default JobList;
