import i18n from "i18next";
import HttpBackend  from 'i18next-http-backend';
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import gb from "../public/locales/gb/translation.json";
// import fr from "../public/locales/fr/translation.json";
// import de from "../public/locales/de/translation.json";


// export const resources = {
//  gb,
// fr,
//  de,
//} as const;

// export const availableLanguages = Object.keys(resources)

const loadPath=`${process.env.REACT_APP_PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`

i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpBackend )
.init({
  debug: true,
  // resources,
  defaultNS: "translation",
  fallbackLng: "gb",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },    
  backend: {
    loadPath: loadPath,
  },

});

export default i18n;