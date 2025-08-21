import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Store, 
  Palette, 
  MessageCircle, 
  CreditCard, 
  BarChart3, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StorefrontGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [storeData, setStoreData] = useState({
    businessName: "",
    businessType: "",
    description: "",
    whatsappNumber: "",
    colorScheme: "green"
  });
  const { toast } = useToast();

  const businessTypes = [
    "Food & Restaurant",
    "Fashion & Clothing",
    "Electronics",
    "Beauty & Cosmetics",
    "Home & Garden",
    "Sports & Fitness",
    "Books & Education",
    "Health & Wellness",
    "Arts & Crafts",
    "Other"
  ];

  const colorSchemes = [
    { name: "Sellfast Green", value: "green", colors: ["#4fca6a", "#6bd480", "#87df97"] },
    { name: "Ocean Blue", value: "blue", colors: ["#3b82f6", "#60a5fa", "#93c5fd"] },
    { name: "Purple Elegance", value: "purple", colors: ["#8b5cf6", "#a78bfa", "#c4b5fd"] },
    { name: "Sunset Orange", value: "orange", colors: ["#f97316", "#fb923c", "#fdba74"] }
  ];

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp Integration",
      description: "Direct customer communication"
    },
    {
      icon: <Store className="h-6 w-6" />,
      title: "Product Catalog",
      description: "Beautiful product showcase"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Processing",
      description: "Secure Nigerian payment methods"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Track sales and customers"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Optimized",
      description: "Perfect for Nigerian mobile users"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized for slow connections"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setStoreData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateStorefront = () => {
    if (!storeData.businessName || !storeData.businessType || !storeData.whatsappNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to generate your storefront.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Storefront Generated! 🎉",
      description: `Your ${storeData.businessName} storefront is being created. You'll receive WhatsApp setup instructions shortly.`,
    });

    // Simulate storefront generation
    setTimeout(() => {
      setCurrentStep(3);
    }, 2000);
  };

  const steps = [
    { title: "Business Info", description: "Tell us about your business" },
    { title: "Customization", description: "Choose your style" },
    { title: "WhatsApp Setup", description: "Connect your number" },
    { title: "Launch", description: "Go live!" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-green-light/50 text-green-dark">
            Free Storefront Generator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Create Your Nigerian Storefront in Minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No coding required. Generate a beautiful, WhatsApp-integrated storefront 
            tailored for the Nigerian market.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  index <= currentStep 
                    ? 'bg-green-primary text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index < currentStep ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                <div className="ml-2 text-sm font-medium text-foreground hidden sm:block">
                  {step.title}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-px mx-4 ${
                    index < currentStep ? 'bg-green-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="border-green-light/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="h-5 w-5 text-green-primary" />
                  {steps[currentStep]?.title}
                </CardTitle>
                <CardDescription>{steps[currentStep]?.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={currentStep.toString()} className="w-full">
                  {/* Step 0: Business Info */}
                  <TabsContent value="0" className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          placeholder="e.g., James Food Palace"
                          value={storeData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select value={storeData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="description">Business Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Tell customers what makes your business special..."
                          value={storeData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          className="mt-1"
                          rows={3}
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={() => setCurrentStep(1)}
                      className="w-full bg-gradient-primary hover:opacity-90"
                      disabled={!storeData.businessName || !storeData.businessType}
                    >
                      Continue to Customization
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </TabsContent>

                  {/* Step 1: Customization */}
                  <TabsContent value="1" className="space-y-6">
                    <div>
                      <Label>Choose Your Color Scheme</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        {colorSchemes.map((scheme) => (
                          <div
                            key={scheme.value}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              storeData.colorScheme === scheme.value
                                ? 'border-green-primary bg-green-light/20'
                                : 'border-muted hover:border-green-light'
                            }`}
                            onClick={() => handleInputChange('colorScheme', scheme.value)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex space-x-1">
                                {scheme.colors.map((color, index) => (
                                  <div
                                    key={index}
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                              <span className="font-medium">{scheme.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(0)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={() => setCurrentStep(2)}
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                      >
                        Continue to WhatsApp
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Step 2: WhatsApp Setup */}
                  <TabsContent value="2" className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="whatsappNumber">WhatsApp Business Number *</Label>
                        <Input
                          id="whatsappNumber"
                          placeholder="+234 xxx xxx xxxx"
                          value={storeData.whatsappNumber}
                          onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                          className="mt-1"
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          This will be used for customer communications and order management.
                        </p>
                      </div>
                      <div className="bg-green-light/10 border border-green-light/30 rounded-lg p-4">
                        <h4 className="font-medium text-green-dark mb-2">WhatsApp Business Benefits:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Verified business profile with green checkmark</li>
                          <li>• Automated welcome messages and quick replies</li>
                          <li>• Product catalog integration</li>
                          <li>• Business hours and contact information</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={generateStorefront}
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                        disabled={!storeData.whatsappNumber}
                      >
                        Generate Storefront
                        <Zap className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Step 3: Launch */}
                  <TabsContent value="3" className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-green-primary rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        🎉 Your Storefront is Ready!
                      </h3>
                      <p className="text-muted-foreground">
                        We've created your beautiful {storeData.businessName} storefront with WhatsApp integration.
                      </p>
                      <div className="bg-green-light/10 border border-green-light/30 rounded-lg p-4 text-left">
                        <h4 className="font-medium mb-2">Next Steps:</h4>
                        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                          <li>Check your WhatsApp for setup instructions</li>
                          <li>Add your first products to the catalog</li>
                          <li>Share your storefront link with customers</li>
                          <li>Start receiving orders on WhatsApp!</li>
                        </ol>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(0)}
                        className="flex-1"
                      >
                        Create Another Store
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                      >
                        View My Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            <Card className="border-green-light/30">
              <CardHeader>
                <CardTitle className="text-lg">What You Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-green-light/20 rounded-lg text-green-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{feature.title}</div>
                      <div className="text-xs text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-green-light/30 bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Ready to Start?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Join 5,000+ Nigerian businesses already using Sellfast
                </p>
                <Button variant="secondary" className="w-full">
                  Get Professional Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorefrontGenerator;