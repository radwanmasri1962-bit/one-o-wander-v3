import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function RivieraMayaSection() {
  const [hover, setHover] = useState(false);
  return (
    <section style={{ minHeight: 520 }} className="grid grid-cols-1 md:grid-cols-2">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=900&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 520,
        }}
        aria-label="Riviera Maya"
      />
      <div
        style={{ background: "#0F1E2E", padding: "80px 64px" }}
        className="flex flex-col justify-center"
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
      </div>
    </section>
  );
}
