import React, { useEffect, useState } from "react";
//language
import { useTranslation } from "react-i18next";
//styles
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = ({ open: isOpen, handleSnackBarClose }) => {
  //language
  const { t } = useTranslation();
  // react-hooks
  const [open, setOpen] = useState(isOpen);
  const handleClose = (event, reason) => {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(isOpen);

    setTimeout(() => {
      handleSnackBarClose(false);
    }, 1300);
  }, [isOpen]);
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {t("formSubmit")}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
