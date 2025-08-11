import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Phone, Sparkles, Palette, ArrowRight, CheckCircle, Clock, Users, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AIServicesSection = () => {
  const aiServices = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Chatbots",
      description: "Advanced AI-powered chatbots provide seamless, 24/7 customer support with human-like interaction.",
      features: ["24/7 Customer Support", "Human-like Interaction", "Query Management"]
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "AI Voice/Calling Agent",
      description: "Enhance customer service with AI-powered voice agents that handle calls and inquiries naturally.",
      features: ["Natural Voice Calls", "Customer Inquiries", "Routine Task Handling"]
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "AI Customization",
      description: "Tailor your digital presence with personalized recommendations and smart content delivery.",
      features: ["Personalized Recommendations", "Smart Content", "Customer Adaptation"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "AI Website Design",
      description: "AI-assisted website design analyzing trends and user preferences for optimal user experience.",
      features: ["Trend Analysis", "User-Friendly Interface", "Industry Standards"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Cutting-edge technology for your business"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Increased automation and reduced operational costs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Personalized customer engagement"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Seamless integration with existing digital infrastructure"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20" id="ai-services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-5 h-5" />
            Introducing Digibabaa Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            AI Solutions for Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Digibabaa, we're dedicated to enhancing your business with the latest AI-powered tools. 
            As part of our collaboration with Splendor UAE, we bring you specialized AI services designed 
            to optimize customer interaction, improve operational efficiency, and create unique website experiences.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {aiServices.map((service, index) => (
            <Card key={index} className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300 group-hover:scale-110 transform">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Digibabaa */}
        <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-10 mb-16 border border-border/50 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Digibabaa's AI Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-muted-foreground font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">Explore the Future of Business with Digibabaa</h3>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience how AI can transform the way you connect with your customers and grow your business. 
            Reach out to us today for a consultation or a free demo of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://digibabaa.co/" target="_blank" rel="noopener noreferrer">
                Visit Digibabaa Website
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200" asChild>
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;