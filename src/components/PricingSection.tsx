import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('pricing.description')}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {/* Free plan */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">{t('pricing.free.name')}</h3>
              <p className="mt-2 text-muted-foreground">
                {t('pricing.free.description')}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">{t('pricing.free.price')}</span>
              <span className="text-muted-foreground">{t('pricing.free.period')}</span>
            </div>

            <ul className="mb-8 space-y-4">
              {(t('pricing.free.features', { returnObjects: true }) as string[]).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {index === 3 ? (
                    <Lock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  )}
                  <span className={index === 3 ? "text-muted-foreground" : ""}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full" asChild>
              <Link to="/download">{t('pricing.free.cta')}</Link>
            </Button>
          </div>

          {/* Pro plan */}
          <div className="relative rounded-2xl border border-primary/50 bg-card p-8 glow-effect">
            <div className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              {t('pricing.pro.badge')}
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold">{t('pricing.pro.name')}</h3>
              <p className="mt-2 text-muted-foreground">
                {t('pricing.pro.description')}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">{t('pricing.pro.price')}</span>
              <span className="text-muted-foreground">{t('pricing.pro.period')}</span>
            </div>

            <ul className="mb-8 space-y-4">
              {(t('pricing.pro.features', { returnObjects: true }) as string[]).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className={index === 3 ? "font-medium" : ""}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full" asChild>
              <Link to="/download">{t('pricing.pro.cta')}</Link>
            </Button>
          </div>

          {/* Lifetime plan */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">{t('pricing.lifetime.name')}</h3>
              <p className="mt-2 text-muted-foreground">
                {t('pricing.lifetime.description')}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">{t('pricing.lifetime.price')}</span>
              <span className="text-muted-foreground">{t('pricing.lifetime.period')}</span>
            </div>

            <ul className="mb-8 space-y-4">
              {(t('pricing.lifetime.features', { returnObjects: true }) as string[]).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className={index === 3 || index === 4 ? "font-medium" : ""}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full" asChild>
              <Link to="/download">{t('pricing.lifetime.cta')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
