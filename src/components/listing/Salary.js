// import dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Salary = props => {
  return (
    <aside className="salary">
      <FontAwesomeIcon icon={faDollarSign} />
      {props.salary}
    </aside>
  );
};

export default Salary;
