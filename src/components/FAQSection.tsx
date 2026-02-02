import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { t } = useTranslation();

  const faqKeys = ['databases', 'security', 'platforms', 'java', 'trial'];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqKeys.map((key, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                {t(`faq.questions.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {t(`faq.questions.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
