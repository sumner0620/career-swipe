import React, { useContext } from "react";
import { SavedContext } from "../../contexts/SavedContext";

const SavedJobs = () => {
  const savedList = useContext(SavedContext);
  const savedListingMarkup = savedList.state.savedJobListings.map(
    savedListing => {
      return <li>{savedListing.name}</li>;
    }
  );
  return (
    <div>
      <ul>{savedListingMarkup}</ul>
    </div>
  );
};

export default SavedJobs;
