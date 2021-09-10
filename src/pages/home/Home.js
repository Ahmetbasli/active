import React from "react";
//redux imports
import { useSelector } from "react-redux";
// language imports
import { useTranslation } from "react-i18next";
//styles
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <h1>{t("homeTitle")}</h1>
      <p>{t("homeText")}</p>
    </div>
  );
};

export default Home;
