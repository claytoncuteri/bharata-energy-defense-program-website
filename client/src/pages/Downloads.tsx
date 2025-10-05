import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export default function Downloads() {
  return (
    <div className="min-h-screen py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3" data-testid="text-page-title">
            Downloads
          </h1>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-page-subtitle">
            Access our comprehensive documentation and proposal materials
          </p>

          <div className="max-w-2xl mx-auto">
            {/* Main Proposal */}
            <Card className="hover-elevate transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif" data-testid="text-main-proposal-title">
                  Bharata Energy Defence Program
                </CardTitle>
                <CardDescription className="text-base mt-2" data-testid="text-main-proposal-subtitle">
                  Complete Proposal Document
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-main-proposal-description">
                  This comprehensive 29-page document details our complete program including executive summary, 
                  past achievements (2005-2019), upcoming activities, convenor biography, cosmic explanations, 
                  and strategic defense proposals. Essential reading for government officials, defense personnel, 
                  and interested supporters.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">File Format:</span>
                    <span className="font-medium">PDF</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">File Size:</span>
                    <span className="font-medium">~5.2 MB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pages:</span>
                    <span className="font-medium">29</span>
                  </div>
                </div>
                <a 
                  href="/attached_assets/Chola Mandala Mahasamsthaanam without Letter head_1759626759876.pdf" 
                  download
                >
                  <Button className="w-full" size="lg" data-testid="button-download-main-proposal">
                    <Download className="mr-2 w-5 h-5" />
                    Download Proposal
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-10 bg-card rounded-lg p-6">
            <h2 className="text-2xl font-serif font-semibold mb-3" data-testid="text-additional-info-title">
              For Official Inquiries
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-additional-info-content">
              Government officials, defense personnel, and institutional representatives seeking detailed briefings 
              or additional documentation may contact us directly. We provide customized presentations and technical 
              details about our spiritual defense mechanisms upon official request.
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-contact-info">
              Contact: susharadhya14@gmail.com | Phone: +91 636 421 4919
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
