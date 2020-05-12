// import dependencies
import React from "React";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

export const Company = props => {
  return (
    <aside>
      <FontAwesomeIcon icon={faBuilding} />
      {props.company}
    </aside>
  );
};
