import { useEffect, useState } from "react";

const slides = [
  { src: "/assets/hero/marrakesh-outdoor.png", alt: "Marrakesh outdoor wedding sunset" },
  { src: "/assets/hero/maldives.png", alt: "Maldives overwater villa sunrise" },
  { src: "/assets/hero/kenya-safari.png", alt: "Kenya safari golden hour" },
  { src: "/assets/hero/norway-fjords.png", alt: "Norway fjords summer" },
  { src: "/assets/hero/sri-lanka-villa.png", alt: "Sri Lanka private villa" },
  { src: "/assets/hero/greek-islands.png", alt: "Greek Islands day party yacht" },
  { src: "/assets/hero/amalfi-cooking.png", alt: "Amalfi cooking class" },
  { src: "/assets/hero/tokyo-night.png", alt: "Tokyo back street night" },
];

const DURATION = 5000;
const FADE = 1200;

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), DURATION);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-navy-deep">
      {slides.map((s, idx) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: idx === i ? 1 : 0,
            transitionDuration: `${FADE}ms`,
            backgroundImage: `url(${s.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={idx !== i}
        />
      ))}

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 px-6 text-center">
        <h1 className="display text-white font-semibold text-[40px] md:text-[72px] leading-[1.05]">
          No reservas un viaje.
        </h1>
        <p className="mt-3 font-display italic text-white/90 text-[28px] md:text-[48px] leading-tight">
          Vives uno.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#destinos"
            className="border border-white text-white text-[13px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-white hover:text-navy transition-colors"
          >
            Explorar Destinos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir a slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === i ? "w-8 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
