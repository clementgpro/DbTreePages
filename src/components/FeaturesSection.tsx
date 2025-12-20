import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import { GitBranch, Zap, Eye, Layers } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Navigation hiérarchique",
    description: "Explorez vos tables comme un arbre. Cliquez sur une ligne pour voir instantanément toutes ses relations enfants.",
    screenshot: "Capture - Navigation arborescente"
  },
  {
    icon: Eye,
    title: "Jointures visuelles",
    description: "Plus besoin d'écrire des JOIN complexes. Voyez vos relations de données en un coup d'œil.",
    screenshot: "Capture - Visualisation des jointures"
  },
  {
    icon: Zap,
    title: "Performance optimisée",
    description: "Requêtes intelligentes en arrière-plan. Ne chargez que les données dont vous avez besoin.",
    screenshot: "Capture - Performance et chargement"
  },
  {
    icon: Layers,
    title: "Multi-niveaux",
    description: "Descendez dans vos données autant que nécessaire. Clients → Commandes → Produits → Fournisseurs...",
    screenshot: "Capture - Exploration multi-niveaux"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-muted-foreground">
            DbTree repense la façon dont vous interagissez avec vos bases de données.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon and title */}
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>

              {/* Description */}
              <p className="mb-6 text-muted-foreground">{feature.description}</p>

              {/* Screenshot */}
              <ScreenshotPlaceholder label={feature.screenshot} aspectRatio="video" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
