import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quelles bases de données sont supportées ?",
    answer:
      "Actuellement, DbTree supporte PostgreSQL (version 9.6 et supérieures). Support d'autres SGBD à venir.",
  },
  {
    question: "Mes données sont-elles en sécurité ?",
    answer:
      "Absolument ! DbTree fonctionne en mode lecture seule et ne stocke aucune donnée. Toutes les connexions sont directes à votre base.",
  },
  {
    question: "Puis-je l'utiliser sur Mac ou Linux ?",
    answer:
      "La version actuelle est optimisée pour Windows. Versions Mac et Linux prévues prochainement.",
  },
  {
    question: "Faut-il installer Java ?",
    answer:
      "Non ! La version standalone inclut tout le nécessaire. Téléchargez et lancez, c'est tout.",
  },
  {
    question: "Puis-je l'essayer gratuitement ?",
    answer:
      "Oui ! Téléchargez la version d'essai gratuite, aucune carte bancaire requise.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir sur DbTree
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
