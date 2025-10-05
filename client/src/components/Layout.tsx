import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import letterheadImage from "@assets/mother sonia gandhi world welfare committee letter head_1759630526420.png";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full border-b bg-white">
        <div className="container mx-auto px-4 py-3">
          <img
            src={letterheadImage}
            alt="Mother Sonia Gandhi World Welfare Committee - Unit of Akhila Vishw Bharathiya Seva Samaj Trust"
            className="w-full max-w-4xl mx-auto rotate-[0.9deg]"
            data-testid="img-letterhead"
          />
        </div>
      </div>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
