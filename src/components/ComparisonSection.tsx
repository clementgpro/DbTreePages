import ScreenshotPlaceholder from "@/components/ScreenshotPlaceholder";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Avant / Après
          </h2>
          <p className="text-lg text-muted-foreground">
            Comparez l'ancienne façon de faire avec la révolution DbTree.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-destructive/30 bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Client SQL classique</h3>
            </div>

            <ScreenshotPlaceholder 
              label="Capture - Vue tabulaire classique" 
              aspectRatio="video" 
            />

            <ul className="mt-6 space-y-3">
              {[
                "Données affichées à plat, sans contexte",
                "Jointures manuelles avec requêtes SQL",
                "Copier-coller d'IDs pour explorer",
                "Perte de temps et d'énergie"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span>{item}</span>
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
              <h3 className="text-xl font-semibold">Avec DbTree</h3>
            </div>

            <ScreenshotPlaceholder 
              label="Capture - Vue arborescente DbTree" 
              aspectRatio="video" 
            />

            <ul className="mt-6 space-y-3">
              {[
                "Données organisées hiérarchiquement",
                "Relations visibles en un clic",
                "Navigation intuitive dans vos données",
                "Gain de temps considérable"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
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
