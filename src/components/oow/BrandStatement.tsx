export function BrandStatement() {
  return (
    <section id="nosotros" className="bg-white py-14 md:py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <span className="font-display italic text-[120px] leading-[0.8] text-accent select-none">
            "
          </span>
          <p className="font-display italic text-[32px] md:text-[38px] leading-[1.5] text-navy text-center max-w-[700px]">
            Cada viaje, una historia que solo tú vivirás.
          </p>
          <span className="font-display italic text-[120px] leading-[0.8] text-accent select-none">
            "
          </span>
          <p className="italic text-base text-accent mt-4">
            — Alejandra
          </p>
        </div>

        <a
          href="#proceso"
          className="inline-block mt-12 text-accent text-sm uppercase tracking-[0.18em] border-b border-accent pb-1 hover:opacity-80 transition-opacity"
        >
          Conoce Cómo Trabajamos
        </a>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const stats = [
    "12 personas máximo por grupo",
    "5 continentes · destinos curados",
    "Grupos pequeños · Experiencias grandes",
    "Diseñado para ti, desde cero",
  ];
  return (
    <section className="bg-navy-deep py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
        {stats.map((s, i) => (
          <div
            key={s}
            className={`text-center text-white text-[13px] uppercase tracking-[0.18em] px-4 ${
              i < stats.length - 1 ? "md:border-r md:border-white/15" : ""
            }`}
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
