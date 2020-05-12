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
    // return <Salary salary={faker.random.number({ min: 30000, max: 200000 })} />
    return (
        <section>
            <header className="job-heading flex col center">
                <JobTitle title={faker.name.jobTitle()} />
                <div className="flex row center">
                    <Company company={faker.company.companyName()} />
                    <Location location={faker.address.city()} />
                </div>
            </header>
            <div className="detail-section">
                {/* <Requirements reqs={faker.random.arrayElement()} /> */}
                <Description desc={faker.lorem.paragraph()} />
            </div>
            <footer className="job-footer">
                <Salary salary={faker.random.number({ min: 30000, max: 200000 })} />
                <PostDate date={faker.date.recent()} />
            </footer>
        </section>
    )
}