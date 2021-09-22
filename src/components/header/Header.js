import React, { useEffect, useState } from "react";
// components
import Rightside from "./right-side/Rightside";
import Leftside from "./left-side/Leftside";
import RightSideHamburger from "./right-side-hamburger/RightSideHamburger";
// styles
import AppBar from "@material-ui/core/AppBar";
import styles from "./Header.module.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  submitButton: {
    backgroundColor: "white",
  },
}));
const Header = () => {
  // react-hooks
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //styles
  const classes = useStyles();
  // functions
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      // prevent memory leak
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <div className={styles.header}>
      <AppBar
        className={classes.submitButton}
        color="default"
        position="static"
      >
        <div className={styles.toolbar}>
          <Leftside />
          {screenWidth > 778 ? <Rightside /> : <RightSideHamburger />}
        </div>
      </AppBar>
    </div>
  );
};
export default Header;
