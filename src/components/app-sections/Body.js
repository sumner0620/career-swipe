// import dependencies
import React from "React";

// import components
import Header from './Header.js'
import Footer from './Footer.js'
import JobFeed from './JobFeed.js'
import Sidebar from './Sidebar.js'

export const Body = () => {
    return (
        <main>
            <Header />
            <div className="middle">
                <JobFeed />
                <Sidebar />
            </div>
            <Footer />
        </main>
    )
}