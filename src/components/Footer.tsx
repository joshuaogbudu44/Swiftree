import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Swiftree" 
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-green-light text-sm">
              Empowering Nigerian SMEs with WhatsApp-powered e-commerce solutions. 
              Sell faster, grow smarter.
            </p>
            <div className="flex space-x-4">
              <div className="bg-green-primary p-2 rounded-full hover:bg-green-medium transition-colors cursor-pointer">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="bg-green-primary p-2 rounded-full hover:bg-green-medium transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-green-primary p-2 rounded-full hover:bg-green-medium transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-green-light">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Storefront</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-green-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-green-light">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
            
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 (0) 800 SWIFTREE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@Swiftree.ng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-medium mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-green-light text-sm">
            © 2024 Swiftree. All rights reserved. Made with ❤️ in Nigeria.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-green-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;