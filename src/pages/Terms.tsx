import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            {t('legal.back')}
          </Link>
          <h1 className="text-4xl font-bold mb-8">{t('legal.terms.title')}</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>{t('legal.terms.intro')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.terms.useTitle')}</h2>
            <p>{t('legal.terms.useContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.terms.licenseTitle')}</h2>
            <p>{t('legal.terms.licenseContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.terms.limitationTitle')}</h2>
            <p>{t('legal.terms.limitationContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.terms.modificationTitle')}</h2>
            <p>{t('legal.terms.modificationContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.terms.contactTitle')}</h2>
            <p>{t('legal.terms.contactContent')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
