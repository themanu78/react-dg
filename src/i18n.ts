import i18n from "i18next";
import Backend  from 'i18next-http-backend';
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import gb from "../public/locales/gb/translation.json";
// import fr from "../public/locales/fr/translation.json";
// import de from "../public/locales/de/translation.json";


//export const resources = {
//  gb,
//  fr,
//  de,
//} as const;

// export const availableLanguages = Object.keys(resources)

i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(Backend )
.init({
  debug: true,
  // resources,
  defaultNS: "translation",
  fallbackLng: "gb",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },    
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },

});




export default i18n;