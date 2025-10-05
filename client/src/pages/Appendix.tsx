import ImageGallery from "@/components/ImageGallery";

export default function Appendix() {
  const installations = [
    {
      src: "/attached_assets/chitradurga_fort.png",
      caption: "Reinstallation of Sri Veerabhadra Swami within the fourth precinct of Chitradurga fort"
    },
    {
      src: "/attached_assets/pancha_pativrata.png",
      caption: "Installation of Pancha Pativrata Shiromanis at Vaddee kere village of Chitradurga district. This and the following yagna brought torrential rains to Chitradurga district which was drought ridden for 13 continuous years"
    },
    {
      src: "/attached_assets/hebbya_bhoomi_puja.png",
      caption: "Bhoomi puja of Matha Gandhareshwari temple at Hebbya, Mysuru was performed by Sri Vishwesha Thirtha swami"
    },
    {
      src: "/attached_assets/border_yagna.png",
      caption: "Rajasuya Maha Yagna was conducted at 8 places bordering India to protect our nation from the threats of neighboring hostile countries and terrorists"
    },
    {
      src: "/attached_assets/army_camps.png",
      caption: "Rajasuya Maha Yagna at army camps in Ladakh, Tawang and Kargil for the well being of our soldiers at the borders and create an energy shield to protect the borders from enemy attacks"
    },
    {
      src: "/attached_assets/jammu_temple.png",
      caption: "Amithaab ji and his team built a temple of Adi Rakshana Jwala Narasimhini Prathyangire and Adi Rakshana Jwala Narasimha in Jammu"
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
              Installations and Consecrations
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-installations-description">
              These installations and consecrations were conducted across Karnataka in congregation with WE Trust, 
              another spiritual-mystic organization dedicated to heal mother earth.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-installations-significance">
              From historical fortifications like Chitradurga to sacred temple complexes at Hebbya, each site serves 
              as an anchor point for spiritual energy transmission. The installations include consecrated Shiva Linghas, 
              yagna kundalas (fire altars), and deity installations that work synergistically to create a protective 
              energy shield around our motherland while radiating positive vibrations globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
