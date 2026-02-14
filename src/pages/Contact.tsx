import { useTranslation } from "react-i18next";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
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
          <h1 className="text-4xl font-bold mb-8">{t('legal.contact.title')}</h1>
          <div className="space-y-6 text-muted-foreground">
            <p>{t('legal.contact.intro')}</p>
            <div className="rounded-xl border border-border bg-card p-8 flex flex-col items-center gap-4">
              <Mail className="h-10 w-10 text-primary" />
              <p className="text-lg font-medium text-foreground">contact.dbtree@gmail.com</p>
              <Button asChild>
                <a href="mailto:contact.dbtree@gmail.com">{t('legal.contact.cta')}</a>
              </Button>
            </div>
            <p className="text-sm">{t('legal.contact.response')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
