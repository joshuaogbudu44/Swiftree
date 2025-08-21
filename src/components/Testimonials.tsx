import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kemi Adelabu",
      business: "Kemi's Fashion Store",
      location: "Lagos, Nigeria",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      quote: "Sellfast changed my business completely! I went from struggling to make ₦50,000 monthly to consistently making over ₦300,000. My customers love shopping directly on WhatsApp.",
      rating: 5
    },
    {
      name: "Ibrahim Musa",
      business: "TechHub Electronics",
      location: "Abuja, Nigeria",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      quote: "The QR code feature is incredible! I put it on my business cards and flyers. Customers scan it and immediately start shopping. Sales increased by 400% in just 3 months.",
      rating: 5
    },
    {
      name: "Chioma Okafor",
      business: "Mama Chi's Kitchen",
      location: "Port Harcourt, Nigeria",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      quote: "My food business was purely offline before Sellfast. Now I get orders from all over Port Harcourt through WhatsApp. The payment links make everything so smooth!",
      rating: 5
    }
  ];

  const stats = [
    { number: "5,000+", label: "Nigerian Vendors" },
    { number: "₦2M+", label: "Orders Processed" },
    { number: "₦100M+", label: "Revenue Generated" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-green-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-dark bg-green-light/30 rounded-full mb-4">
            🚀 Built for Nigerian SMEs
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Nigerian Entrepreneurs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful business owners who are already growing with Sellfast
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            What Our Entrepreneurs Are Saying
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-light/30"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Profile */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-green-primary font-medium">
                    {testimonial.business}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;