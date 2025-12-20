import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-card p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative text-center">
            {/* Icon */}
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <TreePine className="h-8 w-8 text-primary" />
            </div>

            {/* Content */}
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Prêt à révolutionner votre{" "}
              <span className="gradient-text">exploration de données</span> ?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
              Rejoignez les développeurs qui ont déjà adopté une nouvelle façon de visualiser leurs bases de données.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Démarrer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Contacter l'équipe
              </Button>
            </div>

            {/* Trust badges */}
            <p className="mt-8 text-sm text-muted-foreground">
              Essai gratuit • Aucune carte requise • Configuration en 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
