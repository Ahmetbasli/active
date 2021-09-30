import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// store
import { adjustWhichPage, selectWhichPage } from "../../../slices/userSlice";
// language
import { useTranslation } from "react-i18next";
// styles
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import styles from "./Leftside.module.css";

const Leftside = ({isDesktop}) => {
  // language
  const { t } = useTranslation();
  // react-hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const page = useSelector(selectWhichPage);

  // functions
  const navigateToHomePage = () => {
    history.push("/");
    dispatch(adjustWhichPage("home"));
  };

  return (
    <div className={styles.leftside}>
      {isDesktop && <IconButton
        onClick={navigateToHomePage}
        edge="start"
        color="primary"
        aria-label="menu"
      >
        <img className={styles.icon} src="images/scorp.jpg" alt="logo" />
      </IconButton>}
      <Typography noWrap variant="h6">
        {page !== "home" ? t(page) : "Scorp"}
      </Typography>
    </div>
  );
};

export default Leftside;
