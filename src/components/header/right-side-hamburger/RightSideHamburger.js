import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//store
import {
  adjustLanguage,
  adjustWhichPage,
  selectLanguage,
  selectUser,
  toggleIsLoginModalOpen,
  setUser,
} from "../../../slices/userSlice";
//components
import Modal from "../right-side/modal/Modal";
// language imports
import i18n from "../../../helpers/languageStore";
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
import LoginIcon from "@material-ui/icons/VpnKey";
import { makeStyles } from "@material-ui/core/styles";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PersonIcon from "@material-ui/icons/Person";
import "./RightSideHamburger.css";
import LogOut from "@material-ui/icons/ExitToApp";

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
  const dispatch = useDispatch();
  const siteLanguage = useSelector(selectLanguage);
  const userInfo = useSelector(selectUser);
  const { t } = useTranslation();
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
    closeHamburgerMenu();
  };

  const navigateToHomePage = () => {
    history.push("/");
    dispatch(adjustWhichPage("home"));
    closeHamburgerMenu();
  };
  const changeSiteLanguage = () => {
    const newSiteLanguage = siteLanguage === "tr" ? "en" : "tr";
    dispatch(adjustLanguage(newSiteLanguage));
    i18n.changeLanguage(newSiteLanguage);
  };
  const openModal = () => {
    closeHamburgerMenu();
    dispatch(toggleIsLoginModalOpen(true));
  };
  const makeUserLogout = () => {
    dispatch(setUser(null));
    sessionStorage.removeItem("user");
  };
  return (
    <div className="hamburger">
      <MenuIcon onClick={openHamburgerMenu} className="menuIcon" />
      <Drawer
        anchor="right"
        open={IsHamburgerMenuOpen}
        onClose={closeHamburgerMenu}
      >
        <List className={classes.list}>
          {["Scorp", "contactButton"].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={index === 0 ? navigateToHomePage : navigateToContactPage}
            >
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> : <ContactMailIcon />}
              </ListItemIcon>
              <ListItemText primary={t(text)} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {!userInfo ? (
          <List>
            <ListItem button onClick={openModal}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary={t("login")} />
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={userInfo.name} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={userInfo.email} />
            </ListItem>
            <ListItem button onClick={makeUserLogout}>
              <ListItemIcon>
                <LogOut />
              </ListItemIcon>
              <ListItemText primary={t("logout")} />
            </ListItem>
          </List>
        )}
        <Divider />
        <List>
          <ListItem button onClick={changeSiteLanguage}>
            <ListItemIcon>
              <GTranslateIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                siteLanguage !== "tr" ? "Türkçe kullan" : " Use in English"
              }
            />
          </ListItem>
        </List>
        <Divider />
      </Drawer>

      <Modal />
    </div>
  );
};

export default RightSİdeHamburger;
