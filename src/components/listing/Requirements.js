// import dependencies
import React from "React"

export const Requirements = (...props) => {

    let reqList = props.reqs.map(req => {
        return <li>{req}</li>
    })
    return (
        <ul>
            {reqList}
        </ul>
    )
}