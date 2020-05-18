import React, { useContext } from "react";
import { SavedContext } from "../../contexts/SavedContext";

const SavedJobs = () => {
  const [state, dispatch] = useContext(SavedContext);
  const savedListingMarkup = state.savedJobListings.map(savedListing => {
    return <li>{savedListing.name}</li>;
  });
  console.log("jobs", state);
  return (
    <div id="saved-jobs">
      <h2 className="flex row full jfc afc">Saved Jobs</h2>
      <ul>{savedListingMarkup}</ul>
    </div>
  );
};

export default SavedJobs;
