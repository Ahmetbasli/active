import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import {
  selectIsLoginModalOpen,
  setUser,
  toggleIsLoginModalOpen,
  selectLanguage,
} from "../../../../slices/userSlice";
// language
import { useTranslation } from "react-i18next";
// styles
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: "24px",
  },
}));
const Modal = () => {
  // react-hooks
  const IsLoginModalOpen = useSelector(selectIsLoginModalOpen);
  const dispatch = useDispatch();
  const nameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  // language
  const { t } = useTranslation();
  // styles
  const classes = useStyles();

  // functions
  const closeModal = () => {
    dispatch(toggleIsLoginModalOpen(false));
  };

  const sendFieldsData = () => {
    const name = nameField.current.value;
    const userInfo = {
      name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
      email: emailField.current.value,
      password: passwordField.current.value,
    };
    dispatch(setUser(userInfo));
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    dispatch(toggleIsLoginModalOpen(false));
  };

  return (
    <div>
      <Dialog
        open={IsLoginModalOpen}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{t("login")}</DialogTitle>
        <DialogContent>
          <TextField
            className={classes.textField}
            margin="normal"
            id="name"
            label={t("name")}
            type="text"
            fullWidth
            inputRef={nameField}
          />
          <TextField
            className={classes.textField}
            margin="normal"
            id="emailAdress"
            label={t("emailAdress")}
            type="email"
            inputRef={emailField}
            fullWidth
          />
          <TextField
            className={classes.textField}
            margin="normal"
            id="password"
            label={t("password")}
            type="password"
            inputRef={passwordField}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            {t("cancel")}
          </Button>
          <Button onClick={sendFieldsData} color="primary">
            {t("login")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
