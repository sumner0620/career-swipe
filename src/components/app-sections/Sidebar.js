import React, { useContext } from "react";

// import styles
import "./styles/_sidebar.scss";
import SavedJobs from "./SavedJobs";

const Sidebar = () => {
  return (
    <div id="main-sidebar" className="item_1_4">
      <h2 className="flex row full jfc afc">Saved Jobs</h2>
      <SavedJobs />
    </div>
  );
};

export default Sidebar;
