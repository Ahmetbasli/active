import React from "react";
import { useDispatch } from "react-redux";
import { adjustWhichPage } from "../../../slices/userSlice";
import { useHistory } from "react-router-dom";
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

  const navigateToContactPage = () => {
    history.push("/contact");
    dispatch(adjustWhichPage("contact"));
  };
  return (
    <div className="rightside">
      <div className="buttons">
        <Button color="inherit">{t("login")} </Button>

        <Button color="inherit" onClick={navigateToContactPage}>
          {t("contactButton")}
        </Button>
      </div>
      <Dropdown />
    </div>
  );
};

export default Rightside;
