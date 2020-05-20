// import dependencies
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { SavedContext } from "../../contexts/SavedContext";
import { JobListContext } from "../../contexts/JobListContext";

// import components
import JobTitle from "./JobTitle";
import Company from "./Company";
import PostDate from "./PostDate";
import Location from "./Location";
import Salary from "./Salary";
import Requirements from "./Requirements";
import Description from "./Description";

const Listing = props => {
  const [state, dispatch] = useContext(SavedContext);
  const [jobstate, jobdispatch] = useContext(JobListContext);
  const save = jobDetails => {
    dispatch({
      type: "SAVE_JOB",
      payload: { ...jobDetails }
    });
  };
  const saveThisJob = () => {
    const payload = {
      jobID: props.jobID,
      name: props.name,
      company: props.company,
      location: props.location,
      salary: props.salary
    };
    save(payload);
  };
  const reject = jobID => {
    jobdispatch({
      type: "DELETE_JOB",
      payload: jobID
    });
  };
  const rejectThisJob = () => {
    reject(props.jobID);
  };
  return (
    <section className="job-listing">
      <div className="container">
        <header className="job-heading flex col">
          <JobTitle title={props.name} />

          <div className="flex row afc jfsb job-meta">
            <Company company={props.company} />
            <Location location={props.location} />
          </div>
        </header>
        <div className="detail-section flex row afs jfs">
          <Requirements skills={props.skills} jobID={props.jobID} />
          <Description desc={props.description} />
        </div>
        <div className="job-footer flex row afc jfsb">
          <Salary salary={props.salary} />
          <PostDate date={props.date} />
        </div>
      </div>
      <footer className="flex row afc jfc">
        <button className="item_1_2 reject" onClick={rejectThisJob}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <button className="item_1_2 save" onClick={saveThisJob}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </footer>
    </section>
  );
};

export default Listing;
