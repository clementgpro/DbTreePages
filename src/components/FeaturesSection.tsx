import { useTranslation } from "react-i18next";
import { GitBranch, Zap, Eye, Layers, MousePointerClick, Copy, Shield, Gauge } from "lucide-react";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const mainFeatures = [
    {
      icon: GitBranch,
      titleKey: "features.main.navigation.title",
      descriptionKey: "features.main.navigation.description",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500"
    },
    {
      icon: Eye,
      titleKey: "features.main.visualization.title",
      descriptionKey: "features.main.visualization.description",
      gradient: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Zap,
      titleKey: "features.main.loading.title",
      descriptionKey: "features.main.loading.description",
      gradient: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500"
    },
    {
      icon: Layers,
      titleKey: "features.main.pagination.title",
      descriptionKey: "features.main.pagination.description",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    }
  ];

  const secondaryFeatures = [
    {
      icon: MousePointerClick,
      titleKey: "features.secondary.details.title",
      descriptionKey: "features.secondary.details.description"
    },
    {
      icon: Copy,
      titleKey: "features.secondary.export.title",
      descriptionKey: "features.secondary.export.description"
    },
    {
      icon: Shield,
      titleKey: "features.secondary.readonly.title",
      descriptionKey: "features.secondary.readonly.description"
    },
    {
      icon: Gauge,
      titleKey: "features.secondary.performance.title",
      descriptionKey: "features.secondary.performance.description"
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t('features.title')}<span className="gradient-text">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.description')}
          </p>
        </div>

        {/* Main features grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 ${feature.iconColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(feature.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary features */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:bg-card hover:border-primary/20"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h4 className="mb-1 font-semibold">{t(feature.titleKey)}</h4>
              <p className="text-sm text-muted-foreground">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
