export default function Convenor() {
  return (
    <div className="min-h-screen py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12" data-testid="text-page-title">
            About the Chief Convenor
          </h1>

          {/* Main Bio Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-chart-1/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-primary">PA</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold" data-testid="text-convenor-name">Prince A Amithaab</h3>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-convenor-title">Chief Convenor</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-biography-title">Biography</h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-biography-1">
                  Prince A Amithaab is a spiritual leader, social reformer, and the Chief Convenor of Chola Mandala 
                  Mahaa Samsthaanam. Following divine ordainment in 2005, he founded 'Akhila Vishw Bharathiya Seva 
                  Samaj' and began the sacred Rajasuya Maha Yagna to protect Bharata and the planet from nuclear 
                  destruction and negative energies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-biography-2">
                  At just 23 years of age, the Prince demonstrated exceptional leadership by successfully implementing 
                  the 'Beggar-Free Mysuru' project, which eliminated beggary in the heritage city through comprehensive 
                  rehabilitation and employment programs. This initiative ended child trafficking, begging mafias, and 
                  poverty-driven crimes, earning official recognition from the Mysuru Deputy Commissioner's office.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-biography-3">
                  Through his unique combination of royal lineage, spiritual prowess, and social consciousness, Prince 
                  Amithaab has led over 4500 Maha Yagnas, 54 temple installations, and numerous national and 
                  international spiritual missions. His work has been witnessed and verified by government ministers, 
                  military personnel, media, and scientific communities.
                </p>
              </div>
            </div>
          </div>

          {/* Royal Lineage */}
          <div className="bg-card rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-serif font-semibold mb-6" data-testid="text-lineage-title">
              Royal Lineage & Spiritual Heritage
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed" data-testid="text-lineage-1">
                Prince A Amithaab hails from the distinguished Chola dynasty, one of the longest-ruling dynasties in 
                world history. The Chola kings were renowned not only for their administrative excellence and military 
                prowess but also for their deep spiritual wisdom and patronage of arts and temples.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-lineage-2">
                The Chola Mandala Mahaa Samsthaanam represents a continuation of this ancient tradition, combining 
                royal responsibility with spiritual service. The lineage carries the sacred duty of protecting Bharata 
                through both temporal and mystical means, as evidenced by the successful execution of the Rajasuya 
                Maha Yagna – a ritual historically performed only by the greatest spiritual warriors.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-lineage-3">
                Under divine guidance, Prince Amithaab channels this ancestral wisdom and cosmic connection to serve 
                humanity, operating at the intersection of ancient spiritual sciences and modern global challenges.
              </p>
            </div>
          </div>

          {/* Key Qualities */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-6" data-testid="text-qualities-title">
              Key Qualities & Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-lg font-semibold mb-2" data-testid="text-quality-spiritual">Spiritual Mastery</h3>
                <p className="text-sm text-muted-foreground">
                  Conducts complex sacred rituals and maintains cosmic connections for planetary protection
                </p>
              </div>
              <div className="border-l-4 border-chart-2 pl-6 py-4">
                <h3 className="text-lg font-semibold mb-2" data-testid="text-quality-social">Social Reform</h3>
                <p className="text-sm text-muted-foreground">
                  Implements practical solutions to societal problems through compassionate action
                </p>
              </div>
              <div className="border-l-4 border-chart-1 pl-6 py-4">
                <h3 className="text-lg font-semibold mb-2" data-testid="text-quality-diplomatic">Diplomatic Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Engages with international leaders and military for strategic spiritual defense
                </p>
              </div>
              <div className="border-l-4 border-chart-3 pl-6 py-4">
                <h3 className="text-lg font-semibold mb-2" data-testid="text-quality-environmental">Environmental Guardian</h3>
                <p className="text-sm text-muted-foreground">
                  Leads massive tree plantation and ecological restoration initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
