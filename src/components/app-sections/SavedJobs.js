import React, { useContext } from "react";
import { SavedContext } from "../../contexts/SavedContext";

const SavedJobs = () => {
  const [state] = useContext(SavedContext);
  const savedListingMarkup = state.savedJobListings.map(savedListing => {
    return <li key={savedListing.jobID}>{savedListing.name}</li>;
  });
  return (
    <div id="saved-jobs">
      <h2 className="flex row full jfc afc">Saved Jobs</h2>
      <ul>{savedListingMarkup}</ul>
    </div>
  );
};

export default SavedJobs;
