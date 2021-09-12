import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// store
import {
  adjustWhichPage,
  selectUser,
  setUser,
  toggleIsLoginModalOpen,
} from "../../../slices/userSlice";
// components
import Modal from "./modal/Modal";
import Dropdown from "./dropdown/Dropdown";
// language
import { useTranslation } from "react-i18next";
//styles
import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import LogOut from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./Rightside.module.css";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "#212121",
  },
  black: {
    color: "#212121",
  },
}));
const Rightside = () => {
  // language
  const { t } = useTranslation();
  //styles
  const classes = useStyles();
  // react-hooks
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const history = useHistory();
  const [IsMenuShown, setIsMenuShown] = useState(false);

  // functions
  const navigateToContactPage = () => {
    history.push("/contact");
    dispatch(adjustWhichPage("contact"));
  };

  const openModal = () => {
    dispatch(toggleIsLoginModalOpen(true));
  };

  const makeUserLogout = () => {
    dispatch(setUser(null));
    sessionStorage.removeItem("user");
    setIsMenuShown(false);
  };

  return (
    <div className={styles.rightside}>
      <div className={styles.buttons}>
        {!userInfo ? (
          <Button
            className={classes.button}
            onClick={openModal}
            color="inherit"
          >
            {t("login")}
          </Button>
        ) : (
          <div
            className={styles.name}
            onMouseEnter={() => setIsMenuShown(true)}
            onMouseLeave={() => setIsMenuShown(false)}
          >
            <p>{userInfo.name}</p>
            <ExpandMoreIcon />
          </div>
        )}
        {userInfo && IsMenuShown && (
          <div
            onMouseEnter={() => setIsMenuShown(true)}
            onMouseLeave={() => setIsMenuShown(false)}
            className={styles.popOver}
          >
            <ListItem>
              <ListItemIcon>
                <EmailIcon className={classes.black} />
              </ListItemIcon>
              <ListItemText
                className={classes.black}
                primary={userInfo.email}
              />
            </ListItem>
            <ListItem button className={classes.black} onClick={makeUserLogout}>
              <ListItemIcon>
                <LogOut className={classes.black} />
              </ListItemIcon>
              <ListItemText primary={t("logout")} />
            </ListItem>
          </div>
        )}

        <Button
          className={classes.button}
          color="inherit"
          onClick={navigateToContactPage}
        >
          {t("contactButton")}
        </Button>
      </div>
      <Dropdown />

      <Modal />
    </div>
  );
};

export default Rightside;
