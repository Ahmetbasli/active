import React, { useEffect, useState } from "react";
//components
import Rightside from "./right-side/Rightside";
import Leftside from "./left-side/Leftside";
import RightSideHamburger from "./right-side-hamburger/RİghtSİdeHamburger";
//styles
import AppBar from "@material-ui/core/AppBar";
import "./Header.css";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <div className="header">
      <AppBar position="static">
        <div className="header__toolbar">
          <Leftside />
          {screenWidth > 768 ? <Rightside /> : <RightSideHamburger />}
        </div>
      </AppBar>
    </div>
  );
};
export default Header;
