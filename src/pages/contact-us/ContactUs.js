import React from "react";
// components
import Form from "../../components/form/Form";
// language
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("contactPageName")}</h1>
      <Form />
    </div>
  );
};

export default ContactUs;
