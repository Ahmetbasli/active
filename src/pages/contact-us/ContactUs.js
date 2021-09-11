import React from "react";
// language
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("contactPageName")}</h1>
    </div>
  );
};

export default ContactUs;
