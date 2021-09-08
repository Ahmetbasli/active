import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Dropdown from "./dropdown/Dropdown";
import "./Rightside.css";
const Rightside = () => {
  return (
    <div className="rightside">
      <div className="buttons">
        <Button color="inherit">Login </Button>
        <Router>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </Router>
      </div>
      <Dropdown />
    </div>
  );
};

export default Rightside;
