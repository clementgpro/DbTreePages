import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroDemo from "@/assets/hero-demo.gif";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 top-glow">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="mb-8 flex justify-center animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Nouveau : Explorez vos données autrement</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up delay-100">
            Visualisez vos données{" "}
            <span className="gradient-text">hiérarchiquement</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-slide-up delay-200">
            Fini les requêtes SQL pour voir vos jointures. DbTree vous permet de naviguer 
            dans vos relations de données en un coup d'œil, comme jamais auparavant.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/download">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#features">
                Voir les fonctionnalités
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Screenshot */}
        <div className="mx-auto mt-16 max-w-5xl animate-slide-up delay-400">
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-3xl animate-pulse-glow" />
            
            {/* Screenshot container */}
            <div className="relative rounded-2xl border border-border/50 bg-card p-2 shadow-2xl">
              <img 
                src={heroDemo} 
                alt="Interface DbTree - Visualisation hiérarchique des données" 
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { value: "10x", label: "Plus rapide que SQL" },
            { value: "0", label: "Requête à écrire" },
            { value: "∞", label: "Relations visibles" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold gradient-text sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
