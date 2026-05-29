import { createFileRoute, notFound } from "@tanstack/react-router";
import { JourneyPage } from "@/components/oow/JourneyPage";
import { destinations } from "@/components/oow/destinations-data";
import { Footer } from "@/components/oow/Footer";

export const Route = createFileRoute("/destinos/$slug")({
  head: ({ params }) => {
    const d = destinations[params.slug];
    if (!d) return { meta: [{ title: "Destino · One O Wander" }] };
    return {
      meta: [
        { title: `${d.name} · One O Wander` },
        { name: "description", content: d.headline },
        { property: "og:title", content: `${d.name} · One O Wander` },
        { property: "og:description", content: d.headline },
        { property: "og:image", content: d.heroImg },
        { name: "twitter:image", content: d.heroImg },
      ],
    };
  },
  loader: ({ params }) => {
    const d = destinations[params.slug];
    if (!d) throw notFound();
    return { d };
  },
  component: DestinoPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-navy-deep text-white">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Destino no encontrado</h1>
        <a href="/" className="text-accent uppercase tracking-[0.18em] text-sm">Volver al inicio</a>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-navy-deep text-white">
      <div className="text-center">
        <h1 className="font-display text-3xl mb-4">Algo salió mal</h1>
        <a href="/" className="text-accent uppercase tracking-[0.18em] text-sm">Volver al inicio</a>
      </div>
    </div>
  ),
});

function DestinoPage() {
  const { d } = Route.useLoaderData();
  return (
    <>
      <JourneyPage d={d} />
      <Footer />
    </>
  );
}
