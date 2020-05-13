import React, { useEffect } from "react";

const LinkedInAPI = () => {
  const ENDPOINT =
    "https://api.linkedin.com/v1/job-search?job-title=Software+Engineer";
  useEffect(() => {
    useLiApi();
  }, []);
  const useLiApi = () => {
    fetch(ENDPOINT, { mode: "no-cors" })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.log("error" + error)
      });
  };
  return <div></div>;
};

export default LinkedInAPI;
