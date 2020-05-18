import React, { useContext } from "react";

// import styles
import "./styles/_sidebar.scss";
import "./styles/_saved-jobs.scss";
import SavedJobs from "./SavedJobs";

const Sidebar = () => {
  return (
    <div id="main-sidebar" className="item_1_4">
      <SavedJobs />
    </div>
  );
};

export default Sidebar;
