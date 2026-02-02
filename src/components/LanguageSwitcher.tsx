import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const switchLanguage = (langCode: string) => {
    const currentPath = location.pathname;

    if (langCode === 'fr') {
      // Switch to French version
      if (currentPath.startsWith('/fr')) {
        // Already on French version, do nothing
        return;
      }
      // Navigate to French version
      const frPath = currentPath === '/' ? '/fr/' : `/fr${currentPath}`;
      window.location.href = frPath;
    } else {
      // Switch to English version
      if (!currentPath.startsWith('/fr')) {
        // Already on English version, do nothing
        return;
      }
      // Navigate to English version (remove /fr prefix)
      const enPath = currentPath.replace(/^\/fr/, '') || '/';
      window.location.href = enPath;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={i18n.language === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
