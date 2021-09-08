import React from "react";
import { useDispatch, useSelector } from "react-redux";
// slices
import { adjustWhichPage, selectWhichPage } from "../../../slices/userSlice";
import { useHistory } from "react-router-dom";
// language imports
import { useTranslation } from "react-i18next";
//styles
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./Leftside.css";

const Leftside = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const page = useSelector(selectWhichPage);
  const { t } = useTranslation();

  const navigateToHomePage = () => {
    history.push("/");
    dispatch(adjustWhichPage("home"));
  };

  return (
    <div className="leftside">
      <IconButton
        onClick={navigateToHomePage}
        edge="start"
        color="primary"
        aria-label="menu"
      >
        <img className="icon" src="images/myLogo.png" alt="logo" />
      </IconButton>
      <Typography variant="h6">
        {page !== "home" ? t("contactPageName") : "Scorp"}
      </Typography>
    </div>
  );
};

export default Leftside;
