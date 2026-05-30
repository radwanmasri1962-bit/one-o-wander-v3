import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/oow/Nav";
import { Hero } from "@/components/oow/Hero";
import { MiniTripBar } from "@/components/oow/MiniTripBar";
import { BrandStatement, TrustStrip } from "@/components/oow/BrandStatement";
import { RivieraMayaSection } from "@/components/oow/RivieraMayaSection";
import { Destinations } from "@/components/oow/Destinations";
import { Process } from "@/components/oow/Process";
import { Experiences } from "@/components/oow/Experiences";
import { Testimonials } from "@/components/oow/Testimonials";
import { CtaBlock } from "@/components/oow/CtaBlock";
import { Footer } from "@/components/oow/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One O Wander · No reservas un viaje. Vives uno." },
      {
        name: "description",
        content:
          "Viajes boutique de lujo diseñados desde cero para grupos pequeños. Experiencias únicas en Estambul, París, Patagonia, Maldivas, Marruecos y más.",
      },
      { property: "og:title", content: "One O Wander · No reservas un viaje. Vives uno." },
      {
        property: "og:description",
        content:
          "Viajes boutique de lujo diseñados desde cero para grupos pequeños desde México.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-body">
      <Nav />
      <Hero />
      <BrandStatement />
      <TrustStrip />
      <Process />
      <MiniTripBar />
      <RivieraMayaSection />
      <Destinations />
      <Experiences />
      <Testimonials />
      <CtaBlock />
      <Footer />
    </main>
  );
}
