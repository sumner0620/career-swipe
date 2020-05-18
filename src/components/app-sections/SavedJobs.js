import React, { useContext } from "react";
import { SavedContext } from "../../contexts/SavedContext";

const SavedJobs = () => {
  const savedList = useContext(SavedContext);
  console.dir(savedList);
  return <div></div>;
};

export default SavedJobs;
