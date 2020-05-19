// import dependencies
import React from "react";

// import components
import JobFeed from "./JobFeed.js";
import Sidebar from "./Sidebar.js";

// import styles
import "./styles/_job-feed.scss";
import { SavedProvider } from "../../contexts/SavedContext.js";
import { JobListProvider } from "../../contexts/JobListContext.js";

const Body = () => {
  return (
    <main className="flex row afs jfc">
      <SavedProvider>
        {/* <JobListProvider> */}
        <JobFeed />
        {/* </JobListProvider> */}
        <Sidebar />
      </SavedProvider>
    </main>
  );
};

export default Body;
