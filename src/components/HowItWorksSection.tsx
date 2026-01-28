import { Plug, Brain, TreePine, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Connectez votre DB",
    description: "Entrez vos identifiants. DbTree scanne le schéma en lecture seule.",
  },
  {
    icon: Brain,
    title: "Analyse des Relations",
    description: "Le moteur détecte les contraintes (FK) et construit le graphe de données.",
  },
  {
    icon: TreePine,
    title: "Explorez en Tree Mode",
    description: "Naviguez dans vos tables comme dans votre explorateur de fichiers.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            De la connexion à l'exploration en{" "}
            <span className="gradient-text">3 étapes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Commencez à explorer vos données en quelques minutes.
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
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connection flow visualization */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-card/50 p-8">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8 md:text-left">
              {/* Database */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <span className="text-2xl">🗄️</span>
                </div>
                <span className="text-sm text-muted-foreground">PostgreSQL</span>
              </div>

              <ArrowRight className="h-6 w-6 rotate-90 text-primary/50 md:rotate-0" />

              {/* DbTree */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 ring-2 ring-primary/50">
                  <span className="text-3xl">🌳</span>
                </div>
                <span className="font-semibold text-primary">DbTree</span>
              </div>

              <ArrowRight className="h-6 w-6 rotate-90 text-primary/50 md:rotate-0" />

              {/* Tree visualization */}
              <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4">
                <div className="font-mono text-sm">
                  <div className="text-foreground">📁 Commandes</div>
                  <div className="ml-4 text-muted-foreground">├─ 📄 #8821</div>
                  <div className="ml-8 text-primary">├─ 👤 Client: Jean</div>
                  <div className="ml-8 text-primary">└─ 📦 Produits (3)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
