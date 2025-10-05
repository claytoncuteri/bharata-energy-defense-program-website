import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-testid="text-page-title">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground mb-12" data-testid="text-page-subtitle">
            Get in touch with us for inquiries, support, or collaboration opportunities
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-serif font-semibold mb-6" data-testid="text-contact-info-title">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" data-testid="text-address-title">Address</h4>
                      <p className="text-sm text-muted-foreground" data-testid="text-address-content">
                        Hebbya, Chikkayyana Chatra Hobli<br />
                        Nanjangud Taluk<br />
                        Mysore District, Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-chart-2" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" data-testid="text-phone-title">Phone</h4>
                      <p className="text-sm text-muted-foreground" data-testid="text-phone-content">
                        +91 636 421 4919
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-chart-1/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-chart-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" data-testid="text-email-title">Email</h4>
                      <p className="text-sm text-muted-foreground" data-testid="text-email-content">
                        susharadhya14@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-chart-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" data-testid="text-hours-title">Response Time</h4>
                      <p className="text-sm text-muted-foreground" data-testid="text-hours-content">
                        We respond to all inquiries<br />
                        within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-chart-1/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3" data-testid="text-official-inquiries-title">
                  Official Inquiries
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="text-official-inquiries-content">
                  Government officials and defense personnel seeking detailed briefings should mention 
                  their designation and purpose in the message for priority response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
