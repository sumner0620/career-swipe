// import dependencies
import React, { useState } from "react";
import { fetchJobListings } from "../../api";

// import components
import Listing from "../listing/Listing";

// import styles
import "../../components/listing/styles/_listing.scss";

const JobFeed = () => {
  const [loading, setLoading] = React.useState(false);
  const [jobListings, setJobListings] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    fetchJobListings()
      .then(r => r.json())
      .then(({ data }) => {
        setJobListings(data);
        setLoading(false);
      });
  }, []);
  if (loading) return null;
  return (
    <section id="job-feed" className="item_3_4">
      <h2 className="flex row full afc jfc">Job Feed</h2>
      {jobListings.map((job, index) => {
        return <Listing key={index} {...job} />;
      })}
    </section>
  );
};

export default JobFeed;
