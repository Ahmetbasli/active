import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// store
import { selectLanguage } from "../../slices/userSlice";
// components
import Rightside from "./right-side/Rightside";
import Leftside from "./left-side/Leftside";
import RightSideHamburger from "./right-side-hamburger/RightSideHamburger";
// styles
import AppBar from "@material-ui/core/AppBar";
import styles from "./Header.module.css";

const Header = () => {
  // react-hooks
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      <AppBar position="static">
        <div className={styles.toolbar}>
          <Leftside />
          {screenWidth > 768 ? <Rightside /> : <RightSideHamburger />}
        </div>
      </AppBar>
    </div>
  );
};
export default Header;
