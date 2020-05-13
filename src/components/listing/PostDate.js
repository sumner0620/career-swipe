// import dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const PostDate = props => {
  return (
    <time>
      <FontAwesomeIcon icon={faCalendarAlt} />
      {props.date}
    </time>
  );
};

export default PostDate;
