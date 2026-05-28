import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Alejandra lo organizó todo perfectamente. Solo tuve que aparecer y disfrutar.",
    name: "María G.",
    route: "Cancun → Estambul",
  },
  {
    quote: "El grupo era pequeño, la atención era total. No volvería a viajar de otra manera.",
    name: "Roberto M.",
    route: "CDMX → Marruecos",
  },
  {
    quote: "Nuestra luna de miel fue exactamente lo que soñamos. Cada detalle, perfecto.",
    name: "Sofía & Diego",
    route: "Guadalajara → Maldivas",
  },
  {
    quote: "Un viaje que cambió mi forma de ver el mundo.",
    name: "Claudia R.",
    route: "Monterrey → Patagonia",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow">Lo Que Dicen</p>
          <h2 className="display text-navy text-[28px] md:text-[38px] mt-3 font-semibold">
            Viajeros que lo vivieron.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="border border-hairline p-8 md:p-10 bg-offwhite/50"
            >
              <div className="font-display text-accent text-6xl leading-none">“</div>
              <p className="mt-2 font-body italic text-body text-[16px] leading-[1.7]">
                {t.quote}
              </p>
              <div className="mt-6 font-body font-bold text-navy text-[14px]">
                {t.name} <span className="font-normal text-muted-ink">· {t.route}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-2">
          <div className="flex gap-1 text-[#E8B339]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-[12px] uppercase tracking-[0.2em] text-muted-ink">
            Experiencias verificadas
          </p>
        </div>
      </div>
    </section>
  );
}
