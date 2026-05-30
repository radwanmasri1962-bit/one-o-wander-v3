const items = [
  { title: "Escapadas en Grupo", img: "/assets/experiencias/Escapadas_en_Grupo.jpg" },
  { title: "Lunas de Miel", img: "/assets/experiencias/Luna_De_Miel.jpg" },
  { title: "Bodas y Celebraciones", img: "/assets/experiencias/Bodas_y_Celebraciones.jpg" },
  { title: "Aventura y Naturaleza", img: "/assets/experiencias/Aventura_y_Naturaleza.jpg" },
  { title: "Gastronomía y Cultura", img: "/assets/experiencias/Gastronomia_y_Cultura.jpg" },
];

export function Experiences() {
  return (
    <section id="experiencias" className="bg-navy-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="display text-white text-center text-[28px] md:text-[38px] font-semibold">
          ¿Qué tipo de viajero eres?
        </h2>
      </div>

      <div className="exp-scroll">
        <style>{`
          .exp-scroll {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: stretch;
            gap: 16px;
            max-width: 1200px;
            margin: 56px auto 0;
            padding: 0 24px;
          }
          @media (max-width: 768px) {
            .exp-scroll {
              justify-content: flex-start;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              padding: 0 24px 8px;
            }
            .exp-scroll > article { scroll-snap-align: start; }
          }
          .exp-scroll::-webkit-scrollbar { display: none; }
          .exp-scroll { scrollbar-width: none; }
        `}</style>
        {items.map((it) => (
          <article
            key={it.title}
            style={{
              flex: "0 0 200px",
              width: 200,
              height: 300,
              borderRadius: 8,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={it.img}
              alt={it.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
