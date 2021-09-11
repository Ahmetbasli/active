import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adjustWhichPage,
  selectUser,
  setUser,
  toggleIsLoginModalOpen,
} from "../../../slices/userSlice";
import { useHistory } from "react-router-dom";
import Modal from "./modal/Modal";
// language imports
import { useTranslation } from "react-i18next";
import Dropdown from "./dropdown/Dropdown";
//styles
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import LogOut from "@material-ui/icons/ExitToApp";

import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Rightside.css";

const Rightside = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const userInfo = useSelector(selectUser);
  const [IsMenuShown, setIsMenuShown] = useState(false);

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
    <div className="rightside">
      <div className="buttons">
        {!userInfo ? (
          <Button onClick={openModal} color="inherit">
            {t("login")}
          </Button>
        ) : (
          <div
            className="name"
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
            className="popOver"
          >
            <ListItem>
              <ListItemIcon>
                <EmailIcon className="emailIcon" />
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
