import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { PricingSection } from "../components/PricingSection";
import { OrderFormSection } from "../components/OrderFormSection";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("Company Profile");

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <PricingSection onSelectPackage={setSelectedPackage} />
        <OrderFormSection 
          selectedPackage={selectedPackage} 
          setSelectedPackage={setSelectedPackage} 
        />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
