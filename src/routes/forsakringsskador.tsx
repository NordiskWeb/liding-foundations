import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ContactCTA } from "@/components/blocks";
import roof from "@/assets/roof-damage.jpg.asset.json";
import work from "@/assets/roof-work.jpg.asset.json";

export const Route = createFileRoute("/forsakringsskador")({
  head: () => ({
    meta: [
      { title: "Försäkringsskador – Liding Byggentreprenad AB" },
      { name: "description", content: "Trygg process från skadebesiktning till godkänd slutbesiktning. Vi samordnar bygg, VVS, el, ventilation och måleri vid försäkringsskador." },
      { property: "og:image", content: roof.url },
    ],
  }),
  component: Page,
});

const steps = [
  { t: "Skadebesiktning", b: "Snabb första besiktning på plats. Vi dokumenterar omfattning, behov av sanering och föreslår åtgärder direkt till försäkringsbolag och försäkringstagare." },
  { t: "Planering & samordning", b: "Vi planerar arbetet och samordnar bygg, rivning, VVS, el, ventilation och måleri – allt under ett tak och med en kontaktperson." },
  { t: "Genomförande", b: "Kvalificerade hantverkare och certifierade tekniker utför arbetet enligt branschens krav och bolagets ramavtal." },
  { t: "Löpande kommunikation", b: "Tydlig dialog genom hela arbetet – både med beställare och försäkringstagare. Inga överraskningar." },
  { t: "Kvalitetssäkring", b: "Egenkontroller, dokumentation och vid behov tredjepartskontroll – allt enligt BBV 10:1 och BKMA." },
  { t: "Slutbesiktning", b: "Återlämnande av en korrekt återställd fastighet, godkänd och dokumenterad." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Försäkringsskador"
        title={<>Från första <em className="italic">skadebesiktning</em> till godkänd slutbesiktning.</>}
        intro="Försäkringsärenden är kärnan i vår verksamhet. Vår process är utformad för att vara snabb, trygg och spårbar – för både beställare och försäkringstagare."
      />

      <section className="container-x">
        <img src={roof.url} alt="Brandskada – återställning" className="w-full h-[60vh] object-cover mt-12" loading="lazy" />
      </section>

      <Section eyebrow="Processen" title={<>Sex steg, ett ansvar.</>}>
        <ol className="border-t border-border">
          {steps.map((s, i) => (
            <li key={s.t} className="grid grid-cols-12 gap-6 py-8 border-b border-border">
              <span className="col-span-12 md:col-span-2 font-display text-3xl text-foreground/45">0{i + 1}</span>
              <h3 className="col-span-12 md:col-span-4 font-display text-2xl">{s.t}</h3>
              <p className="col-span-12 md:col-span-6 text-foreground/75 leading-relaxed">{s.b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-ink text-paper">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <img src={work.url} alt="Takarbete inomhus" className="w-full h-[480px] object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow text-paper/55 mb-6">Vi samordnar</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Bygg, rivning, VVS, el, ventilation och måleri – allt under ett ansvar.
            </h2>
            <p className="mt-6 text-paper/75 leading-relaxed">
              När en skada inträffat ska processen vara enkel. Vi tar ansvar för hela
              kedjan så att försäkringsbolag, fastighetsägare och försäkringstagare
              kan känna sig trygga genom hela arbetet.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
