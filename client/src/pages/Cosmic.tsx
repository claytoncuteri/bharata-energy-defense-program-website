export default function Cosmic() {
  return (
    <div className="min-h-screen py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-page-title">
            Cosmic Explanations
          </h1>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-page-subtitle">
            Understanding the spiritual technology and cosmic mechanisms behind our work
          </p>

          <div className="space-y-6">
            {/* Spiritual Technology */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-spiritual-tech-title">
                Spiritual Technology & Energy Sciences
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-spiritual-tech-content">
                Ancient Indian wisdom recognized that reality operates on multiple dimensions – physical, energetic, 
                mental, and cosmic. The Rajasuya Maha Yagna and other sacred rituals we perform are not mere symbolic 
                ceremonies, but sophisticated technologies for manipulating subtle energies that govern physical 
                manifestations. Just as modern science understands that matter is condensed energy (E=mc²), ancient 
                rishis understood that physical events are condensations of cosmic intentions and energy patterns.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-spiritual-tech-mechanism">
                Through precise mantras (sound frequencies), sacred geometries (yantras), and focused consciousness, 
                these rituals create powerful energy vortices that can influence weather patterns, economic trends, 
                political events, and even prevent disasters. Our 4500+ yagnas have demonstrated measurable results – 
                rainfall in drought areas, prevention of military conflicts, and economic shifts – all verified by 
                third-party observers including government officials and scientific communities.
              </p>
            </div>

            {/* Cosmic Beings */}
            <div className="bg-gradient-to-br from-chart-1/10 to-primary/10 rounded-lg p-6">
              <h2 className="text-2xl font-serif font-semibold mb-3" data-testid="text-cosmic-beings-title">
                Extraterrestrial Beings as Devathas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-cosmic-beings-content">
                What modern civilization calls "extraterrestrial beings" or "aliens" are what our ancient scriptures 
                always described as Devathas – highly evolved consciousness entities operating across multiple 
                dimensions. These beings possess technologies and abilities far beyond current human comprehension, 
                appearing as divine or supernatural to those unfamiliar with their true nature.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-cosmic-beings-interaction">
                Through our spiritual practices, we have established communication channels with benevolent 
                extra-galactic and inter-stellar beings who are deeply concerned about Earth's current trajectory 
                toward self-destruction. These cosmic guardians work with us to address challenges like global warming, 
                resource depletion, and nuclear threats – problems that transcend human political boundaries and 
                require multi-dimensional solutions. Our yagnas serve as communication protocols and energy offerings 
                that enable this collaboration.
              </p>
            </div>

            {/* Yagnas as Tools */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-yagnas-tools-title">
                Yagnas as Precision Energy Instruments
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-yagnas-tools-content">
                The Rajasuya Maha Yagna is not a general blessing ritual – it is a highly specific energy weapon 
                designed for planetary defense. Historically conducted only by Sri Ramachandra and Matha Chamundeshwari 
                before engaging in righteous warfare, this yagna creates protective energy shields, weakens hostile 
                forces, and ensures victory for dharma (cosmic order). The continuous performance from new moon to 
                full moon creates sustained energy fields that actively counter negative intentions toward Bharata.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-yagnas-tools-results">
                Each yagna is calibrated for specific outcomes – economic destabilization of enemy nations, weather 
                modification for agricultural support, political shifts in hostile governments, and energy protection 
                of military installations. The fire acts as a transformer, converting physical offerings into subtle 
                energy transmissions that ripple across the quantum field, manifesting as physical-world events. This 
                is why our activities show measurable correlation with global events, verified through documented 
                evidence and independent observation.
              </p>
            </div>

            {/* Call to Understanding */}
            <div className="bg-card rounded-lg p-6 text-center mt-8">
              <p className="text-lg italic text-muted-foreground" data-testid="text-closing-quote">
                "When science and spirituality unite, when ancient wisdom meets modern understanding, 
                humanity unlocks its true potential for planetary stewardship and cosmic citizenship."
              </p>
              <p className="text-sm text-muted-foreground mt-4" data-testid="text-closing-signature">
                – Chola Mandala Mahaa Samsthaanam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
