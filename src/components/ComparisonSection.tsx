import { useTranslation } from "react-i18next";
import { X, Check } from "lucide-react";
import avantSql from "@/assets/avant-sql.png";
import apresDbtree from "@/assets/apres-dbtree.jpg";

const ComparisonSection = () => {
  const { t } = useTranslation();

  const beforePoints = [
    "comparison.before.points.0",
    "comparison.before.points.1",
    "comparison.before.points.2",
    "comparison.before.points.3",
  ];

  const afterPoints = [
    "comparison.after.points.0",
    "comparison.after.points.1",
    "comparison.after.points.2",
    "comparison.after.points.3",
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t('comparison.title')}
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-destructive/30 bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t('comparison.before.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('comparison.before.subtitle')}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/50">
              <img 
                src={avantSql} 
                alt="Classic SQL client tabular view" 
                className="w-full"
              />
            </div>

            <ul className="mt-6 space-y-3">
              {beforePoints.map((key, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-primary/30 bg-card p-6 glow-effect">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t('comparison.after.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('comparison.after.subtitle')}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/50">
              <img 
                src={apresDbtree} 
                alt="DbTree tree view" 
                className="w-full"
              />
            </div>

            <ul className="mt-6 space-y-3">
              {afterPoints.map((key, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
