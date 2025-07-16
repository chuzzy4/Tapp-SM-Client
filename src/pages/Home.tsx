import BenefitsSection from "../chunks/Benefit";
import TappFaqSection from "../chunks/Faq";
import Footer from "../chunks/Footer";
import Hero from "../chunks/Hero";
import HowItWorksSection from "../chunks/Howitworks";
import Navbar from "../chunks/Navbar";
import ModernProductSection from "../chunks/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BenefitsSection />
      <HowItWorksSection />
      <ModernProductSection />
      <TappFaqSection />
      <Footer />
    </div>
  );
}
