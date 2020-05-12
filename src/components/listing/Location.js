// import dependencies
import React from "React";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

export const Location = props => {
  return (
    <p className="location">
      <FontAwesomeIcon icon={faGlobeAmericas} />
      {props.location}
    </p>
  );
};
