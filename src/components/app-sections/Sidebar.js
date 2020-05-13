import React from "react";

// import styles
import "./styles/_sidebar.scss";
import SavedJobs from "./SavedJobs";

const Sidebar = () => {
  const [savedList, addToSaved] = React.useState({});
  return (
    <div id="main-sidebar" className="item_1_4">
      <h2 className="flex row full jfc afc">Saved Jobs</h2>
      <SavedJobs />
    </div>
  );
};

export default Sidebar;
