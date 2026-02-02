import { useTranslation } from "react-i18next";
import { Plug, Brain, TreePine, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Plug,
      titleKey: "howItWorks.steps.connect.title",
      descriptionKey: "howItWorks.steps.connect.description",
    },
    {
      icon: Brain,
      titleKey: "howItWorks.steps.analyze.title",
      descriptionKey: "howItWorks.steps.analyze.description",
    },
    {
      icon: TreePine,
      titleKey: "howItWorks.steps.explore.title",
      descriptionKey: "howItWorks.steps.explore.description",
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t('howItWorks.title')}
            <span className="gradient-text">{t('howItWorks.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('howItWorks.description')}
          </p>
        </div>

        {/* Steps diagram */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow between steps (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden translate-x-1/2 md:block">
                    <ArrowRight className="h-8 w-8 text-primary/50" />
                  </div>
                )}

                {/* Step card */}
                <div className="group relative rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(step.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
