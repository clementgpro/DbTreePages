import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-8">{t('legal.privacy.title')}</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>{t('legal.privacy.intro')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.privacy.collectionTitle')}</h2>
            <p>{t('legal.privacy.collectionContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.privacy.usageTitle')}</h2>
            <p>{t('legal.privacy.usageContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.privacy.storageTitle')}</h2>
            <p>{t('legal.privacy.storageContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.privacy.rightsTitle')}</h2>
            <p>{t('legal.privacy.rightsContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.privacy.contactTitle')}</h2>
            <p>{t('legal.privacy.contactContent')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
