// import dependencies
import React from "React";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export const Salary = props => {
  return (
    <aside className="salary">
      <FontAwesomeIcon icon={faDollarSign} />
      {props.salary}
    </aside>
  );
};
