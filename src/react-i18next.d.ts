import 'react-i18next';
// import gb from "../public/locales/gb/translation.json";

declare module "react-i18next" {
  interface CustomTypeOptions  {
    defaultNS: 'translation';
    // resources: typeof gb;
  }
}