import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { guides, type Guide } from "@/data/guides";

interface GuidePageProps {
  slug: string;
}

const GuidePage = ({ slug }: GuidePageProps) => {
  const guide = guides.find((g) => g.slug === slug) as Guide;
  const related = guides.filter((g) => g.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="container mx-auto max-w-3xl px-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">{guide.title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{guide.intro}</p>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-muted-foreground mb-4 leading-relaxed">{p}</p>
              ))}
              {section.code && (
                <pre className="mb-4 overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm">
                  <code>{section.code}</code>
                </pre>
              )}
              {section.bullets && (
                <ul className="mb-4 space-y-3">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.image && (
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  loading="lazy"
                  className="mt-4 w-full rounded-xl border border-border"
                />
              )}
            </section>
          ))}

          {guide.faq && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
              <dl className="space-y-6">
                {guide.faq.map((f) => (
                  <div key={f.question}>
                    <dt className="font-medium mb-2">{f.question}</dt>
                    <dd className="text-muted-foreground">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <div className="rounded-2xl border border-primary/50 bg-card p-8 text-center glow-effect mb-12">
            <h2 className="text-2xl font-semibold mb-2">Try DbTree for free</h2>
            <p className="text-muted-foreground mb-6">
              Windows · PostgreSQL 9.6+ · Read-only · No account required
            </p>
            <Button asChild>
              <a href="/download">Download DbTree</a>
            </Button>
          </div>

          <nav aria-label="Related guides">
            <h2 className="text-xl font-semibold mb-4">Related guides</h2>
            <ul className="space-y-2">
              {related.map((g) => (
                <li key={g.slug}>
                  <a href={`/${g.slug}/`} className="text-primary hover:underline">{g.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GuidePage;
