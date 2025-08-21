import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingCart, BarChart3, Smartphone, Zap, Shield } from "lucide-react";
import nigerianBusinessOwner1 from "@/assets/nigerian-business-owner-1.jpg";
import nigerianBusinessOwner2 from "@/assets/nigerian-business-owner-2.jpg";
import nigerianMarketplace from "@/assets/nigerian-marketplace.jpg";

const Features = () => {
  const platforms = [
    { name: "Local Sales", icon: "🏪" },
    { name: "Global Sales", icon: "🌍" },
    { name: "Online Sales", icon: "💻" },
    { name: "Offline Sales", icon: "🏬" },
    { name: "Direct Sales", icon: "👥" },
    { name: "Wholesale", icon: "📦" }
  ];

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-primary" />,
      title: "WhatsApp Integration",
      description: "Seamlessly connect with customers through WhatsApp Business, Nigeria's most popular messaging platform.",
      image: nigerianBusinessOwner1
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-primary" />,
      title: "Smart Product Catalog",
      description: "Create beautiful product catalogs that work perfectly on mobile devices for your Nigerian customers.",
      image: nigerianBusinessOwner2
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-primary" />,
      title: "Business Analytics",
      description: "Track your sales, understand your customers, and grow your business with powerful insights.",
      image: nigerianMarketplace
    }
  ];

  const targetAudience = [
    {
      icon: <Smartphone className="h-12 w-12 text-green-primary" />,
      title: "For SMEs",
      description: "Manage inventory, payments, and orders effortlessly with Sellfast's all-in-one platform designed for Small and Medium Enterprises.",
      features: ["Inventory Management", "Payment Processing", "Order Tracking", "Customer Support"]
    },
    {
      icon: <Zap className="h-12 w-12 text-green-primary" />,
      title: "For Entrepreneurs",
      description: "Launch your online business quickly with our ready-to-use templates and WhatsApp integration.",
      features: ["Quick Setup", "Mobile-First Design", "WhatsApp Ready", "Nigerian Market Focus"]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-primary" />,
      title: "For Growing Businesses",
      description: "Scale your operations with advanced features and seamless integrations tailored for the Nigerian market.",
      features: ["Advanced Analytics", "Custom Storefront", "API Access", "Priority Support"]
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Platform Coverage */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-light/50 text-green-dark">
            One Platform to Power All
          </Badge>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg border border-green-light/30 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-2xl mb-2">{platform.icon}</div>
                <div className="text-sm font-medium text-foreground">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Nigerian Businesses Choose Sellfast
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-green-light/30 hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-green-light/50 text-green-dark">
              Sellfast is built for every business
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for Nigerian SMEs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="border-green-light/30 hover:shadow-elegant transition-all duration-300 bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-green-light/20 rounded-full w-fit">
                    {audience.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{audience.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{audience.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {audience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;