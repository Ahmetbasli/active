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
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import LogOut from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./Rightside.module.css";

const Rightside = () => {
  // react-hooks
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const history = useHistory();
  const [IsMenuShown, setIsMenuShown] = useState(false);
  // language
  const { t } = useTranslation();

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
  };

  return (
    <div className={styles.rightside}>
      <div className={styles.buttons}>
        {!userInfo ? (
          <Button onClick={openModal} color="inherit">
            {t("login")}
          </Button>
        ) : (
          <div
            className={styles.name}
            onMouseEnter={() => setIsMenuShown(true)}
            onMouseLeave={() => setIsMenuShown(false)}
          >
            <h4>{userInfo.name}</h4>
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
                <EmailIcon className={styles.emailIcon} />
              </ListItemIcon>
              <ListItemText primary={userInfo.email} />
            </ListItem>
            <ListItem button onClick={makeUserLogout}>
              <ListItemIcon>
                <LogOut className="logoutIcon" />
              </ListItemIcon>
              <ListItemText primary={t("logout")} />
            </ListItem>
          </div>
        )}

        <Button color="inherit" onClick={navigateToContactPage}>
          {t("contactButton")}
        </Button>
      </div>
      <Dropdown />

      <Modal />
    </div>
  );
};

export default Rightside;
