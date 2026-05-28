import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img
            src="/assets/logo-white.png"
            alt="One O Wander"
            className="h-7 w-auto"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const f = e.currentTarget.nextElementSibling as HTMLElement | null;
              if (f) f.style.display = "block";
            }}
          />
          <span className="display text-white text-base tracking-[0.3em] hidden">ONE O WANDER</span>

          <nav className="flex flex-wrap gap-6 md:gap-10 justify-center">
            {["Destinos", "Experiencias", "Nosotros", "Planear mi Viaje"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/80 hover:text-white text-[12px] uppercase tracking-[0.18em] transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          <p className="text-muted-ink text-[11px] font-body">Powered by JARA AI</p>
        </div>

        <div className="my-12 h-px bg-white/15" />

        <p className="text-center font-display italic text-white/70 text-[20px] md:text-[22px]">
          “No reservas un viaje. Vives uno.”
        </p>

        <div className="my-12 h-px bg-white/15" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-white/60">
          <p>© 2026 One O Wander · Cancun, México</p>
          <a
            href="#"
            className="hover:text-white transition-colors tracking-wide"
          >
            WhatsApp · +52 998 000 0000
          </a>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-white transition-colors text-[12px]">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
