// import dependencies
import React from "react";

// import components
import { GithubAPI } from "../sources/github.js";
import Listing from "../listing/Listing.js";

// import ultilities
import { formatNumber } from "../../utils/numbers.js";

// import styles
import "../../components/listing/styles/_listing.scss";

/**
 * 
 Dummy data constructor, this is temporary and should never be added to production copies
 * 
 *  */

import faker from "faker";
const jobList = [];
const buildJobListing = () => {
  return {
    jobID: faker.random.number({ min: 0, max: 9999999999 }),
    name: faker.name.jobTitle(),
    company: faker.company.companyName(),
    location: faker.address.city(),
    skills: [
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word()
    ],
    description: faker.lorem.paragraph(),
    salary: formatNumber(faker.random.number({ min: 30000, max: 200000 })),
    date: faker.date.month() + " " + faker.random.number({ min: 1, max: 28 })
  };
};

for (let i = 0; i < 25; i++) {
  jobList.push(buildJobListing());
}

/**
 * End dummy data
 */

const JobFeed = () => {
  return (
    <section id="job-feed" className="item_3_4">
      <h2 className="flex row full afc jfc">Job Feed</h2>
      {jobList.map(job => {
        return <Listing key={job.name} {...job} />;
      })}
    </section>
  );
};

export default JobFeed;
