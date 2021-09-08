import React from "react";
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
  const classes = useStyles();
  const [language, setLanguage] = React.useState("en");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
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
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"tr"}>Turkish</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
