import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import appIcon from "@/assets/app-icon.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/50 bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={appIcon} alt="DbTree" className="h-9 w-9 rounded-lg" />
            <span className="text-xl font-bold">DbTree</span>
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/terms" className="transition-colors hover:text-foreground">{t('footer.terms')}</Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">{t('footer.privacy')}</Link>
            <Link to="/refund" className="transition-colors hover:text-foreground">{t('footer.refund')}</Link>
            <Link to="/legal-notice" className="transition-colors hover:text-foreground">{t('footer.legalNotice')}</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground">{t('footer.contact')}</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
