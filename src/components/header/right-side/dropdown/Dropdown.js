import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { selectLanguage, adjustLanguage } from "../../../../slices/userSlice";
// language
import { useTranslation } from "react-i18next";
import i18n from "../../../../helpers/languageStore";
// style
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    color: "#212121",
  },
}));

export default function ControlledOpenSelect() {
  // styles
  const classes = useStyles();
  // language
  const { t } = useTranslation();
  // react-hooks
  const dispatch = useDispatch();
  const siteLanguage = useSelector(selectLanguage);
  const [open, setOpen] = useState(false);
  // functions
  const handleChange = (event) => {
    dispatch(adjustLanguage(event.target.value));
    i18n.changeLanguage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.label}
          id="demo-controlled-open-select-label"
        >
          {t("languageLabel")}
        </InputLabel>
        <Select
          className={classes.label}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={siteLanguage}
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"tr"}>Türkçe</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
