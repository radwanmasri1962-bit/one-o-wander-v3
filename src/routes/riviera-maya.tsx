import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/oow/Nav";
import { Footer } from "@/components/oow/Footer";

export const Route = createFileRoute("/riviera-maya")({
  head: () => ({
    meta: [
      { title: "Riviera Maya · One O Wander" },
      { name: "description", content: "Tu paraíso caribeño, curado desde adentro. Agencia local en Cancún." },
    ],
  }),
  component: RivieraMayaPage,
});

function RivieraMayaPage() {
  return (
    <main className="bg-white">
      <Nav />
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(15,30,46,0.55)" }} />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p style={{
            fontFamily: '"Raleway", sans-serif', fontWeight: 400,
            textTransform: "uppercase", letterSpacing: "0.2em",
            fontSize: "0.65rem", color: "#609EE7", marginBottom: 20,
          }}>RIVIERA MAYA · CANCÚN</p>
          <h1 style={{
            fontFamily: '"Raleway", sans-serif', fontWeight: 300,
            fontSize: "3rem", color: "white", lineHeight: 1.2, maxWidth: 900,
          }}>Tu paraíso caribeño, curado desde adentro.</h1>
          <p style={{
            fontFamily: '"Raleway", sans-serif', fontWeight: 300,
            fontSize: "1rem", color: "#8AA4BF", marginTop: 24,
          }}>Página completa próximamente. Mientras tanto, contáctanos.</p>
          <Link
            to="/planear-mi-viaje"
            style={{
              marginTop: 40, display: "inline-block",
              background: "#609EE7", color: "white",
              fontFamily: '"Raleway", sans-serif', fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.15em",
              fontSize: "0.75rem", padding: "14px 28px",
              borderRadius: 3, textDecoration: "none",
            }}
          >
            CONTACTAR A ALEJANDRA →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
