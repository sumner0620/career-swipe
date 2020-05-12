// import dependencies
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// import components
import { Body } from "./components/app-sections/Body.js"
import Header from './components/app-sections/Header.js'
import Footer from './components/app-sections/Footer.js'
import Sidebar from './components/app-sections/Sidebar.js'
// import LinkedInAPI from "./components/sources/linkedIn.js";

// import styles
import './base-styles/_normalize.scss'
import './base-styles/_flex.scss'

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Sidebar />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app-body"));
