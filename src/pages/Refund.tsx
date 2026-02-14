import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => {
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
          <h1 className="text-4xl font-bold mb-8">{t('legal.refund.title')}</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>{t('legal.refund.intro')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.refund.eligibilityTitle')}</h2>
            <p>{t('legal.refund.eligibilityContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.refund.processTitle')}</h2>
            <p>{t('legal.refund.processContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.refund.exclusionsTitle')}</h2>
            <p>{t('legal.refund.exclusionsContent')}</p>
            <h2 className="text-xl font-semibold text-foreground">{t('legal.refund.contactTitle')}</h2>
            <p>{t('legal.refund.contactContent')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
