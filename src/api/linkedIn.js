import React, { useEffect } from "react";
import times from "lodash/times";
import faker from "faker";
import { formatNumber } from "../utils/numbers";

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

const buildJobListings = amt => times(amt, buildJobListing);

export const fetchJobListings = options => {
  const data = buildJobListings(25);

  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ data })
  });
};
