// import dependencies
import React from "react";

const Requirements = props => {
  let i = 0;
  let reqList = props.skills.map(req => {
    i++;
    return <li key={req + props.jobID + i}>{req}</li>;
  });
  return (
    <div className="skills item_1_2">
      <h4>Required Skills</h4>
      <ul>{reqList}</ul>
    </div>
  );
};

export default Requirements;
