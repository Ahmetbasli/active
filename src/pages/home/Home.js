import React from "react";
//redux imports
import { useSelector } from "react-redux";
// language imports
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("homeText")}</p>
    </div>
  );
};

export default Home;
