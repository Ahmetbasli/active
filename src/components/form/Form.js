import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//validation
import { contactFormSchema } from "../../validations/contactForm";
//styles
import styles from "./Form.module.css";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    width: "40%",
  },
}));
const Form = () => {
  //validation
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  console.log(errors);
  //styles
  const classes = useStyles();
  // functions
  const formSubmitHandler = (data) => {
    console.log("Form data is ", data);
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
          defaultValue="ahmet@gmdsömgsd"
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
          control={control}
          defaultValue="paki"
          render={({ field }) => (
            <TextField
              {...field}
              label="country name"
              variant="filled"
              error={!!errors.country}
              helperText={errors.country ? errors.country?.message : " "}
            />
          )}
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
              defaultValue="message"
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
