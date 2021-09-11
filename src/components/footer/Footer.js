import React from "react";
// language
import { useTranslation } from "react-i18next";
// styles
import styles from "./Footer.module.css";

const Footer = () => {
  // language
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <h2>{t("footer")}</h2>
    </div>
  );
};

export default Footer;
