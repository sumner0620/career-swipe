// import dependencies
import React from "React";

// import components
import JobFeed from "./JobFeed.js";
import Sidebar from "./Sidebar.js";

export const Body = () => {
  return (
    <main className="flex row afs jfc">
      <JobFeed />
      <Sidebar />
    </main>
  );
};
