import { Check, X, Minus } from "lucide-react";

const CompetitorComparisonSection = () => {
  const features = [
    {
      name: "Objectif principal",
      dbtree: "Explorer les données via leurs relations",
      dbschema: "Modéliser et documenter le schéma",
      classic: "Exécuter et écrire des requêtes SQL",
    },
    {
      name: "Navigation des données",
      dbtree: "Arborescence interactive en temps réel",
      dbschema: "Diagrammes de schéma",
      classic: "Résultats tabulaires",
    },
    {
      name: "Relations (FK / entrantes)",
      dbtree: "Automatiques, bidirectionnelles",
      dbschema: "Visuelles, schéma-centrées",
      classic: "Manuelles",
    },
    {
      name: "SQL requis",
      dbtree: "none",
      dbschema: "partial",
      classic: "required",
    },
    {
      name: "Rapidité d'accès",
      dbtree: "Immédiate",
      dbschema: "Moyenne",
      classic: "Lente (requêtes)",
    },
    {
      name: "Exploration profonde",
      dbtree: "Illimitée (lazy loading)",
      dbschema: "Limitée",
      classic: "Manuelle",
    },
    {
      name: "Compréhension d'un modèle",
      dbtree: 5,
      dbschema: 3,
      classic: 2,
    },
  ];

  const renderCell = (value: string | number) => {
    if (value === "none") {
      return (
        <span className="inline-flex items-center gap-1.5 text-primary">
          <Check className="h-4 w-4" />
          <span>Aucun</span>
        </span>
      );
    }
    if (value === "partial") {
      return (
        <span className="inline-flex items-center gap-1.5 text-yellow-500">
          <Minus className="h-4 w-4" />
          <span>Occasionnel</span>
        </span>
      );
    }
    if (value === "required") {
      return (
        <span className="inline-flex items-center gap-1.5 text-destructive">
          <X className="h-4 w-4" />
          <span>Indispensable</span>
        </span>
      );
    }
    if (typeof value === "number") {
      return (
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-2 w-4 rounded-sm ${
                i <= value ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      );
    }
    return <span>{value}</span>;
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            DbTree vs. la concurrence
          </h2>
          <p className="text-lg text-muted-foreground">
            Comparez DbTree avec les autres outils du marché.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left text-sm font-medium text-muted-foreground">
                  Fonctionnalité
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-lg font-bold text-primary">DbTree</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold text-foreground">DbSchema</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold text-foreground">Clients SQL</span>
                    <span className="text-xs text-muted-foreground">(DBeaver, DbVisualizer...)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 px-4 text-sm font-medium text-foreground">
                    {feature.name}
                  </td>
                  <td className="py-4 px-4 text-center text-sm bg-primary/5">
                    {renderCell(feature.dbtree)}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {renderCell(feature.dbschema)}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {renderCell(feature.classic)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparisonSection;
