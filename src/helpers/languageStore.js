import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

const translationsEn = {
  homeText: "home text",
};

const translationsTr = {
  homeText: "Ana sayfa yazısı",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    tr: { translation: translationsTr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
