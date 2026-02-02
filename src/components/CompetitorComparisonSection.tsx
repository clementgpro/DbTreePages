import { useTranslation } from "react-i18next";
import { Check, X, Minus } from "lucide-react";

const CompetitorComparisonSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      nameKey: "competitor.features.objective",
      dbtreeKey: "competitor.values.dbtree.objective",
      dbschemaKey: "competitor.values.dbschema.objective",
      classicKey: "competitor.values.classic.objective",
    },
    {
      nameKey: "competitor.features.navigation",
      dbtreeKey: "competitor.values.dbtree.navigation",
      dbschemaKey: "competitor.values.dbschema.navigation",
      classicKey: "competitor.values.classic.navigation",
    },
    {
      nameKey: "competitor.features.relations",
      dbtreeKey: "competitor.values.dbtree.relations",
      dbschemaKey: "competitor.values.dbschema.relations",
      classicKey: "competitor.values.classic.relations",
    },
    {
      nameKey: "competitor.features.sql",
      dbtree: "none",
      dbschema: "partial",
      classic: "required",
    },
    {
      nameKey: "competitor.features.speed",
      dbtreeKey: "competitor.values.dbtree.speed",
      dbschemaKey: "competitor.values.dbschema.speed",
      classicKey: "competitor.values.classic.speed",
    },
    {
      nameKey: "competitor.features.exploration",
      dbtreeKey: "competitor.values.dbtree.exploration",
      dbschemaKey: "competitor.values.dbschema.exploration",
      classicKey: "competitor.values.classic.exploration",
    },
    {
      nameKey: "competitor.features.understanding",
      dbtree: 5,
      dbschema: 3,
      classic: 2,
    },
  ];

  const renderCell = (value: string | number | undefined, key?: string) => {
    if (value === "none") {
      return (
        <span className="inline-flex items-center gap-1.5 text-primary">
          <Check className="h-4 w-4" />
          <span>{t('competitor.sql.none')}</span>
        </span>
      );
    }
    if (value === "partial") {
      return (
        <span className="inline-flex items-center gap-1.5 text-yellow-500">
          <Minus className="h-4 w-4" />
          <span>{t('competitor.sql.occasional')}</span>
        </span>
      );
    }
    if (value === "required") {
      return (
        <span className="inline-flex items-center gap-1.5 text-destructive">
          <X className="h-4 w-4" />
          <span>{t('competitor.sql.required')}</span>
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
    if (key) {
      return <span>{t(key)}</span>;
    }
    return <span>{value}</span>;
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t('competitor.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('competitor.description')}
          </p>
        </div>

        {/* Comparison table */}
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left text-sm font-medium text-muted-foreground">
                  {t('competitor.headers.feature')}
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
                    <span className="text-lg font-semibold text-foreground">{t('competitor.headers.sqlClients')}</span>
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
                    {t(feature.nameKey)}
                  </td>
                  <td className="py-4 px-4 text-center text-sm bg-primary/5">
                    {renderCell(feature.dbtree, feature.dbtreeKey)}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {renderCell(feature.dbschema, feature.dbschemaKey)}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {renderCell(feature.classic, feature.classicKey)}
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
