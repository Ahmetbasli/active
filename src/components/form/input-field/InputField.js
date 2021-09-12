import React from "react";
//validation
import { Controller } from "react-hook-form";
//language
import { useTranslation } from "react-i18next";
//styles
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    width: "40%",
    backgroundColor: "#212121",
  },
  nameField: {
    borderColor: "green",
  },
  success: {
    "& .MuiFormLabel-root": {
      color: "green",
    },
    "& .MuiInput-underline:before": {
      borderColor: "green",
    },
    "& .MuiInput-underline:after": {
      borderColor: "green",
    },
  },
}));
const InputField = ({ control, name, isSubmitButtonClicked, errors }) => {
  //styles
  const classes = useStyles();
  //language
  const { t } = useTranslation();
  return (
    <>
      <Controller
        defaultValue=""
        name={name}
        control={control}
        render={({ field }) => {
          const successStyle =
            isSubmitButtonClicked && !!!errors[name] ? classes.success : "";
          const isNameEqualMessage = name === "message";
          return (
            <TextField
              {...field}
              className={successStyle}
              label={t(name) + (isNameEqualMessage ? "" : `*${t("required")}`)}
              error={!!errors[name]}
              helperText={errors[name] ? t(`${name}Err`) : " "}
              multiline={isNameEqualMessage}
              rows={isNameEqualMessage ? 4 : 1}
            />
          );
        }}
      />
    </>
  );
};

export default InputField;
