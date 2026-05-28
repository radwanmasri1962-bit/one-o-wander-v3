const steps = [
  {
    n: "01",
    img: "/assets/story/hero-1-planning.jpg",
    title: "Tú sueñas",
    desc: "Nos cuentas a dónde quieres ir y cómo quieres sentirte.",
  },
  {
    n: "02",
    img: "/assets/story/hero-2-planning-board.jpg",
    title: "Nosotros diseñamos",
    desc: "Creamos un itinerario desde cero, hecho para ti.",
  },
  {
    n: "03",
    img: "/assets/story/hero-3-arrival.jpg",
    title: "Te recibimos",
    desc: "Estamos ahí cuando llegas. En persona.",
  },
  {
    n: "04",
    img: "/assets/story/hero-4-snorkeling.jpg",
    title: "Vives el viaje",
    desc: "Cada momento, curado. Nada al azar.",
  },
  {
    n: "05",
    img: "/assets/story/hero-5-dinner.jpg",
    title: "Lo recordarás siempre",
    desc: "Porque no fue un viaje. Fue una experiencia.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow">El Proceso</p>
          <h2 className="display text-navy text-[28px] md:text-[38px] mt-3 font-semibold">
            Así diseñamos tu viaje.
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex md:gap-10 gap-6 px-6 md:px-12 pb-6 md:pb-0 md:flex-row flex-col md:items-stretch">
          {steps.map((s) => (
            <article
              key={s.n}
              className="flex-shrink-0 md:w-[320px] w-full"
            >
              <div className="flex items-end gap-4 mb-4">
                <span
                  className="font-display text-[80px] leading-none"
                  style={{ color: "var(--hairline)" }}
                >
                  {s.n}
                </span>
              </div>
              <div
                className="w-full aspect-[4/5] bg-cover bg-center bg-navy"
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <h3 className="mt-6 font-display text-navy text-2xl">{s.title}</h3>
              <p className="mt-2 text-body text-[15px] leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
