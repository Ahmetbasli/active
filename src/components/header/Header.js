import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//store
import { selectLanguage } from "../../slices/userSlice";
//components
import Rightside from "./right-side/Rightside";
import Leftside from "./left-side/Leftside";
import RightSideHamburger from "./right-side-hamburger/RightSideHamburger";

//styles
import AppBar from "@material-ui/core/AppBar";
import "./Header.css";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const siteLanguage = useSelector(selectLanguage);

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
