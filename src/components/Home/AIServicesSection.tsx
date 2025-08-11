import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Phone, Sparkles, Palette, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AIServicesSection = () => {
  const aiServices = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Advanced AI-powered chatbots provide seamless, 24/7 customer support with human-like interaction.",
      features: ["24/7 Customer Support", "Human-like Interaction", "Query Management"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "AI Voice/Calling Agent",
      description: "Enhance customer service with AI-powered voice agents that handle calls and inquiries naturally.",
      features: ["Natural Voice Calls", "Customer Inquiries", "Routine Task Handling"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Customization",
      description: "Tailor your digital presence with personalized recommendations and smart content delivery.",
      features: ["Personalized Recommendations", "Smart Content", "Customer Adaptation"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "AI Website Design",
      description: "AI-assisted website design analyzing trends and user preferences for optimal user experience.",
      features: ["Trend Analysis", "User-Friendly Interface", "Industry Standards"]
    }
  ];

  const benefits = [
    "Cutting-edge technology for your business",
    "Increased automation and reduced operational costs",
    "Personalized customer engagement",
    "Seamless integration with existing digital infrastructure"
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="ai-services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Introducing Digibabaa Services
          </div>
          <h2 className="mb-4">AI Solutions for Your Business</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            At Digibabaa, we're dedicated to enhancing your business with the latest AI-powered tools. 
            As part of our collaboration with Splendor UAE, we bring you specialized AI services designed 
            to optimize customer interaction, improve operational efficiency, and create unique website experiences.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiServices.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="text-primary mb-4 group-hover:scale-110 transition-smooth mx-auto w-fit p-3 bg-primary/10 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Digibabaa */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Digibabaa's AI Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Explore the Future of Business with Digibabaa</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience how AI can transform the way you connect with your customers and grow your business. 
            Reach out to us today for a consultation or a free demo of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://digibabaa.co/" target="_blank" rel="noopener noreferrer">
                Visit Digibabaa Website
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;