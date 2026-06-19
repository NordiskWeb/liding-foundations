import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactCTA } from "@/components/blocks";
import { team } from "@/lib/content";

export const Route = createFileRoute("/medarbetare")({
  head: () => ({
    meta: [
      { title: "Medarbetare – Liding Byggentreprenad AB" },
      { name: "description", content: "Möt teamet bakom Liding Byggentreprenad. Cirka 60 medarbetare med bred kompetens inom bygg, projektledning och försäkringsskador." },
    ],
  }),
  component: Page,
});

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("");
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Medarbetare"
        title={<>Personer som <em className="italic">bygger</em> trygghet.</>}
        intro="Vår styrka är medarbetarna. Här är några av nyckelpersonerna du möter hos Liding."
      />

      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {team.map((m) => (
            <div key={m.email} className="bg-background p-8 md:p-10 group">
              <div className="aspect-[4/5] w-full bg-stone flex items-end p-6 mb-6 overflow-hidden">
                <span className="font-display text-6xl md:text-7xl text-foreground/30">{initials(m.name)}</span>
              </div>
              <h3 className="font-display text-2xl">{m.name}</h3>
              {m.role && <p className="text-sm text-muted-foreground mt-1 eyebrow">{m.role}</p>}
              <a href={`mailto:${m.email}`} className="mt-4 inline-block text-sm link-underline">
                {m.email}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground max-w-2xl">
          Vill du komma i kontakt med någon specifik medarbetare? Mejla direkt eller ring vår
          växel på <a href="tel:+4681215501" className="link-underline text-foreground">+46 8 121 555 01</a>.
        </p>
      </section>

      <ContactCTA />
    </>
  );
}
