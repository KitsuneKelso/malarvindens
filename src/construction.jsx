import React from "react";
import ReactDOM from "react-dom";
import { Router, hashHistory } from "react-router";

import NavBar from "./navbar.jsx";
import routes from "./routes.jsx";
import Footer from "./footer.jsx";

const ConstructionTitle = () => (
  <div>
    <div className="header">
      <NavBar />
    </div>
    <div className="content">
      <Router routes={routes} history={hashHistory} />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
);

ReactDOM.render(
  <ConstructionTitle name="Mälarvindens Kennel" />,
  document.getElementById("content")
);
