import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';

// Detect language from URL path
const detectLanguageFromPath = (): string => {
  const path = window.location.pathname;
  // Check if path starts with /fr/ or is exactly /fr
  if (path === '/fr' || path.startsWith('/fr/')) {
    return 'fr';
  }
  return 'en';
};

const detectedLanguage = detectLanguageFromPath();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    lng: detectedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
