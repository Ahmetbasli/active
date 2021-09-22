import React from "react";
// language
import { useTranslation } from "react-i18next";
//styles
import styles from "./ThirdPage.module.css";

const ThirdPage = () => {
  // language
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t("thirdPage")}</h1>
    </div>
  );
};

export default ThirdPage;
