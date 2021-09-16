import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
//store
import { selectLanguage, selectUser } from "../../slices/userSlice";
//validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../validations/contactForm";
//language
import { useTranslation } from "react-i18next";
//styles
import styles from "./Form.module.css";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "./input-field/InputField";
import SnackBar from "./snackbar/SnackBar";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    width: "40%",
    backgroundColor: "#212121",
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
  // styles
  const classes = useStyles();
  // language
  const { t } = useTranslation();
  // validation
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
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const [isSubmitAchieved, setIsSubmitAchieved] = useState(false);
  const [isUserFillingFirstTime, setIsUserFillingFirstTime] = useState(true);
  const siteLanguage = useSelector(selectLanguage);
  const userInfo = useSelector(selectUser);
  // functions
  useEffect(() => {
    if (userInfo) {
      setValue("name", userInfo.name, { shouldValidate: true });
      setValue("email", userInfo.email, { shouldValidate: true });
    } else {
      setValue("name", "", {
        shouldValidate: isSubmitButtonClicked ? true : false,
      });
      setValue("email", "", {
        shouldValidate: isSubmitButtonClicked ? true : false,
      });
    }
  }, [userInfo]);

  useEffect(() => {
    setSelectedCountry(null);
  }, [siteLanguage]);

  const handleCountryFieldChange = (event, newValue) => {
    if (!isUserFillingFirstTime) {
      setCountryFieldErr(!!!newValue);
    }
    setSelectedCountry(newValue);
  };

  const handleSubmitButtonClicked = () => {
    setIsUserFillingFirstTime(false);
    setIsSubmitButtonClicked(true);
    if (!selectedCountry) {
      setCountryFieldErr(true);
    }
  };

  const handleFormSubmit = (data) => {
    if (!countryFieldErr) {
      const formatedFormData = { ...data, country: selectedCountry };
      setIsSubmitAchieved(true);
      console.log(formatedFormData);
    }
  };

  const handleSnackBarClose = (newState) => {
    setValue("title", "");
    if (!userInfo) {
      setValue("name", "");
      setValue("email", "");
    }
    setValue("phoneNumber", "");
    setSelectedCountry(null);
    setValue("message", "");
    setIsSubmitAchieved(newState);
    setIsSubmitButtonClicked(false);
  };
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        {["title", "name", "email", "phoneNumber"].map((name) => (
          <InputField
            key={name}
            control={control}
            name={name}
            isSubmitButtonClicked={isSubmitButtonClicked}
            errors={errors}
          />
        ))}
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
              isSubmitButtonClicked && !!!countryFieldErr
                ? classes.success
                : "";
            return (
              <TextField
                className={successStyle}
                {...params}
                label={t("countryName") + `*${t("required")}`}
                error={countryFieldErr}
                helperText={countryFieldErr ? t("countryErr") : " "}
              />
            );
          }}
        />
        <InputField
          control={control}
          name="message"
          isSubmitButtonClicked={isSubmitButtonClicked}
          errors={errors}
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
        {isSubmitAchieved && (
          <SnackBar
            open={isSubmitAchieved}
            handleSnackBarClose={handleSnackBarClose}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
