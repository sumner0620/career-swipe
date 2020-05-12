// import dependencies
import React, { useState } from "React"
import faker from 'faker'

// import components
import { JobTitle } from './JobTitle.js'
import { Company } from './Company.js'
import { PostDate } from './PostDate.js'
import { Location } from './Location.js'
import { Salary } from './Salary.js'
import { Requirements } from './Requirements.js'
import { Description } from './Description.js'

export const Listing = (props) => {
    // const [viewed, setViewed] = useState(false)
    console.log(props)
    return (
        <section>
            <header className="job-heading flex col center">
                <JobTitle title={props.name} />

                <div className="flex row center">
                    <Company company={props.company} />
                    <Location location={props.location} />
                </div>
            </header>
            <div className="detail-section">
                {/* <Requirements reqs={faker.random.arrayElement()} /> */}
                <Description desc={props.description} />
            </div>
            <footer className="job-footer">
                <Salary salary={props.salary} />
                <PostDate date={props.date} />
            </footer>
        </section>
    )
}