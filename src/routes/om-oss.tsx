import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CircuraBlock, ContactCTA, CTA } from "@/components/blocks";
import { values } from "@/lib/content";
import interior from "@/assets/interior-columns.jpg.asset.json";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss – Liding Byggentreprenad AB" },
      { name: "description", content: "Liding grundades 2015 och har sedan dess varit en trygg byggpartner inom försäkringsskador i Storstockholm och Uppsala." },
      { property: "og:title", content: "Om oss – Liding Byggentreprenad AB" },
      { property: "og:image", content: interior.url },
    ],
  }),
  component: OmOss,
});

const timeline = [
  ["2015", "Grundas av Martin och Joacim", "Liding Byggentreprenad AB startas med fokus på kvalitet, ansvar och långsiktiga kundrelationer."],
  ["2016", "Förtroendeentreprenör", "Bolaget blir förtroendeentreprenör åt flera försäkringsbolag – ett viktigt steg i utvecklingen."],
  ["2018–2022", "Tillväxt och breddning", "Verksamheten växer med fler medarbetare och successivt bredare kompetens."],
  ["2023", "Del av Circura", "Liding blir en del av Circura-koncernen, vilket skapar nya möjligheter för fortsatt tillväxt."],
  ["Idag", "≈60 medarbetare", "Stockholm & Uppsala – komplett byggpartner för försäkringsskador och traditionella uppdrag."],
];

function OmOss() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title={<>Erfarenhet, ansvar <em className="italic">och</em> personlig service.</>}
        intro="Liding är en byggentreprenör med spetskompetens inom försäkringsärenden – kärnan i vår verksamhet sedan dag ett."
      />

      <Section eyebrow="Det här är Liding" title={<>En trygg partner från första kontakt.</>}>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-6 text-foreground/80 leading-relaxed text-lg">
            <p>
              Liding är en byggentreprenör med spetskompetens inom försäkringsärenden,
              vilket utgör kärnan i vår verksamhet. Vi arbetar dagligen med att hjälpa
              försäkringsbolag och deras kunder vid skador på fastigheter – från den
              första skadebesiktningen till färdigställt och kvalitetssäkrat arbete.
            </p>
            <p>
              Vi åtar oss både små och stora projekt i Storstockholm och Uppsala och
              arbetar med försäkringsbolag, bostadsrättsföreningar, fastighets­förvaltare
              och privatpersoner.
            </p>
            <p>
              Med cirka 60 medarbetare och en bred samlad kompetens säkerställer vi ett
              professionellt genomförande av varje projekt – från planering och samordning
              till godkänd slutbesiktning.
            </p>
          </div>
          <div className="md:col-span-5">
            <img src={interior.url} alt="" className="w-full h-[480px] object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section eyebrow="Historia" title={<>Från 2015 till idag.</>} className="border-t border-border">
        <ol className="border-t border-border">
          {timeline.map(([year, t, b]) => (
            <li key={year} className="grid grid-cols-12 gap-6 py-8 border-b border-border">
              <span className="col-span-12 md:col-span-2 font-display text-3xl">{year}</span>
              <h3 className="col-span-12 md:col-span-4 font-display text-2xl">{t}</h3>
              <p className="col-span-12 md:col-span-6 text-foreground/70 leading-relaxed">{b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Värderingar" title={<>Det vi står för.</>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {values.map((v, i) => (
            <div key={v.title} className="bg-background p-8 md:p-10 min-h-[280px]">
              <span className="font-display text-xl text-foreground/40">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl">{v.title}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed text-[15px]">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CircuraBlock />

      <section className="container-x py-20 flex flex-wrap gap-4">
        <CTA to="/medarbetare" variant="ghost">Möt teamet</CTA>
        <CTA to="/kontakt">Kontakta oss</CTA>
      </section>

      <ContactCTA />
    </>
  );
}
