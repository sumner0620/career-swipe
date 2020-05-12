import React, { useEffect } from "react";

export const GithubAPI = () => {
    const ENDPOINT =
        "https://jobs.github.com/positions.json?description=python&location=new+york";
    useEffect(() => {
        useGithubApi();
    }, []);
    const useGithubApi = () => {
        fetch(ENDPOINT)
            .then(response => response.json())
            .then(responseText => {
                console.log(responseText)
            })
    };
    return (
        <div>
        </div>
    );
};