import React from "React";

// import components
import { GithubAPI } from '../sources/github.js'
import { Listing } from '../listing/Listing.js'

const JobFeed = () => {
    return (
        <section id="job-feed">Job Feed
        <Listing />
            {/* <GithubAPI /> */}
        </section>
    )
}

export default JobFeed