// import dependencies
import React, { useState, useContext, useEffect } from "react";
import { JobListContext } from "../../contexts/JobListContext";
import { fetchJobListings } from "../../api";

// import components
import Listing from "../listing/Listing";

// import styles
import "../../components/listing/styles/_listing.scss";

const JobFeed = () => {
  const [loading, setLoading] = useState(false);
  const [jobListingsState, jobListingsDispatch] = useContext(JobListContext);
  const [jobListingMarkup, setJobListingMarkup] = useState();
  useEffect(() => {
    setLoading(true);
    setJobListingMarkup(
      jobListingsState.jobList.map((job, index) => {
        return <Listing key={index} {...job} />;
      })
    );
    setLoading(false);
  }, []);
  return (
    <section id="job-feed" className="item_3_4">
      <h2 className="flex row full afc jfc">Job Feed</h2>
      {jobListingMarkup}
    </section>
  );
};

export default JobFeed;
