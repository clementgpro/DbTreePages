import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

export const LanguageSuggestionBanner = () => {
  const { i18n } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [suggestedLang, setSuggestedLang] = useState<'en' | 'fr' | null>(null);

  useEffect(() => {
    // Check if user has already dismissed the banner
    const dismissed = localStorage.getItem('lang-suggestion-dismissed');
    if (dismissed) return;

    // Get browser language
    const browserLang = navigator.language.toLowerCase();
    const currentLang = i18n.language;

    // Suggest French if browser is French but current page is English
    if (browserLang.startsWith('fr') && currentLang === 'en') {
      setSuggestedLang('fr');
      setShowBanner(true);
    }
    // Suggest English if browser is English but current page is French
    else if (browserLang.startsWith('en') && currentLang === 'fr') {
      setSuggestedLang('en');
      setShowBanner(true);
    }
  }, [i18n.language]);

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('lang-suggestion-dismissed', 'true');
  };

  const handleAccept = () => {
    if (suggestedLang === 'fr') {
      window.location.href = '/fr/';
    } else {
      window.location.href = '/';
    }
  };

  if (!showBanner || !suggestedLang) return null;

  const messages = {
    en: {
      text: "It looks like you prefer English. Would you like to switch?",
      accept: "Switch to English",
      dismiss: "Stay on this page"
    },
    fr: {
      text: "Il semblerait que vous préfériez le français. Voulez-vous changer ?",
      accept: "Passer en français",
      dismiss: "Rester sur cette page"
    }
  };

  const message = messages[suggestedLang];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <p className="text-sm font-medium">{message.text}</p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="bg-white text-blue-600 px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            {message.accept}
          </button>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            {message.dismiss}
          </button>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
