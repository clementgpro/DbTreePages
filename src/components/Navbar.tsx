import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const appIcon = "/app-icon.png";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/100 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <img src={appIcon} alt="DbTree" className="h-9 w-9 rounded-lg" />
          <span className="text-xl font-bold">DbTree</span>
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.features')}
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.howItWorks')}
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button size="sm" asChild>
            <a href="/download">{t('nav.download')}</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
