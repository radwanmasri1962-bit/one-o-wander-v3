import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/oow/Nav";
import { Hero } from "@/components/oow/Hero";
import { BrandStatement, TrustStrip } from "@/components/oow/BrandStatement";
import { Destinations } from "@/components/oow/Destinations";
import { Process } from "@/components/oow/Process";
import { Experiences } from "@/components/oow/Experiences";
import { Testimonials } from "@/components/oow/Testimonials";
import { InquiryForm } from "@/components/oow/InquiryForm";
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
      <Destinations />
      <Process />
      <Experiences />
      <Testimonials />
      <InquiryForm />
      <Footer />
    </main>
  );
}
