import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationPL from './locales/pl.json';

// all available translations
const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language
  interpolation: {
    escapeValue: false, // required for translation variable values
  },
});

export default i18n;
