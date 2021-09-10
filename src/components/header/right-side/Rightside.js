import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adjustWhichPage,
  selectUser,
  toggleIsLoginModalOpen,
} from "../../../slices/userSlice";
import { useHistory } from "react-router-dom";
import Modal from "./modal/Modal";
// language imports
import { useTranslation } from "react-i18next";
import Dropdown from "./dropdown/Dropdown";
//styles
import Button from "@material-ui/core/Button";
import "./Rightside.css";

const Rightside = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const userInfo = useSelector(selectUser);

  const navigateToContactPage = () => {
    history.push("/contact");
    dispatch(adjustWhichPage("contact"));
  };

  const openModal = () => {
    dispatch(toggleIsLoginModalOpen(true));
  };

  return (
    <div className="rightside">
      <div className="buttons">
        <Button onClick={!userInfo && openModal} color="inherit">
          {!userInfo ? t("login") : userInfo.name}
        </Button>

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
