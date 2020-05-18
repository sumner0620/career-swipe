import React, { useEffect } from "react";

const GoogleAPI = () => {
    const ENDPOINT =
        "https://jobs.googleapis.com/v4beta1/{parent=projects/*}/jobs";
    useEffect(() => {
        useGoogleApi();
    }, []);
    const useGoogleApi = () => {
        fetch(ENDPOINT, { mode: "no-cors" })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log("error" + error)
            });
    };
    return (
        <div>
            <Body />
        </div>
    );
};

export default GoogleAPI