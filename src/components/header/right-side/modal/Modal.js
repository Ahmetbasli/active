import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import {
  selectIsLoginModalOpen,
  setUser,
  toggleIsLoginModalOpen,
} from "../../../../slices/userSlice";
//components
import InputField from "../../../form/input-field/InputField";
import DropDown from "../../../header/right-side/dropdown/Dropdown";
//validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../../validations/contactForm";
// language
import { useTranslation } from "react-i18next";
// styles
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    flexDirection: "column",
  },
}));
const Modal = () => {
  // styles
  const classes = useStyles();
  // language
  const { t } = useTranslation();
  // validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  // react-hooks
  const IsLoginModalOpen = useSelector(selectIsLoginModalOpen);
  const dispatch = useDispatch();
  // functions
  const closeModal = () => {
    dispatch(toggleIsLoginModalOpen(false));
  };

  const handleFormSubmit = (userInfo) => {
    dispatch(setUser(userInfo));
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    dispatch(toggleIsLoginModalOpen(false));
  };

  useEffect(() => {
    reset();
  }, [IsLoginModalOpen]);

  return (
    <>
      <Dialog
        disableBackdropClick
        fullWidth
        open={IsLoginModalOpen}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <DialogTitle id="form-dialog-title">{t("login")}</DialogTitle>
          <DialogContent>
            <div className={classes.wrap}>
              {["name", "email", "password"].map((name) => (
                <InputField
                  clasName={classes.wrap}
                  key={name}
                  control={control}
                  name={name}
                  errors={errors}
                />
              ))}
            </div>
            <DropDown />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="primary">
              {t("cancel")}
            </Button>
            <Button type="submit" color="primary">
              {t("login")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Modal;
