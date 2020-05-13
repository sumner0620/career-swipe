// import dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Company = props => {
  return (
    <aside>
      <FontAwesomeIcon icon={faBuilding} />
      {props.company}
    </aside>
  );
};

export default Company;
