import React from "react";
import { useSelector } from "react-redux";
// language
import { useTranslation } from "react-i18next";
//styles
import "./Home.css";

const Home = () => {
  // language
  const { t } = useTranslation();
  return (
    <div className="home">
      <h1>{t("homeTitle")}</h1>
      <p>{t("homeText")}</p>
    </div>
  );
};

export default Home;
