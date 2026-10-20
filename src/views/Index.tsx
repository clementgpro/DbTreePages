import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import CompetitorComparisonSection from "@/components/CompetitorComparisonSection";
import FAQSection from "@/components/FAQSection";
import MakerSection from "@/components/MakerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative z-10">
      <Navbar />
      <main>
        <HeroSection />
        <ComparisonSection />
        <CompetitorComparisonSection />
        <FAQSection />
        <MakerSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
