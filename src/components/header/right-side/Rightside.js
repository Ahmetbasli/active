import React from "react";
import { useDispatch } from "react-redux";
import { adjustWhichPage } from "../../../slices/userSlice";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Dropdown from "./dropdown/Dropdown";
import "./Rightside.css";
const Rightside = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const navigateToContactPage = () => {
    history.push("/contact");
    dispatch();
  };
  return (
    <div className="rightside">
      <div className="buttons">
        <Button color="inherit">Login </Button>

        <Button color="inherit" onClick={navigateToContactPage}>
          Contact Us
        </Button>
      </div>
      <Dropdown />
    </div>
  );
};

export default Rightside;
