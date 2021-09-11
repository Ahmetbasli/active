import React from "react";
// components
import Form from "../../components/form/Form";
// language
import { useTranslation } from "react-i18next";
//styles
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t("contactPageName")}</h1>
      <Form />
    </div>
  );
};

export default ContactUs;
