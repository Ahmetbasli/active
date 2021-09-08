import React from "react";

//styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import Rightside from "./right-side/Rightside";
import Leftside from "./left-side/Leftside";

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static">
        <div className="header__toolbar">
          <Leftside />
          <Rightside />
        </div>
      </AppBar>
    </div>
  );
};
export default Header;
