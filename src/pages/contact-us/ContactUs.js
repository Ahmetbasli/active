import React, { useEffect, useState } from "react";
// components
import Form from "../../components/form/Form";
//axios
import axios from "axios";
// language
import { useTranslation } from "react-i18next";
//styles
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  // react-hooks
  const [countries, setCountries] = useState([]);
  //functions
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("countryList.json");
        setCountries(response.data.countryList);
      } catch (err) {}
    })();
  }, []);

  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t("contactPageName")}</h1>
      <Form countries={countries} />
    </div>
  );
};

export default ContactUs;
