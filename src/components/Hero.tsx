import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 bg-green-light/50 text-green-dark border-green-medium/30 hover:bg-green-light/70 transition-colors"
          >
            🚀 Welcome to Swiftree
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="block">Sell Faster.</span>
            <span className="block bg-gradient-to-r from-green-primary to-green-dark bg-clip-text text-transparent">
              Grow Smarter.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
            Simplifying Digital Commerce for Nigerian SMEs. Power your business with WhatsApp integration 
            and build your dream e-commerce experience for your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant text-lg px-8 py-6"
              asChild
            >
              <a href="https://vendor-plum.vercel.app/signup" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-primary text-green-primary hover:bg-green-light/50 text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-green-light/30 shadow-elegant animate-fade-in">
            <div className="text-3xl font-bold text-green-primary mb-2">5,000+</div>
            <div className="text-muted-foreground">Nigerian Vendors</div>
          </div>
          <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-green-light/30 shadow-elegant animate-fade-in">
            <div className="text-3xl font-bold text-green-primary mb-2">₦2M+</div>
            <div className="text-muted-foreground">Orders Processed</div>
          </div>
          <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-green-light/30 shadow-elegant animate-fade-in">
            <div className="text-3xl font-bold text-green-primary mb-2">₦100M+</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-6xl mx-auto animate-float">
          <div className="relative bg-gradient-to-br from-green-light/20 to-green-medium/20 rounded-2xl p-8 border border-green-light/30 shadow-glow">
            <img 
              src="/api/placeholder/1200/800" 
              alt="Swiftree Dashboard" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-float">
              ✅ WhatsApp Ready
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-green-light/30 animate-float">
              🇳🇬 Made for Nigeria
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;