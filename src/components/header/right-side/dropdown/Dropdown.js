import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//store
import { selectLanguage, adjustLanguage } from "../../../../slices/userSlice";
//style imports
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//language imports
import i18n from "../../../../helpers/languageStore";
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
    color: "#fff",
  },
}));

export default function ControlledOpenSelect() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const siteLanguage = useSelector(selectLanguage);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    dispatch(adjustLanguage(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.label}
          id="demo-controlled-open-select-label"
        >
          Language
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
          <MenuItem value={"tr"}>Turkish</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
