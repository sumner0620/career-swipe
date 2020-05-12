import React from "React"
import faker from 'faker'

// import components
import { GithubAPI } from '../sources/github.js'
import { Listing } from '../listing/Listing.js'

const jobList = [];
const buildJobListing = () => {
    return {
        name: faker.name.jobTitle(),
        company: faker.company.companyName(),
        location: faker.address.city(),
        description: faker.lorem.paragraph(),
        salary: faker.random.number({ min: 30000, max: 200000 }),
        date: faker.date.recent()
    }
}

for (let i = 0; i < 25; i++) {
    jobList.push(buildJobListing())
}

const JobFeed = () => {
    return (
        <section id="job-feed">Job Feed
        {
                jobList.map(job => {
                    return <Listing key={job.name} {...job} />
                })
            }
        </section>
    )
}

export default JobFeed