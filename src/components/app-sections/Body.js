// import dependencies
import React from "react";

// import components
import JobFeed from "./JobFeed.js";
import Sidebar from "./Sidebar.js";

// import styles
import "./styles/_job-feed.scss";

const Body = () => {
  return (
    <main className="flex row afs jfc">
      <JobFeed />
      <Sidebar />
    </main>
  );
};

export default Body;
