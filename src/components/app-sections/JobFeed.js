// import dependencies
import React from "React";
import faker from "faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import components
import { GithubAPI } from "../sources/github.js";
import { Listing } from "../listing/Listing.js";

// import ultilities
import { formatNumber } from "../../utils/numbers.js";

// import styles
import "../../components/listing/styles/_listing.scss";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
    source: faker.random.arrayElement([<FontAwesomeIcon icon={faLinkedin} />]),
    description: faker.lorem.paragraph(),
    salary: formatNumber(faker.random.number({ min: 30000, max: 200000 })),
    date: faker.date.month() + " " + faker.random.number({ min: 1, max: 28 })
  };
};

for (let i = 0; i < 25; i++) {
  jobList.push(buildJobListing());
}

const JobFeed = () => {
  return (
    <section id="job-feed">
      <h2 className="flex row full afc jfc">Job Feed</h2>
      {jobList.map(job => {
        return <Listing key={job.name} {...job} />;
      })}
    </section>
  );
};

export default JobFeed;
