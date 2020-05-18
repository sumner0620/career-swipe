// import dependencies
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { SavedContext } from "../../contexts/SavedContext";

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
  const save = jobDetails => {
    dispatch({
      type: "SAVE_JOB",
      payload: {
        jobID: jobDetails.jobID,
        name: jobDetails.name,
        company: jobDetails.company,
        location: jobDetails.location,
        salary: jobDetails.salary
      }
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
    console.log("Saved Jobs:", state);
  };
  const reject = () => {
    console.log("rejected", props.jobID);
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
        <button className="item_1_2 reject" onClick={reject}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className="item_1_2 save" onClick={saveThisJob}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </footer>
    </section>
  );
};

export default Listing;
