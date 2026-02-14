import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import demoVideo from "@/assets/demo-video.mp4";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 top-glow">
      {/* Animated 3D Grid Background */}
      <div className="hero-grid-container">
        <div className="hero-grid" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="mb-8 flex justify-center animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>{t('hero.badge')}</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up delay-100">
            {t('hero.title1')}
            <br />
            <span className="gradient-text">{t('hero.title2')}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground animate-slide-up delay-200">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/download">
                {t('hero.cta')}
                <span className="ml-2">🚀</span>
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#features">
                {t('hero.ctaSecondary')}
              </a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3 animate-slide-up delay-300">
          {[
            { value: "10x", label: t('hero.stats.faster') },
            { value: "0", label: t('hero.stats.queries') },
            { value: "∞", label: t('hero.stats.relations') },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold gradient-text sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hero Video */}
        <div className="mx-auto mt-16 max-w-5xl animate-slide-up delay-400">
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute -inset-8 rounded-2xl bg-primary/30 blur-3xl animate-pulse-glow" />
            
            {/* Video */}
            <video 
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="relative w-full rounded-xl border border-primary/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
