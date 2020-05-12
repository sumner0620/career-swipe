// import dependencies
import React from "React";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const PostDate = props => {
  return (
    <time>
      <FontAwesomeIcon icon={faCalendarAlt} />
      {props.date}
    </time>
  );
};
