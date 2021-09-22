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
// language
import i18n from "../../../helpers/languageStore";
import { useTranslation } from "react-i18next";
// styles
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LoginIcon from "@material-ui/icons/VpnKey";
import { makeStyles } from "@material-ui/core/styles";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PersonIcon from "@material-ui/icons/Person";
import LogOut from "@material-ui/icons/ExitToApp";
import styles from "./RightSideHamburger.module.css";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  menuICon: {
    cursor: "default",
  },
  contactButton: {
    marginRight: "5px",
  },
});

const RightSİdeHamburger = () => {
  // styles
  const classes = useStyles();
  // language
  const { t } = useTranslation();
  // react-hooks
  const dispatch = useDispatch();
  const siteLanguage = useSelector(selectLanguage);
  const userInfo = useSelector(selectUser);
  const history = useHistory();
  const [IsHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  // functions
  const openHamburgerMenu = () => {
    setIsHamburgerMenuOpen(true);
  };

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false);
  };

  const navigateToRelevantPage = (buttonName) => {
    const pageName = buttonName.substring(0, buttonName.length - 6);
    history.push(`/${pageName}`);
    dispatch(adjustWhichPage(pageName));
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
    <div className={styles.hamburger}>
      <Button color="inherit" onClick={openHamburgerMenu}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="right"
        open={IsHamburgerMenuOpen}
        onClose={closeHamburgerMenu}
      >
        <List className={classes.list}>
          {["Scorp", "contactButton", "thirdPageButton"].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={
                index === 0
                  ? navigateToHomePage
                  : () => navigateToRelevantPage(text)
              }
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
