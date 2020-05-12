// import dependencies
import React from "React";

export const Description = props => {
  return (
    <section className="jobDetails item_1_2">
      <summary>
        <h4>Position Details</h4>
      </summary>
      <details>
        <p>{props.desc}</p>
      </details>
    </section>
  );
};
