import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ContactCTA, CTA } from "@/components/blocks";
import { services, partners, certifications } from "@/lib/content";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Tjänster – Liding Byggentreprenad AB" },
      { name: "description", content: "Bygg, rivning, måleri, VVS, el och ventilation – komplett återställning vid försäkringsskador i Storstockholm och Uppsala." },
      { property: "og:title", content: "Tjänster – Liding Byggentreprenad AB" },
    ],
  }),
  component: Tjanster,
});

function Tjanster() {
  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title={<>En komplett byggpartner <em className="italic">under ett tak</em>.</>}
        intro="Vi samordnar bygg, måleri, VVS, el och ventilation – för effektiva, trygga och kvalitetssäkrade återställningar."
      />

      <section className="border-b border-border">
        {services.map((s) => (
          <div key={s.n} className="border-t border-border first:border-t-0">
            <div className="container-x py-16 md:py-20 grid md:grid-cols-12 gap-10 items-start group">
              <div className="md:col-span-2 font-display text-4xl text-foreground/45">{s.n}</div>
              <div className="md:col-span-4">
                <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">{s.title}</h2>
              </div>
              <div className="md:col-span-6 text-foreground/75 leading-relaxed text-lg">
                <p>{s.body}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Section eyebrow="Samarbetspartners" title={<>Specialister vi arbetar tätt med.</>}>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {partners.map((p) => (
            <div key={p.name} className="bg-background p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Certifieringar" title={<>Trygghet i grunden.</>} className="border-t border-border">
        <div className="grid md:grid-cols-4 gap-px bg-border">
          {certifications.map((c) => (
            <div key={c.title} className="bg-background p-8 min-h-[180px]">
              <h3 className="font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><CTA to="/forsakringsskador">Vår process</CTA></div>
      </Section>

      <ContactCTA />
    </>
  );
}
