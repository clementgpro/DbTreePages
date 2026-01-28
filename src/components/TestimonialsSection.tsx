import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Avant DbTree, je passais mon temps à faire des SELECT * FROM ... WHERE id = ... pour comprendre mes bugs. Maintenant, je déroule juste l'arbre et je vois immédiatement où la donnée est corrompue. C'est un gain de temps phénoménal pour le débogage.",
    author: "Alex T.",
    role: "Lead Backend Developer",
    avatar: "👨‍💻",
  },
  {
    quote:
      "En tant que DBA, je dois vérifier les contraintes et les relations régulièrement. DbTree me permet de naviguer dans le schéma sans écrire une seule requête. Un outil indispensable dans ma boîte à outils.",
    author: "Marie L.",
    role: "Database Administrator",
    avatar: "👩‍💼",
  },
  {
    quote:
      "Je l'utilise pour documenter les relations de nos bases de données auprès des nouveaux développeurs. La visualisation en arbre rend tout tellement plus clair qu'un diagramme ERD classique.",
    author: "Thomas R.",
    role: "Tech Lead",
    avatar: "👨‍🔬",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ce qu'en disent nos <span className="gradient-text">utilisateurs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Rejoignez les développeurs qui ont transformé leur façon d'explorer les données.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />

              {/* Quote text */}
              <blockquote className="mb-6 text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
