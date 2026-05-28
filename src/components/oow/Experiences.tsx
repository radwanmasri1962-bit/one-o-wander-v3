const items = [
  { title: "Escapadas en Grupo", img: "/assets/experiences/greek-islands.jpg" },
  { title: "Lunas de Miel", img: "/assets/experiences/maldives.jpg" },
  { title: "Bodas y Celebraciones", img: "/assets/experiences/marrakesh-outdoor.jpg" },
  { title: "Aventura y Naturaleza", img: "/assets/experiences/kenya-safari.jpg" },
  { title: "Gastronomía y Cultura", img: "/assets/experiences/amalfi-cooking.jpg" },
];

export function Experiences() {
  return (
    <section id="experiencias" className="bg-navy-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="display text-white text-center text-[28px] md:text-[38px] font-semibold">
          ¿Qué tipo de viajero eres?
        </h2>
      </div>

      <div className="mt-14 overflow-x-auto no-scrollbar">
        <div className="flex gap-5 px-6 md:px-12 min-w-min">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative flex-shrink-0 h-[420px] w-[300px] overflow-hidden bg-navy"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${it.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 transition-opacity group-hover:from-black/90" />
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="font-display text-white text-2xl tracking-wide">{it.title}</h3>
                <span className="mt-3 text-accent text-[12px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
