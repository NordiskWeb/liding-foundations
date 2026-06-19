import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logoBlack from "@/assets/liding-logo-black.png.asset.json";
import logoWhite from "@/assets/liding-logo-white.png.asset.json";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/tjanster", label: "Tjänster" },
  { to: "/forsakringsskador", label: "Försäkringsskador" },
  { to: "/referenser", label: "Referenser" },
  { to: "/medarbetare", label: "Medarbetare" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/85 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logoBlack.url} alt="Liding Byggentreprenad AB" className="h-9 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-[13px] tracking-wide hover:bg-ink/85 transition-colors"
          >
            Kontakta oss
            <span aria-hidden>→</span>
          </Link>
          <button
            aria-label="Meny"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 inline-flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper mt-32">
      <div className="container-x py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logoWhite.url} alt="Liding" className="h-10 w-auto mb-6 opacity-90" />
          <p className="text-paper/70 max-w-md leading-relaxed text-sm">
            Liding Byggentreprenad AB är en byggentreprenör med spetskompetens inom
            försäkringsärenden. Vi hjälper försäkringsbolag, fastighetsägare,
            bostadsrättsföreningar och privatpersoner i Storstockholm och Uppsala.
          </p>
          <p className="mt-8 text-xs tracking-[0.22em] uppercase text-paper/50">
            En del av Circura AB
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-paper/50 mb-5">Navigera</p>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-underline text-paper/85 hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-paper/50 mb-5">Kontakt</p>
          <address className="not-italic text-sm leading-relaxed text-paper/85 space-y-1">
            <div>Spjutvägen 5H</div>
            <div>175 61 Järfälla, Stockholm</div>
            <div className="pt-3">
              <a href="tel:+4681215501" className="link-underline">+46 8 121 555 01</a>
            </div>
            <div>
              <a href="mailto:kontakt@liding.se" className="link-underline">kontakt@liding.se</a>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/55">
          <p>© {new Date().getFullYear()} Liding Byggentreprenad AB. Alla rättigheter förbehållna.</p>
          <p>Org.nr 559017-4123 · BKMA-certifierade</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
