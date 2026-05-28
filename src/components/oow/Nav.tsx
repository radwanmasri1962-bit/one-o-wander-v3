import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Destinos", href: "#destinos" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-navy-deep/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img
              src="/assets/logo-white.png"
              alt="One O Wander"
              className="h-8 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <span
              className="display text-white text-lg tracking-[0.3em] hidden"
              aria-hidden
            >
              ONE O WANDER
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/85 hover:text-white text-[13px] uppercase tracking-[0.18em] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-accent hover:bg-accent/90 text-white text-[13px] uppercase tracking-[0.18em] px-6 py-3 transition-colors"
            >
              Planear mi Viaje
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-navy-deep flex flex-col">
          <div className="h-20 px-6 flex items-center justify-between">
            <span className="display text-white text-lg tracking-[0.3em]">ONE O WANDER</span>
            <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Cerrar menú">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 text-2xl font-display uppercase tracking-[0.18em]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 bg-accent text-white text-sm uppercase tracking-[0.18em] px-8 py-4"
            >
              Planear mi Viaje
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
