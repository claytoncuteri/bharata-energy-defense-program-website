import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-chart-2 to-chart-1 opacity-90" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight" data-testid="text-hero-title">
          Protecting Bharata Through Spiritual Energy
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          Since 2005, Chola Mandala Mahaa Samsthaanam has conducted over 4500 Maha Yagnas, 
          54 Shiv Lingh installations, and millions of tree plantations to protect our motherland 
          and balance planetary energies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/executive">
            <Button 
              size="lg" 
              className="text-lg px-8"
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/downloads">
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-download-proposal"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Proposal
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
