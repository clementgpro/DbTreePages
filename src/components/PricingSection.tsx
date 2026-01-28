import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Tarifs simples et transparents
          </h2>
          <p className="text-lg text-muted-foreground">
            Commencez gratuitement, passez à la version Pro quand vous êtes prêt.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {/* Free plan */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Gratuit</h3>
              <p className="mt-2 text-muted-foreground">
                Parfait pour découvrir DbTree
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">0€</span>
              <span className="text-muted-foreground">/mois</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Accès à toutes les fonctionnalités</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Connexion à vos bases de données</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Vue hiérarchique des relations</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <span>Limité à 2 niveaux hiérarchiques</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full" asChild>
              <Link to="/download">Commencer gratuitement</Link>
            </Button>
          </div>

          {/* Pro plan */}
          <div className="relative rounded-2xl border border-primary/50 bg-card p-8 glow-effect">
            <div className="absolute -top-3 right-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Populaire
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="mt-2 text-muted-foreground">
                Pour explorer sans limites
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">5€</span>
              <span className="text-muted-foreground">/mois</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Accès à toutes les fonctionnalités</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Connexion à vos bases de données</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Vue hiérarchique des relations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">Niveaux hiérarchiques illimités</span>
              </li>
            </ul>

            <Button className="w-full" asChild>
              <Link to="/download">Passer à Pro</Link>
            </Button>
          </div>

          {/* Lifetime plan */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Lifetime</h3>
              <p className="mt-2 text-muted-foreground">
                Un paiement unique, à vie
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">150€</span>
              <span className="text-muted-foreground"> une fois</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Accès à toutes les fonctionnalités</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Connexion à vos bases de données</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Vue hiérarchique des relations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">Niveaux hiérarchiques illimités</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">Licence à vie</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full" asChild>
              <Link to="/download">Acheter la licence</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
