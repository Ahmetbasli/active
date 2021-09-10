import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//styles
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import "./RightSideHamburger.css";

const RightSİdeHamburger = () => {
  const [IsHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const openHamburgerMenu = () => {
    setIsHamburgerMenuOpen(true);
  };

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false);
  };
  return (
    <div className="hamburger">
      <MenuIcon onClick={openHamburgerMenu} className="menuIcon" />
      <Drawer
        anchor="right"
        open={IsHamburgerMenuOpen}
        onClose={closeHamburgerMenu}
      >
        <h2>hello</h2>
      </Drawer>
    </div>
  );
};

export default RightSİdeHamburger;
