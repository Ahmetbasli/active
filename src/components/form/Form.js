import React, { useMemo, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
//store
import { selectLanguage, selectUser } from "../../slices/userSlice";
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
const Form = ({ countries }) => {
  //styles
  const classes = useStyles();
  //language
  const { t } = useTranslation();
  //validation
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  // react-hooks
  const formattedCountries = useMemo(
    () =>
      countries.map((country) => ({
        id: country.id,
        name: t(country.id),
      })),
    [countries, t]
  );
  const [selectedCountry, setSelectedCountry] = useState();
  const [countryFieldErr, setCountryFieldErr] = useState(false);
  const [IsSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const siteLanguage = useSelector(selectLanguage);
  const userInfo = useSelector(selectUser);
  // functions
  useEffect(() => {
    if (userInfo) {
      setValue("name", userInfo.name, { shouldValidate: true });
      setValue("email", userInfo.email, { shouldValidate: true });
      setSelectedCountry(null);
    } else {
      setValue("name", "", {
        shouldValidate: IsSubmitButtonClicked ? true : false,
      });
      setValue("email", "", {
        shouldValidate: IsSubmitButtonClicked ? true : false,
      });
      setSelectedCountry(null);
    }
  }, [userInfo]);

  useEffect(() => {
    setSelectedCountry(null);
  }, [siteLanguage]);

  const handleCountryFieldChange = (event, newValue) => {
    if (IsSubmitButtonClicked) setCountryFieldErr(!!!newValue);
    setSelectedCountry(newValue);
  };

  const formSubmitHandler = (data) => {
    const formatedFormData = { ...data, country: selectedCountry };
    console.log(formatedFormData);
  };
  const handleSubmitButtonClicked = () => {
    setIsSubmitButtonClicked(true);
    if (!selectedCountry) {
      setCountryFieldErr(true);
      return null;
    }
  };
  console.log(errors.title);
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(formSubmitHandler)} className={styles.form}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => {
            const successStyle =
              IsSubmitButtonClicked && !!!errors.title ? classes.success : "";
            return (
              <TextField
                {...field}
                className={successStyle}
                label={t("title") + "*"}
                error={!!errors.title}
                helperText={errors.title ? t("titleErr") : " "}
              />
            );
          }}
        />
        <Controller
          name="name"
          defaultValue=""
          control={control}
          render={({ field }) => {
            const successStyle =
              IsSubmitButtonClicked && !!!errors.name ? classes.success : "";
            return (
              <TextField
                {...field}
                className={successStyle}
                label={t("name") + "*"}
                error={!!errors.name}
                helperText={errors.name ? t("nameErr") : " "}
              />
            );
          }}
        />
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field }) => {
            const successStyle =
              IsSubmitButtonClicked && !!!errors.email ? classes.success : "";
            return (
              <TextField
                {...field}
                className={successStyle}
                label={t("email") + "*"}
                error={!!errors.email}
                helperText={errors.email ? t("emailErr") : " "}
              />
            );
          }}
        />
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field }) => {
            const successStyle =
              IsSubmitButtonClicked && !!!errors.phoneNumber
                ? classes.success
                : "";
            return (
              <TextField
                className={successStyle}
                {...field}
                label={t("phoneNumber") + "*"}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber ? t("phoneErr") : " "}
              />
            );
          }}
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
          renderInput={(params) => {
            const successStyle =
              IsSubmitButtonClicked && !!!countryFieldErr
                ? classes.success
                : "";
            return (
              <TextField
                className={successStyle}
                {...params}
                label={t("countryName") + "*"}
                error={countryFieldErr}
                helperText={countryFieldErr ? t("countryErr") : " "}
              />
            );
          }}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => {
            const successStyle =
              IsSubmitButtonClicked && !!!errors.message ? classes.success : "";
            return (
              <TextField
                className={successStyle}
                {...field}
                label={t("message")}
                error={!!errors.country}
                helperText={errors.country ? t("emailErr") : " "}
                multiline
                rows={4}
              />
            );
          }}
        />

        <Button
          className={classes.submitButton}
          type="submit"
          label="Submit"
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleSubmitButtonClicked}
        >
          {t("send")}
        </Button>
      </form>
    </div>
  );
};

export default Form;
