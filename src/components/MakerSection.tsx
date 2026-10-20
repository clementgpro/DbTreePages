import { useTranslation } from "react-i18next";
import { Github, Mail } from "lucide-react";

const MakerSection = () => {
  const { t } = useTranslation();

  return (
    <section id="maker" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-start">
          <img
            src="https://github.com/clementgpro.png?size=200"
            alt="Clément, developer of DbTree"
            loading="lazy"
            className="h-24 w-24 shrink-0 rounded-full border border-border"
          />
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t('maker.title')}</h2>
            <p className="mb-3 font-medium">{t('maker.intro')}</p>
            <p className="mb-3 text-muted-foreground">{t('maker.story')}</p>
            <p className="mb-6 text-muted-foreground">{t('maker.contact')}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="mailto:contact.dbtree@gmail.com" className="inline-flex items-center gap-2 text-primary hover:underline">
                <Mail className="h-4 w-4" />
                contact.dbtree@gmail.com
              </a>
              <a href="https://github.com/clementgpro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                <Github className="h-4 w-4" />
                {t('maker.github')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakerSection;
