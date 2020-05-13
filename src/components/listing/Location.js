// import dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const Location = props => {
  return (
    <p className="location">
      <FontAwesomeIcon icon={faGlobeAmericas} />
      {props.location}
    </p>
  );
};

export default Location;
