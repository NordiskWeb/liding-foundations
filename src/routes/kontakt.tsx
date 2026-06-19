import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/blocks";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Liding Byggentreprenad AB" },
      { name: "description", content: "Kontakta Liding Byggentreprenad i Järfälla, Stockholm. Ring +46 8 121 555 01 eller mejla kontakt@liding.se." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={<>Berätta om ditt <em className="italic">projekt</em> eller din skada.</>}
        intro="Vi återkommer skyndsamt och hjälper dig vidare – från första besiktning till färdigställt arbete."
      />

      <section className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-4 space-y-10">
          <div>
            <p className="eyebrow text-muted-foreground mb-3">Besök</p>
            <address className="not-italic text-lg font-display leading-snug">
              Spjutvägen 5H<br />175 61 Järfälla<br />Stockholm
            </address>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-3">Ring</p>
            <a href="tel:+4681215501" className="text-lg font-display link-underline">+46 8 121 555 01</a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-3">Mejla</p>
            <a href="mailto:kontakt@liding.se" className="text-lg font-display link-underline">kontakt@liding.se</a>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-3">Org.nr</p>
            <p className="text-sm">559017-4123</p>
          </div>
        </aside>

        <form
          className="md:col-span-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Namn" name="namn" required />
            <Field label="E-post" name="epost" type="email" required />
            <Field label="Telefon" name="telefon" type="tel" />
            <Select label="Typ av ärende" name="arende" options={["Försäkringsskada", "Byggservice", "Offert", "Övrigt"]} />
          </div>
          <Field label="Meddelande" name="meddelande" textarea required />
          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 text-sm tracking-wide hover:bg-ink/85 transition-colors group disabled:opacity-50"
            disabled={sent}
          >
            {sent ? "Tack – vi hör av oss!" : "Skicka meddelande"}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
          </button>
          {sent && (
            <p className="text-sm text-muted-foreground">
              Vi återkommer normalt inom en arbetsdag.
            </p>
          )}
        </form>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls = "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors";
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls + " mt-2 resize-none"} />
      ) : (
        <input name={name} type={type} required={required} className={cls + " mt-2"} />
      )}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <select name={name} className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base mt-2">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
