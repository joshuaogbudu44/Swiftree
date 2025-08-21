import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ShoppingCart, CreditCard, Truck, CheckCircle } from "lucide-react";
import iphoneWhatsappMockup from "@/assets/iphone-whatsapp-mockup.jpg";

const WhatsAppDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const chatSteps = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Customer Inquiry",
      message: "Hello James, what are you buying from us today?",
      sender: "business",
      time: "2:30 PM"
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Product Catalog",
      message: "Kindly click here to see our product catalogue",
      sender: "business",
      time: "2:31 PM",
      hasButton: true,
      buttonText: "View Catalog 📱"
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Catalog Display",
      message: "Product Catalog",
      sender: "catalog",
      time: "2:31 PM",
      isSpecial: true
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Payment",
      message: "Your order total is ₦15,000. Click to pay securely.",
      sender: "business",
      time: "2:35 PM",
      hasButton: true,
      buttonText: "Pay Now 💳"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Receipt",
      message: "Payment successful! Receipt #SF001234",
      sender: "receipt",
      time: "2:36 PM",
      isSpecial: true
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Delivery",
      message: "Track your delivery here: sellfast.ng/track/SF001234",
      sender: "business",
      time: "2:37 PM",
      hasButton: true,
      buttonText: "Track Order 🚚"
    }
  ];

  const products = [
    { name: "Jollof Rice & Chicken", price: "₦3,500", image: "🍚" },
    { name: "Fried Rice Special", price: "₦4,000", image: "🍛" },
    { name: "Pepper Soup", price: "₦2,500", image: "🍲" },
    { name: "Suya Platter", price: "₦5,000", image: "🥩" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-light/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-green-light/50 text-green-dark">
            See It In Action
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Sales Journey on WhatsApp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From inquiry to delivery, everything happens seamlessly within WhatsApp. 
            No app downloads, no complicated processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* iPhone Mockup */}
          <div className="relative">
            <div className="bg-black rounded-[3rem] p-3 shadow-2xl mx-auto max-w-sm">
              <div className="bg-background rounded-[2.5rem] overflow-hidden">
                {/* iPhone Status Bar */}
                <div className="bg-green-primary text-white p-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-green-primary" />
                    </div>
                    <span className="font-medium">James Food Store</span>
                  </div>
                  <div className="text-xs">Online</div>
                </div>

                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-[#e5ddd5]">
                  {chatSteps.slice(0, currentStep + 1).map((step, index) => (
                    <div key={index} className="space-y-2">
                      {step.isSpecial && step.title === "Catalog Display" ? (
                        <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs ml-auto">
                          <div className="text-sm font-medium mb-2">Product Catalog</div>
                          <div className="grid grid-cols-2 gap-2">
                            {products.map((product, idx) => (
                              <div key={idx} className="bg-green-light/20 rounded p-2 text-xs">
                                <div className="text-lg mb-1">{product.image}</div>
                                <div className="font-medium">{product.name}</div>
                                <div className="text-green-primary font-bold">{product.price}</div>
                                <Button size="sm" className="w-full mt-1 text-xs h-6 bg-green-primary">
                                  Add to Cart
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : step.isSpecial && step.title === "Receipt" ? (
                        <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs ml-auto border border-green-primary">
                          <div className="text-sm font-medium mb-2 text-green-primary">Receipt #SF001234</div>
                          <div className="text-xs space-y-1">
                            <div className="flex justify-between">
                              <span>Jollof Rice & Chicken</span>
                              <span>₦3,500</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Fried Rice Special</span>
                              <span>₦4,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Suya Platter</span>
                              <span>₦5,000</span>
                            </div>
                            <div className="border-t pt-1 flex justify-between font-bold">
                              <span>Total</span>
                              <span>₦12,500</span>
                            </div>
                            <div className="text-center text-green-primary font-medium">✅ Payment Successful</div>
                          </div>
                        </div>
                      ) : (
                        <div className={`flex ${step.sender === 'business' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs rounded-lg p-3 ${
                            step.sender === 'business' 
                              ? 'bg-green-primary text-white ml-auto' 
                              : 'bg-white text-foreground'
                          }`}>
                            <div className="text-sm">{step.message}</div>
                            {step.hasButton && (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="w-full mt-2 text-xs bg-white text-green-primary border-white hover:bg-green-light/20"
                              >
                                {step.buttonText}
                              </Button>
                            )}
                            <div className="text-xs opacity-70 mt-1">{step.time}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="bg-white p-3 flex items-center gap-2">
                  <div className="flex-1 bg-green-light/20 rounded-full px-3 py-2 text-sm text-muted-foreground">
                    Type a message...
                  </div>
                  <Button size="sm" className="rounded-full bg-green-primary">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Step Controls */}
          <div className="space-y-6">
            <div className="space-y-4">
              {chatSteps.map((step, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    index <= currentStep 
                      ? 'border-green-primary bg-green-light/10' 
                      : 'border-muted hover:border-green-light'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`p-2 rounded-full ${
                        index <= currentStep ? 'bg-green-primary text-white' : 'bg-muted'
                      }`}>
                        {step.icon}
                      </div>
                      {step.title}
                      {index <= currentStep && (
                        <CheckCircle className="h-5 w-5 text-green-primary ml-auto" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "Customer initiates conversation with your business"}
                      {index === 1 && "Business responds with interactive product catalog"}
                      {index === 2 && "Products displayed with add-to-cart functionality"}
                      {index === 3 && "Secure payment processing within WhatsApp"}
                      {index === 4 && "Instant receipt generation and confirmation"}
                      {index === 5 && "Delivery tracking link shared automatically"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setCurrentStep(0)}
                variant="outline"
                className="border-green-primary text-green-primary hover:bg-green-light/20"
              >
                Restart Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;