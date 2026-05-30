import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
  "/assets/riviera-maya/Artisan_Market.jpg",
  "/assets/riviera-maya/Family_Inside_Pool.jpg",
  "/assets/riviera-maya/Hotel_Room_Luxury.jpg",
  "/assets/riviera-maya/The_Cenote.jpg",
  "/assets/riviera-maya/Tulum_Mayan_2.jpg",
  "/assets/riviera-maya/Water_Scooter_Pyramid.jpg",
];

function RivieraCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % CAROUSEL_IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 520, overflow: "hidden" }}>
      {CAROUSEL_IMAGES.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(15,30,46,0.15), rgba(15,30,46,0.45)), url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === active ? 1 : 0,
            transition: "opacity 800ms ease-in-out",
          }}
          aria-hidden={i !== active}
        />
      ))}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 8,
          zIndex: 2,
        }}
      >
        {CAROUSEL_IMAGES.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              height: 6,
              width: i === active ? 20 : 6,
              background: i === active ? "white" : "rgba(255,255,255,0.4)",
              borderRadius: i === active ? 100 : "50%",
              transition: "all 300ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function RivieraMayaSection() {
  const [hover, setHover] = useState(false);
  return (
    <section style={{ minHeight: 520 }} className="grid grid-cols-1 md:grid-cols-2 riviera-section">
      <style>{`
        @media (max-width: 768px) {
          .riviera-section .riviera-content { padding: 56px 24px !important; }
          .riviera-section .riviera-logo { width: 140px !important; bottom: 16px !important; right: 16px !important; }
          .riviera-section .riviera-headline { font-size: 1.7rem !important; }
        }
      `}</style>
      <RivieraCarousel />
      <div
        style={{ background: "#0F1E2E", padding: "80px 64px", position: "relative" }}
        className="flex flex-col justify-center riviera-content"
      >
        <p
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: "0.65rem",
            color: "#609EE7",
            marginBottom: 16,
          }}
        >
          RIVIERA MAYA · CANCÚN
        </p>
        <h2
          className="riviera-headline"
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 300,
            fontSize: "2.2rem",
            color: "white",
            lineHeight: 1.3,
          }}
        >
          Tu paraíso caribeño, curado desde adentro.
        </h2>
        <p
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 300,
            fontSize: "0.95rem",
            color: "#8AA4BF",
            lineHeight: 1.8,
            marginTop: 24,
          }}
        >
          Somos una agencia local con base en Cancún. Conocemos la Riviera Maya como nadie — desde los cenotes sagrados hasta las ruinas mayas, los mejores hoteles boutique, excursiones privadas, experiencias gastronómicas, grupos grandes, lunas de miel, y todo lo que este destino tiene para ofrecer. No te enviamos un folleto. Te acompañamos.
        </p>
        <ul
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 300,
            fontSize: "0.85rem",
            color: "#8AA4BF",
            lineHeight: 2,
            marginTop: 24,
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>· Paquetes vacacionales a medida</li>
          <li>· Hoteles boutique y todo incluido seleccionados</li>
          <li>· Excursiones privadas: Chichén Itzá, cenotes, Tulum</li>
          <li>· Grupos grandes y viajes corporativos</li>
          <li>· Coordinación completa desde la llegada</li>
        </ul>
        <Link
          to="/riviera-maya"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            marginTop: 40,
            display: "inline-block",
            alignSelf: "flex-start",
            background: hover ? "#609EE7" : "transparent",
            border: "1px solid #609EE7",
            color: hover ? "white" : "#609EE7",
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "0.75rem",
            padding: "14px 28px",
            borderRadius: 3,
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          DESCUBRE NUESTRA RIVIERA MAYA →
        </Link>
        <img
          src="/assets/riviera-maya/Riviera_Maya_Logo_Dark_Background.jpg"
          alt="Riviera Maya"
          className="riviera-logo"
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            width: 220,
            height: "auto",
            objectFit: "contain",
            padding: 12,
            background: "transparent",
            border: "none",
          }}
        />

      </div>
    </section>
  );
}
