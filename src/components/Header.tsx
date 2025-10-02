import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free for 2 months",
      description: "Professional features for 2 months",
      features: ["WhatsApp Integration", "Product Catalog", "Order Management", "Basic Analytics"]
    },
    {
      name: "Professional",
      price: "₦5,000/month",
      description: "Custom storefront for SMEs",
      features: ["Custom Storefront", "Advanced Analytics", "Payment Integration", "Unlimited Products", "24/7 Support"]
    }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-green-light/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Swiftree" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent hover:bg-green-light/50"
                    onClick={() => setIsPricingOpen(!isPricingOpen)}
                  >
                    Pricing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-card border border-green-light/20">
                    <div className="grid gap-3 p-6 w-[400px]">
                      {pricingPlans.map((plan) => (
                        <div key={plan.name} className="group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-light/50">
                          <div className="text-sm font-medium leading-none">{plan.name}</div>
                          <div className="text-sm font-bold text-green-primary">{plan.price}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {plan.description}
                          </p>
                          <ul className="text-xs text-muted-foreground mt-2">
                            {plan.features.map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="#features" className="text-foreground hover:text-green-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-foreground hover:text-green-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-green-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="hover:bg-green-light/50" asChild>
              <a href="https://vendor-plum.vercel.app/login" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity" asChild>
              <a href="https://vendor-plum.vercel.app/signup" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-green-light/50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-green-light/20">
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-green-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-green-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-green-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">Pricing</div>
                {pricingPlans.map((plan) => (
                  <div key={plan.name} className="ml-4 mb-3 p-3 bg-green-light/20 rounded-lg">
                    <div className="font-medium">{plan.name}</div>
                    <div className="text-sm font-bold text-green-primary">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.description}</div>
                  </div>
                ))}
              </div>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start hover:bg-green-light/50" asChild>
                  <a 
                    href="https://vendor-plum.vercel.app/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </a>
                </Button>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" asChild>
                  <a 
                    href="https://vendor-plum.vercel.app/signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;