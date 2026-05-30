const GH = "https://raw.githubusercontent.com/radwanmasri1962-bit/one-o-wander-v3/main/public/assets/experiencias";

const items = [
  { title: "Escapadas en Grupo", img: `${GH}/Escapadas_en_Grupo.jpg` },
  { title: "Lunas de Miel", img: `${GH}/Luna_De_Miel.jpg` },
  { title: "Bodas y Celebraciones", img: `${GH}/Bodas_y_Celebraciones.jpg` },
  { title: "Aventura y Naturaleza", img: `${GH}/Aventura_y_Naturaleza.jpg` },
  { title: "Gastronomía y Cultura", img: `${GH}/Gastrongmi_a_y_Cultura.jpg` },
];

export function Experiences() {
  return (
    <section id="experiencias" className="bg-navy-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="display text-white text-center text-[28px] md:text-[38px] font-semibold">
          ¿Qué tipo de viajero eres?
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
          maxWidth: 1200,
          margin: "56px auto 0",
          padding: "0 24px",
        }}
      >
        {items.map((it) => (
          <article
            key={it.title}
            style={{
              width: 220,
              height: 320,
              borderRadius: 4,
              overflow: "hidden",
              flexShrink: 0,
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
