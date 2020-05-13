// import dependencies
import React from "react";
import ReactDOM from "react-dom";

// import components
import Body from "./components/app-sections/Body.js";
import Header from "./components/app-sections/Header.js";
import Footer from "./components/app-sections/Footer.js";
// import LinkedInAPI from "./components/sources/linkedIn.js";

// import styles
import "./base-styles/_normalize.scss";
import "./base-styles/_flex.scss";
import "./base-styles/_headings.scss";
import "./base-styles/_content.scss";
import "./components/app-sections/styles/_body.scss";

const App = () => {
  return (
    <div id="site-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app-body"));
