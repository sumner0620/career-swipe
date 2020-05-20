import React, { createContext, useReducer } from "react";
import { fetchJobListings } from "../api";

const initialData = () => {
  let jobListArray = [];
  fetchJobListings()
    .then(r => r.json())
    .then(({ data }) => {
      jobListArray.push(...data);
    });
  return jobListArray;
};

const initialJobState = { jobList: initialData() };
const JobListContext = createContext();

const JobListReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_JOB":
      console.log("deleting");
      return {
        jobList: state.jobList.filter(
          jobListing => jobListing.jobID !== action.payload
        )
      };
    default:
      throw new Error();
  }
};
const JobListProvider = ({ children }) => {
  const [jobState, jobDispatch] = useReducer(JobListReducer, initialJobState);

  return (
    <JobListContext.Provider value={[jobState, jobDispatch]}>
      {children}
    </JobListContext.Provider>
  );
};

export { JobListContext, JobListReducer, JobListProvider };
