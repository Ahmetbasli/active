import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
  homeText: "home text",
  contactPageName: "Contact Page",
  contactButton: "Contact Us",
  login: "login",
};

const translationsTr = {
  homeText: "Ana sayfa yazısı",
  contactPageName: "İletişim sayfası",
  contactButton: "İletişime geç",
  login: "Giriş yap",
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
