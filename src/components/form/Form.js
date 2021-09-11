import React, { useRef, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
//store
import { selectLanguage } from "../../slices/userSlice";
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
}));
const Form = ({ countries }) => {
  const siteLanguage = useSelector(selectLanguage);
  //language
  const { t } = useTranslation();
  const formattedCountries = countries.map((country) => ({
    id: country.id,
    name: t(country.id),
  }));

  const [selectedCountry, setSelectedCountry] = useState();
  const [countryFieldErr, setCountryFieldErr] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  useEffect(() => {
    setSelectedCountry(null);
  }, [siteLanguage]);
  /* 
  useEffect(() => {
    if (selectedCountry) {
      set;
    }
  }, [selectedCountry]); */

  //validation
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  //styles
  const classes = useStyles();
  // functions

  const formSubmitHandler = (data) => {
    setIsSubmitClicked(true);
    if (!selectedCountry) {
      setCountryFieldErr(true);
      return null;
    }

    const formatedFormData = { ...data, country: selectedCountry };
  };

  const handleCountryFieldChange = (event, newValue) => {
    if (isSubmitClicked) setCountryFieldErr(!!!newValue);

    setSelectedCountry(newValue);
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

        <Autocomplete
          options={formattedCountries}
          id="controlled-demo"
          value={selectedCountry ? selectedCountry : null}
          onChange={(event, newValue) => {
            handleCountryFieldChange(event, newValue);
          }}
          getOptionLabel={(option) => option?.name}
          getOptionSelected={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField
              className={classes.countryField}
              {...params}
              variant="filled"
              label={t("countryName")}
              error={countryFieldErr}
              helperText={countryFieldErr ? "error " : " "}
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
