import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsLoginModalOpen,
  setUser,
  toggleIsLoginModalOpen,
} from "../../../../slices/userSlice";

// language imports
import { useTranslation } from "react-i18next";
//styles
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Modal = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const IsLoginModalOpen = useSelector(selectIsLoginModalOpen);

  const dispatch = useDispatch();

  const nameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();

  const closeModal = () => {
    dispatch(toggleIsLoginModalOpen(false));
  };
  const sendFieldsData = () => {
    const userInfo = {
      name: nameField.current.value,
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
            autoFocus
            margin="dense"
            id="name"
            label={t("name")}
            type="text"
            fullWidth
            inputRef={nameField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="emailAdress"
            label={t("emailAdress")}
            type="email"
            inputRef={emailField}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
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
