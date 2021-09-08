import React from "react";
import { useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./Leftside.css";

const Leftside = () => {
  const history = useHistory();

  const navigateToHomePage = () => {
    history.push("/");
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
      <Typography variant="h6">Scorp</Typography>
    </div>
  );
};

export default Leftside;
