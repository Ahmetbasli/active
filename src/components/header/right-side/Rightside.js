import React from "react";
import Button from "@material-ui/core/Button";
import Dropdown from "./dropdown/Dropdown";
import "./Rightside.css";
const Rightside = () => {
  return (
    <div className="rightside">
      <Button color="inherit">ContactUs </Button>
      <Button color="inherit">Sign In </Button>
      <Dropdown />
    </div>
  );
};

export default Rightside;
