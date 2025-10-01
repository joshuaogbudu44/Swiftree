import { useState } from "react";
import { QrCode, Link, Share2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PhaseInterface = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Store Setup",
      icon: "🏪",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-green-light/20 rounded-md">
            <span className="text-sm">Business Name:</span>
            <span className="font-semibold">Fashion Hub</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-light/20 rounded-md">
            <span className="text-sm">WhatsApp:</span>
            <span className="font-semibold">+234 xxx xxxx</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-light/20 rounded-md">
            <span className="text-sm">Logo:</span>
            <span className="text-green-primary font-semibold">✅ Uploaded</span>
          </div>
        </div>
      )
    },
    {
      title: "Add Products",
      icon: "📦",
      content: (
        <div className="space-y-4">
          <div className="border border-green-light rounded-md p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Designer Shoes</span>
              <span className="text-green-primary font-bold">₦25,000</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150" 
              alt="Designer Shoes" 
              className="w-full h-20 object-cover rounded"
            />
          </div>
          <div className="border border-green-light rounded-md p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Handbags</span>
              <span className="text-green-primary font-bold">₦15,000</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150" 
              alt="Handbags" 
              className="w-full h-20 object-cover rounded"
            />
          </div>
        </div>
      )
    },
    {
      title: "Live Preview",
      icon: "📱",
      content: (
        <div className="bg-gradient-to-b from-green-light/30 to-green-primary/20 p-4 rounded-lg border-2 border-green-primary/30">
          <div className="text-center mb-4">
            <div className="text-green-primary font-bold text-lg">🎉 Live Preview Ready!</div>
            <p className="text-sm text-muted-foreground">Your storefront is ready for customers</p>
          </div>
          
          {/* Mock WhatsApp Interface */}
          <div className="bg-white rounded-lg p-3 shadow-md">
            <div className="flex items-center justify-between mb-2 p-2 bg-green-primary text-white rounded-t">
              <span className="font-semibold text-sm">Ola Fashion Store</span>
              <span className="text-xs">Online</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="bg-gray-100 p-2 rounded max-w-[80%]">
                Hello James, what are you buying from us today? 👋
                <div className="text-right text-gray-500 text-xs mt-1">2:30 PM</div>
              </div>
              <div className="bg-gray-100 p-2 rounded max-w-[80%]">
                Kindly click here to see our product catalogue 📂
                <div className="text-right text-gray-500 text-xs mt-1">2:31 PM</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "QR & Links",
      icon: "🔗",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <QrCode className="w-16 h-16 text-white" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">Scan to visit store</p>
            <Button size="sm" variant="outline" className="mb-4">
              Download QR
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center p-2 bg-green-light/20 rounded">
              <Link className="w-4 h-4 mr-2 text-green-primary" />
              <span className="text-xs">wa.me/234xxx...?text=Hello%20Fashion%20Hub</span>
            </div>
            <div className="flex items-center p-2 bg-green-light/20 rounded">
              <Smartphone className="w-4 h-4 mr-2 text-green-primary" />
              <span className="text-xs">swiftree.ng/store/fashion-hub</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1 bg-green-primary hover:bg-green-dark text-white">
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Test WhatsApp
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-green-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Build Your Custom Storefront
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how your custom storefront comes to life with live preview, QR code generation, and WhatsApp integration - all in one platform.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Phase Navigation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Storefront Builder</h3>
              
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activePhase === index
                      ? 'transform scale-105'
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    activePhase === index
                      ? 'border-green-primary bg-green-light/20 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-green-light hover:shadow-md'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className={`text-2xl ${
                        activePhase === index ? 'animate-bounce' : ''
                      }`}>
                        {phase.icon}
                      </div>
                      <div>
                        <h4 className={`font-semibold ${
                          activePhase === index ? 'text-green-dark' : 'text-foreground'
                        }`}>
                          {phase.title}
                        </h4>
                        <div className={`h-1 w-full mt-2 rounded-full transition-all duration-300 ${
                          activePhase === index ? 'bg-green-primary' : 'bg-gray-200'
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase Content */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-green-light/30 min-h-[400px]">
                <div className="animate-fade-in">
                  {phases[activePhase].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseInterface;