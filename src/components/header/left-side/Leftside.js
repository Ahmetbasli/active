import React from "react";
import { useDispatch, useSelector } from "react-redux";
// slices
import { adjustWhichPage, selectWhichPage } from "../../../slices/userSlice";
import { useHistory } from "react-router-dom";
//styles
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./Leftside.css";

const Leftside = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const page = useSelector(selectWhichPage);
  const navigateToHomePage = () => {
    history.push("/");
    dispatch(adjustWhichPage("home"));
  };
  return (
    <div className="leftside">
      <IconButton
        onClick={navigateToHomePage}
        edge="start"
        color="primary"
        aria-label="menu"
      >
        <img src="images/myLogo.png" alt="logo" />
      </IconButton>
      <Typography variant="h6">
        {page !== "home" ? "Contact page" : "Scorp"}
      </Typography>
    </div>
  );
};

export default Leftside;
