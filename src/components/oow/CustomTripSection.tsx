import { Link } from "@tanstack/react-router";

const photos = [
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80",
  "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80",
];

export function CustomTripSection() {
  return (
    <section style={{ background: "#F7F9FC", padding: "80px 24px" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 600,
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#609EE7",
              marginBottom: 16,
            }}
          >
            Viajes a medida
          </p>
          <h2
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 300,
              fontSize: "2rem",
              color: "#1E3048",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Diseña tu viaje perfecto.
          </h2>
          <p
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "#4A6280",
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            No hay dos viajes iguales porque no hay dos personas iguales. Cuéntanos quiénes son, adónde quieren ir, y lo que quieren sentir. Alejandra se encarga del resto.
          </p>
          <Link
            to="/planear-mi-viaje"
            style={{
              display: "inline-block",
              background: "#1E3048",
              color: "white",
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.75rem",
              padding: "16px 28px",
              borderRadius: 3,
              textDecoration: "none",
            }}
          >
            Crear mi viaje →
          </Link>
        </div>

        <div className="relative flex justify-center items-center" style={{ minHeight: 420 }}>
          {photos.map((src, i) => {
            const rotations = [-3, 0, 3];
            const offsets = [-40, 0, 40];
            return (
              <img
                key={src}
                src={src}
                alt=""
                style={{
                  position: "absolute",
                  width: 260,
                  height: 340,
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transform: `translateX(${offsets[i]}px) translateY(${i * 8}px) rotate(${rotations[i]}deg)`,
                  zIndex: i,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
