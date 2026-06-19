import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactCTA } from "@/components/blocks";
import { testimonials } from "@/lib/content";

export const Route = createFileRoute("/referenser")({
  head: () => ({
    meta: [
      { title: "Referenser – Liding Byggentreprenad AB" },
      { name: "description", content: "Kundberättelser från privatpersoner, försäkringsbolag och bostadsrättsföreningar som anlitat Liding Byggentreprenad." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Referenser"
        title={<>Det kunder <em className="italic">säger</em> om oss.</>}
        intro="Riktiga ord från riktiga uppdrag – vattenskador, brandskador, badrum och totalrenoveringar."
      />

      <section className="border-b border-border">
        {testimonials.map((t, i) => (
          <article key={t.author} className="border-t border-border first:border-t-0">
            <div className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-10">
              <div className="md:col-span-2 font-display text-4xl text-foreground/40">0{i + 1}</div>
              <div className="md:col-span-10 max-w-4xl">
                <blockquote className="font-display text-3xl md:text-5xl leading-[1.1]">
                  “{t.short}”
                </blockquote>
                <p className="mt-8 text-foreground/75 leading-relaxed text-lg">{t.body}</p>
                <p className="mt-8 eyebrow text-muted-foreground">{t.author}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <ContactCTA />
    </>
  );
}
