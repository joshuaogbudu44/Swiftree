import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import PhaseInterface from "@/components/PhaseInterface";
import StorefrontGenerator from "@/components/StorefrontGenerator";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PhaseInterface />
      <Features />
      <WhatsAppDemo />
      <StorefrontGenerator />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
