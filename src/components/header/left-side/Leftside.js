import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./Leftside.css";

const Leftside = () => {
  return (
    <div className="leftside">
      <IconButton edge="start" color="primary" aria-label="menu">
        <img src="images/myLogo.png" alt="logo" />
      </IconButton>
      <Typography variant="h6">Scorp</Typography>
    </div>
  );
};

export default Leftside;
