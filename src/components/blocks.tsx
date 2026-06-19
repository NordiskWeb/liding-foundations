import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="md:col-span-4">
              {eyebrow && <p className="eyebrow text-muted-foreground">{eyebrow}</p>}
            </div>
            <div className="md:col-span-8 max-w-3xl">
              {title && (
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  {title}
                </h2>
              )}
              {intro && <div className="mt-6 text-lg text-foreground/75 leading-relaxed">{intro}</div>}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="pt-32 md:pt-44 pb-20 md:pb-28 border-b border-border">
      <div className="container-x grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow text-muted-foreground">{eyebrow}</p>
        </div>
        <div className="md:col-span-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function CTA({
  to,
  href,
  children,
  variant = "primary",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const cls =
    variant === "primary"
      ? "inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-sm tracking-wide hover:bg-ink/85 transition-colors group"
      : "inline-flex items-center gap-3 border border-ink/25 text-ink px-7 py-4 text-sm tracking-wide hover:border-ink hover:bg-ink hover:text-paper transition-all group";
  const inner = (
    <>
      {children}
      <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
    </>
  );
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <Link to={to!} className={cls}>{inner}</Link>;
}

export function ContactCTA() {
  return (
    <section className="bg-ink text-paper">
      <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="eyebrow text-paper/55 mb-6">Kontakt</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Berätta om ditt projekt eller din skada – vi hjälper dig vidare.
          </h2>
        </div>
        <div className="md:col-span-5 flex flex-col justify-end gap-6 text-paper/85">
          <p className="text-base leading-relaxed">
            Ring, mejla eller fyll i formuläret. Vi återkommer skyndsamt och samordnar
            hela återställningen åt dig – från skadebesiktning till godkänd slutbesiktning.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/kontakt" className="inline-flex items-center gap-3 bg-paper text-ink px-7 py-4 text-sm tracking-wide hover:bg-paper/85 transition-colors group">
              Kontakta oss
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
            <a href="tel:+4681215501" className="inline-flex items-center gap-3 border border-paper/30 px-7 py-4 text-sm tracking-wide hover:border-paper hover:bg-paper/10 transition-colors">
              +46 8 121 555 01
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CircuraBlock() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-x grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="eyebrow text-muted-foreground mb-6">Koncern</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Liding Byggentreprenad AB är en del av <em className="italic">Circura AB</em>.
          </h2>
        </div>
        <div className="md:col-span-5 text-foreground/75 leading-relaxed space-y-5">
          <p>
            Circura är en nordisk koncern som förenar lokalt marknadsledande bolag
            specialiserade inom renovering av byggnader och infrastruktur, byggservice
            och försäkringsskador.
          </p>
          <p>
            Vi arbetar kundnära och decentraliserat – med det stora företagets resurser,
            arbetssätt och kompetenser bakom oss.
          </p>
          <p className="pt-4 eyebrow text-muted-foreground">Lokalt engagemang. Större resurser.</p>
        </div>
      </div>
    </section>
  );
}
