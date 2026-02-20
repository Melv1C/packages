/**
 * Internal i18n instance for Storybook development.
 * Not exported from the library - consumers should use
 * LocaleProvider or TranslationProvider instead.
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as locales from './locales';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        ui: locales.en,
      },
      fr: {
        ui: locales.fr,
      },
      de: {
        ui: locales.de,
      },
      es: {
        ui: locales.es,
      },
      it: {
        ui: locales.it,
      },
      nl: {
        ui: locales.nl,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
