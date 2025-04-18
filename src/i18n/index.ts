import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from '../locales/en/en.json'
import esLang from '../locales/es/es.json'
import argFlag from '../assets/argFlag.png';
import usaFlag from '../assets/usaFlag.png';

const resources = {
  en: {
    translation: enLang
  },
  es: {
    translation: esLang
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

  //se utiliza un mapa para hacerlo extensible a nuevos idiomas en el futuro
export const languageMap = new Map<string, { label: string; flag: string }>([
  ['es', { label: i18n.t('spanish'), flag: argFlag }],
  ['en', { label: i18n.t('english'), flag: usaFlag }],
]);
export default i18n;