import React, { createContext, useReducer } from "react";
import { fetchJobListings } from "../api";

const initialState = { jobList: [] };
const JobListContext = createContext();

const JobListReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_JOB":
      return {
        jobList: state.jobList.filter(
          jobListing => jobListing.id !== action.payload
        )
      };
    default:
      throw new Error();
  }
};
const JobListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobListReducer, initialState);

  return (
    <JobListReducer.Provider value={[state, dispatch]}>
      {children}
    </JobListReducer.Provider>
  );
};

export { JobListContext, JobListReducer, JobListProvider };
