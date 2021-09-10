import React from "react";
import { useDispatch } from "react-redux";
import { adjustWhichPage } from "../../../slices/userSlice";
import { useHistory } from "react-router-dom";
// language imports
import { useTranslation } from "react-i18next";
import Dropdown from "./dropdown/Dropdown";
//styles
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Rightside.css";
const Rightside = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const navigateToContactPage = () => {
    history.push("/contact");
    dispatch(adjustWhichPage("contact"));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rightside">
      <div className="buttons">
        <Button onClick={openModal} color="inherit">
          {t("login")}{" "}
        </Button>

        <Button color="inherit" onClick={navigateToContactPage}>
          {t("contactButton")}
        </Button>
      </div>
      <Dropdown />

      {/* modal form */}
      <Dialog
        open={isModalOpen}
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="emailAdress"
            label={t("emailAdress")}
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label={t("password")}
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            {t("cancel")}
          </Button>
          <Button onClick={closeModal} color="primary">
            {t("login")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Rightside;
