import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//store
import { adjustWhichPage } from "../../../slices/userSlice";
// language imports
import { useTranslation } from "react-i18next";
//styles
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./RightSideHamburger.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  contactButton: {
    marginRight: "5px",
  },
});

const RightSİdeHamburger = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  const [IsHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const openHamburgerMenu = () => {
    setIsHamburgerMenuOpen(true);
  };

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false);
  };

  const navigateToContactPage = () => {
    history.push("/contact");
    dispatch(adjustWhichPage("contact"));
  };
  return (
    <div className="hamburger">
      <Button
        className={classes.contactButton}
        color="inherit"
        onClick={navigateToContactPage}
      >
        {t("contactButton")}
      </Button>
      <MenuIcon onClick={openHamburgerMenu} className="menuIcon" />
      <Drawer
        anchor="right"
        open={IsHamburgerMenuOpen}
        onClose={closeHamburgerMenu}
      >
        <List>
          <ListItem button>
            <ListItemIcon>hello</ListItemIcon>
            <ListItemText primary="deneme" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default RightSİdeHamburger;
