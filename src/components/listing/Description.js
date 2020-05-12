// import dependencies
import React from "React"

export const Description = (props) => {
    return (
        <section id="jobDetails">
            <summary>Position Details</summary>
            <details>{props.desc}</details>
        </section>
    )
}