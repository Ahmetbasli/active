import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//validation
import { contactFormSchema } from "../../validations/contactForm";
//language
import { useTranslation } from "react-i18next";

//styles
import styles from "./Form.module.css";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    width: "40%",
  },
  countryField: {
    marginBottom: "20px",
  },
}));
const Form = ({ countries }) => {
  //validation
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  //language
  const { t } = useTranslation();
  //styles
  const classes = useStyles();
  // functions
  const formSubmitHandler = (data) => {
    console.log("ahmet");
    console.log("Form data is ", data);
  };

  const getOpObj = (option) => {
    if (!option._id) option = options.find((op) => op._id === option);
    return option;
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(formSubmitHandler)} className={styles.form}>
        <Controller
          name="name"
          control={control}
          defaultValue="ahmet"
          render={({ field }) => (
            <TextField
              {...field}
              label="name"
              variant="filled"
              error={!!errors.name}
              helperText={errors.name ? errors.name?.message : " "}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue="ahmet@gmdsömgsd.com"
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="filled"
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : " "}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue="432423"
          render={({ field }) => (
            <TextField
              {...field}
              label="phone number"
              variant="filled"
              error={!!errors.phoneNumber}
              helperText={
                errors.phoneNumber ? errors.phoneNumber?.message : " "
              }
            />
          )}
        />
        <Controller
          name="country"
          as={
            <Autocomplete
              options={options}
              getOptionLabel={(option) => getOpObj(option).name}
              getOptionSelected={(option, value) => {
                return option._id === getOpObj(value)._id;
              }}
              renderInput={(params) => (
                <TextField {...params} label="Country" />
              )}
            />
          }
          onChange={([, obj]) => getOpObj(obj)._id}
          control={control}
          defaultValue={options[0]}
        />

        <Controller
          name="message"
          control={control}
          defaultValue="message"
          render={({ field }) => (
            <TextField
              {...field}
              label="message"
              variant="filled"
              error={!!errors.country}
              helperText={errors.country ? errors.country?.message : " "}
              multiline
              rows={4}
            />
          )}
        />

        <Button
          className={classes.submitButton}
          type="submit"
          label="Submit"
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
