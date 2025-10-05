import { Link } from "wouter";
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary font-serif">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link href="/executive" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-executive">
                Executive Summary
              </Link>
              <Link href="/past-timeline" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-timeline">
                Past Timeline
              </Link>
              <Link href="/downloads" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-downloads">
                Downloads
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary font-serif">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Hebbya, Chikkayyana Chatra Hobli, Nanjangud Taluk, Mysore District</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 636 421 4919</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>susharadhya14@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary font-serif">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 flex items-center justify-center text-secondary-foreground transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 flex items-center justify-center text-secondary-foreground transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-secondary hover-elevate active-elevate-2 flex items-center justify-center text-secondary-foreground transition-colors"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chola Mandala Mahaa Samsthaanam. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Mother Sonia Gandhi World Welfare Committee - Unit of Akhila Vishw Bharathiya Seva Samaj Trust
          </p>
        </div>
      </div>
    </footer>
  );
}
