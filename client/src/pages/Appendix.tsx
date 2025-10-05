import ImageGallery from "@/components/ImageGallery";

export default function Appendix() {
  // TODO: Replace with actual PDF extracted images
  const installations = [
    {
      src: "/placeholder-chitradurga.jpg",
      caption: "Chitradurga Fort Installation - Ancient spiritual energy center fortified with modern yagna practices"
    },
    {
      src: "/placeholder-pativrata.jpg",
      caption: "Pancha Pativrata Shiromanis Temple - Sacred site honoring divine feminine energy and devotion"
    },
    {
      src: "/placeholder-hebbya.jpg",
      caption: "Hebbya Temple Complex - Spiritual epicenter where Sri Krishna's divine energy resides"
    },
    {
      src: "/placeholder-border.jpg",
      caption: "Border Yagna Sites - Strategic spiritual defense installations protecting Bharata's frontiers"
    },
    {
      src: "/placeholder-shivling.jpg",
      caption: "Shiv Lingh Consecrations - 54 installations across national and international locations"
    },
    {
      src: "/placeholder-meditation.jpg",
      caption: "Mass Meditation Programs - Collective consciousness activation for global peace"
    }
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-testid="text-page-title">
            Appendix
          </h1>
          <p className="text-lg text-muted-foreground mb-12" data-testid="text-page-subtitle">
            Visual documentation of our spiritual installations and energy centers across Bharata
          </p>

          <ImageGallery images={installations} />

          <div className="mt-16 bg-card rounded-lg p-8">
            <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-installations-title">
              About These Installations
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-installations-description">
              Each installation represents a carefully selected energy vortex point based on ancient Vedic calculations 
              and divine guidance. These locations were chosen for their strategic importance in the cosmic energy grid 
              that protects Bharata and influences global consciousness.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-installations-significance">
              From historical fortifications like Chitradurga to sacred temple complexes at Hebbya, each site serves 
              as an anchor point for spiritual energy transmission. The installations include consecrated Shiv Linghs, 
              yagna kundalas (fire altars), and deity installations that work synergistically to create a protective 
              energy shield around our motherland while radiating positive vibrations globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
