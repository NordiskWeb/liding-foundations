import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, CTA, ContactCTA, CircuraBlock } from "@/components/blocks";
import { services, values, testimonials, certifications } from "@/lib/content";
import hero from "@/assets/hero-building.jpg.asset.json";
import roofWork from "@/assets/roof-work.jpg.asset.json";
import interior from "@/assets/interior-columns.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liding Byggentreprenad AB – Trygg byggpartner vid försäkringsskador" },
      { name: "description", content: "Vi hjälper försäkringsbolag, fastighetsägare, bostadsrättsföreningar och privatpersoner med trygga bygg- och återställningsarbeten i Storstockholm och Uppsala." },
      { property: "og:title", content: "Liding Byggentreprenad AB" },
      { property: "og:description", content: "Byggentreprenör med spetskompetens inom försäkringsskador." },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-12">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow text-muted-foreground mb-8">Sedan 2015 · Storstockholm & Uppsala</p>
              <h1 className="font-display text-[44px] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[104px]">
                Vi bygger upp <em className="italic text-foreground/75">det som</em> behöver återställas.
              </h1>
            </div>
            <div className="md:col-span-5 md:pb-4">
              <p className="text-lg text-foreground/75 leading-relaxed max-w-md">
                Liding Byggentreprenad AB hjälper försäkringsbolag, fastighetsägare,
                bostadsrättsföreningar och privatpersoner med trygga bygg- och
                återställningsarbeten – från första skadebesiktning till godkänd slutbesiktning.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA to="/kontakt">Kontakta oss</CTA>
                <CTA to="/tjanster" variant="ghost">Våra tjänster</CTA>
              </div>
            </div>
          </div>
        </div>
        <div className="container-x mt-16 md:mt-24">
          <div className="relative overflow-hidden">
            <img
              src={hero.url}
              alt="Återställning av fastighet"
              className="w-full h-[58vh] md:h-[78vh] object-cover"
              width={1920}
              height={1280}
            />
            <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 text-paper text-xs tracking-[0.22em] uppercase">
              01 — Återställning · Stockholm
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 text-sm text-foreground/65">
            <Stat n="60+" label="Medarbetare" />
            <Stat n="2015" label="Grundat" />
            <Stat n="2" label="Regioner i Mellansverige" />
            <Stat n="BBV 10:1" label="Våtrumsbehörighet" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        eyebrow="Det här är Liding"
        title={<>En byggentreprenör med <em className="italic">försäkrings­ärenden</em> som kärna.</>}
      >
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
              till godkänd slutbesiktning. Hos Liding kombinerar vi tekniskt kunnande med
              personlig service, vilket gör oss till en trygg och långsiktig partner.
            </p>
            <div className="pt-2">
              <CTA to="/om-oss" variant="ghost">Om oss</CTA>
            </div>
          </div>
          <div className="md:col-span-5">
            <img src={interior.url} alt="Återställd kontorslokal" className="w-full h-[480px] object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        eyebrow="Våra tjänster"
        title={<>Hur kan vi hjälpa dig?</>}
        intro="Vi samordnar bygg, måleri, VVS, el och ventilation under ett tak – för en smidig och trygg återställning."
        className="border-t border-border"
      >
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10 group hover:bg-stone transition-colors min-h-[340px] flex flex-col">
              <span className="font-display text-3xl text-foreground/40">{s.n}</span>
              <h3 className="mt-6 font-display text-3xl md:text-4xl">{s.title}</h3>
              <p className="mt-5 text-foreground/70 leading-relaxed">{s.body}</p>
              <div className="mt-auto pt-8">
                <Link to="/tjanster" className="link-underline text-sm tracking-wide">Läs mer</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INSURANCE */}
      <section className="bg-ink text-paper">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="eyebrow text-paper/55 mb-6">Försäkringsskador</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                Trygg process – från skade­besiktning till slutbesiktning.
              </h2>
              <div className="mt-8">
                <Link to="/forsakringsskador" className="inline-flex items-center gap-3 border border-paper/30 px-7 py-4 text-sm tracking-wide hover:bg-paper hover:text-ink transition-colors group">
                  Läs mer om processen
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="md:col-span-7">
              <img src={roofWork.url} alt="Försäkringsskada – tak" className="w-full h-[420px] object-cover mb-10" loading="lazy" />
              <ol className="divide-y divide-paper/15 border-y border-paper/15">
                {[
                  ["Skadebesiktning", "Snabb första besiktning på plats med tydlig dokumentation."],
                  ["Samordning", "Bygg, rivning, VVS, el, ventilation och måleri – ett kontaktnamn."],
                  ["Kommunikation", "Löpande dialog med försäkringsbolag och försäkringstagare."],
                  ["Kvalitetssäkrad återställning", "Färdigställt och godkänt enligt branschens krav."],
                ].map(([t, b], i) => (
                  <li key={t} className="py-5 grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-2 md:col-span-1 font-display text-xl text-paper/45">0{i + 1}</span>
                    <h4 className="col-span-10 md:col-span-4 font-display text-xl">{t}</h4>
                    <p className="col-span-12 md:col-span-7 text-paper/75 text-sm leading-relaxed">{b}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-32 md:py-44 border-t border-border">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground mb-10">Vår vision</p>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-5xl">
            Att vara branschens mest pålitliga partner inom byggande vid
            försäkringsskador – där <em className="italic">kvalitet, trygghet och korrekt
            återställning</em> alltid står i centrum.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <Section eyebrow="Våra värderingar" title={<>Det vi står för i varje uppdrag.</>}>
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

      {/* TESTIMONIALS */}
      <Section eyebrow="Referenser" title={<>Det kunder säger om oss.</>} className="bg-stone">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {testimonials.slice(0, 4).map((t) => (
            <figure key={t.author} className="bg-stone p-8 md:p-12">
              <blockquote className="font-display text-2xl md:text-3xl leading-snug">
                “{t.short}”
              </blockquote>
              <p className="mt-6 text-foreground/70 text-[15px] leading-relaxed line-clamp-5">{t.body}</p>
              <figcaption className="mt-6 eyebrow text-muted-foreground">{t.author}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10">
          <CTA to="/referenser" variant="ghost">Alla referenser</CTA>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section eyebrow="Certifieringar & trygghet" title={<>Behörigheter som ger ryggrad.</>}>
        <div className="grid md:grid-cols-4 gap-px bg-border">
          {certifications.map((c) => (
            <div key={c.title} className="bg-background p-8 min-h-[180px]">
              <h3 className="font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 border-t border-border pt-4">
      <span className="font-display text-2xl text-foreground">{n}</span>
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
    </div>
  );
}
