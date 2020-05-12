// import dependencies
import React, { useState } from "React";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

// import components
import { JobTitle } from "./JobTitle.js";
import { Company } from "./Company.js";
import { PostDate } from "./PostDate.js";
import { Location } from "./Location.js";
import { Salary } from "./Salary.js";
import { Requirements } from "./Requirements.js";
import { Description } from "./Description.js";

export const Listing = props => {
  const [viewed, setViewed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [rejected, setRejected] = useState(false);
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
        <button className="item_1_2 reject">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className="item_1_2 save">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </footer>
    </section>
  );
};
