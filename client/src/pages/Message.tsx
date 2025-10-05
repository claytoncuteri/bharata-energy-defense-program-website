import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function Message() {
  return (
    <div className="min-h-screen py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8" data-testid="text-page-title">
            Message to the Reader
          </h1>

          <div className="space-y-8">
            {/* Main Message */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-1/10 rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary" data-testid="text-call-to-action-title">
                  A Sacred Call to Action
                </h2>
                <p className="text-lg leading-relaxed mb-6" data-testid="text-message-1">
                  We stand at a critical juncture in human history. The threat of nuclear conflict looms larger 
                  than ever before, environmental catastrophes accelerate, and negative energies threaten to 
                  overwhelm our planet. But there is hope – a proven spiritual technology that has protected 
                  Bharata and influenced global events for nearly two decades.
                </p>
                <p className="text-lg leading-relaxed mb-6" data-testid="text-message-2">
                  The Chola Mandala Mahaa Samsthaanam offers not just prayers, but measurable results. Our 4500+ 
                  Maha Yagnas have prevented conflicts, brought rainfall to drought-stricken regions, influenced 
                  economic patterns to reduce inequality, and created protective energy shields around our borders. 
                  All of this verified by government officials, military personnel, and independent observers.
                </p>
                <p className="text-lg leading-relaxed" data-testid="text-message-3">
                  We seek your support – not just financial, but spiritual participation. Together, we can expand 
                  our network of energy installations, complete critical temple projects like the Matha 
                  Gandhareshwari Temple at Hebbya, and create an impenetrable spiritual defense for our nation.
                </p>
              </div>

              {/* Nuclear Prevention */}
              <div className="bg-card rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-nuclear-prevention-title">
                  Nuclear War Prevention Through Spiritual Energy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-nuclear-prevention-1">
                  The greatest threat to humanity is not visible weapons, but the invisible intentions that manifest 
                  them. Our Rajasuya Maha Yagna directly addresses the root cause – negative cosmic energies and 
                  hostile intentions at the subtle plane. By neutralizing these forces before they crystallize into 
                  physical conflict, we prevent wars without firing a single bullet.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-nuclear-prevention-2">
                  The incomplete Matha Gandhareshwari Temple represents the missing key to total protection. According 
                  to divine ordinance, this temple must be completed to fully neutralize Matha Gandhari's ancient curse 
                  that threatens nuclear annihilation. This is not mythology – it is energetic reality operating through 
                  cosmic law.
                </p>
              </div>

              {/* Temple Proposal */}
              <div className="bg-card rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-temple-proposal-title">
                  The Temple Project: A National Priority
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-temple-proposal-1">
                  We urgently call upon the Government of India, defense establishments, and conscious citizens to 
                  support the completion of the Matha Gandhareshwari Temple at Hebbya, Mysuru. This is not merely a 
                  religious structure – it is a strategic defense installation operating on spiritual dimensions.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-temple-proposal-2">
                  With less than 0.000001% of the national defense budget, we can achieve what conventional weapons 
                  cannot – total protection from nuclear threats, economic destabilization of enemy nations, 
                  environmental restoration, and cosmic balance. This represents the most cost-effective defense 
                  investment in history.
                </p>
              </div>

              {/* Closing Appeal */}
              <div className="text-center bg-gradient-to-r from-primary/20 to-chart-1/20 rounded-lg p-8">
                <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-closing-title">
                  Join Us in Protecting Bharata
                </h2>
                <p className="text-lg text-muted-foreground mb-8" data-testid="text-closing-message">
                  Whether through financial support, spiritual participation in our yagnas, or spreading awareness 
                  of this critical work – your involvement can help save not just our nation, but our entire planet. 
                  The time for action is now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/downloads">
                    <Button size="lg" data-testid="button-download-full-proposal">
                      <Download className="mr-2 w-5 h-5" />
                      Download Full Proposal
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" data-testid="button-contact-us">
                      <Mail className="mr-2 w-5 h-5" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
