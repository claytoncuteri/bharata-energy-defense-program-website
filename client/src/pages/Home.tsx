import { Link } from "wouter";
import Hero from "@/components/Hero";
import HighlightCard from "@/components/HighlightCard";
import { Button } from "@/components/ui/button";
import { Flame, TreePine, Building2, Shield, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" data-testid="text-vision-title">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-vision-description">
              Chola Mandala Mahaa Samsthaanam is a congregation of royal families, spiritual gurus, 
              and social activists dedicated to reestablishing Bharata in its full glory. Through 
              spiritual-mystic processes and socio-political initiatives, we protect our motherland 
              and balance planetary energies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" data-testid="text-achievements-title">
            Key Achievements Since 2005
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HighlightCard
              icon={Flame}
              title="4500+ Maha Yagnas"
              description="Sacred fire rituals conducted to protect Bharata from nuclear threats and balance cosmic energies worldwide."
            />
            <HighlightCard
              icon={Building2}
              title="54 Shiva Lingha Installations"
              description="Temple consecrations and spiritual installations across national and international locations."
            />
            <HighlightCard
              icon={TreePine}
              title="1 Million+ Trees"
              description="Massive tree plantation drives contributing to environmental restoration and spiritual balance."
            />
            <HighlightCard
              icon={Shield}
              title="Border Protection"
              description="Conducted sacred yagnas at 8 strategic border locations to create energy shields protecting India."
            />
            <HighlightCard
              icon={Globe}
              title="Global Impact"
              description="Prevented economic catastrophes, enabled rainfall in drought areas, and influenced global stability."
            />
            <HighlightCard
              icon={Sparkles}
              title="Divine Ordainment"
              description="Operating under divine guidance to protect humanity from negative energies and planetary disasters."
            />
          </div>
        </div>
      </section>

      {/* Timeline Highlights */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" data-testid="text-timeline-highlights-title">
            Major Milestones
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2" data-testid="text-milestone-2005">2005 - Foundation</h3>
              <p className="text-muted-foreground">
                Registered Akhila Vishw Bharathiya Seva Samaj and initiated the sacred Rajasuya Maha Yagna 
                to prevent nuclear warfare and protect Mother Nature.
              </p>
            </div>
            <div className="border-l-4 border-chart-2 pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2" data-testid="text-milestone-2007">2007 - Beggar-Free Mysuru</h3>
              <p className="text-muted-foreground">
                At age 23, Prince Amithaab successfully eliminated beggary in Mysuru through rehabilitation 
                and employment, ending child trafficking and poverty crimes.
              </p>
            </div>
            <div className="border-l-4 border-chart-1 pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2" data-testid="text-milestone-2012">2012 - Border Defense</h3>
              <p className="text-muted-foreground">
                Conducted Rajasuya Maha Yagna at 8 strategic border locations from Jammu to Lakshadweep, 
                creating spiritual energy shields for national protection.
              </p>
            </div>
            <div className="border-l-4 border-chart-3 pl-6 py-4">
              <h3 className="text-xl font-semibold mb-2" data-testid="text-milestone-2013">2013 - Army Support</h3>
              <p className="text-muted-foreground">
                Performed sacred rituals at army camps in Ladakh, Tawang, and Kargil with military supervision, 
                strengthening border defenses through spiritual energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-1/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" data-testid="text-cta-title">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-cta-description">
            Support the Bharata Energy Defence Program in protecting our nation through spiritual power. 
            With just 0.000001% of the national defense budget, we can achieve complete protection 
            and planetary balance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/downloads">
              <Button size="lg" data-testid="button-download-cta">
                Download Full Proposal
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-contact-cta">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
