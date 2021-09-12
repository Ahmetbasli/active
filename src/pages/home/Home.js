import React from "react";
// language
import { useTranslation } from "react-i18next";
//styles
import styles from "./Home.module.css";

const Home = () => {
  // language
  const { t } = useTranslation();
  return (
    <div className={styles.home}>
      <h1>{t("homeTitle")}</h1>
      <p>{t("homeText")}</p>
    </div>
  );
};

export default Home;
