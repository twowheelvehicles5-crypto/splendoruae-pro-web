import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Thermometer, Wrench, Shield, Zap, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "CHW Piping Systems",
      description: "Complete chilled water piping fabrication, installation, and commissioning for commercial buildings.",
      features: [
        "Supply and inspection of pipes, fittings, and insulation",
        "Pipe routing and support installation as per approved drawings",
        "Pipe joining by threading, grooving, or welding",
        "Application of thermal insulation to all CHW pipes",
        "Hydrostatic pressure testing of the installed system",
        "Installation of valves, fittings, and accessories",
        "Final inspection, labeling, and documentation"
      ]
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "HVAC Installation",
      description: "Professional HVAC system installation and maintenance for optimal climate control.",
      features: ["System Design", "Installation", "Maintenance"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Valve Packages",
      description: "Comprehensive valve package installation and control system integration.",
      features: ["Control Valves", "Safety Systems", "Automation"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Heat Exchangers",
      description: "Expert installation and maintenance of heat exchanger systems and FCUs.",
      features: ["FCU Installation", "Heat Recovery", "Efficiency Optimization"]
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Ductwork Systems",
      description: "Professional ductwork installation including kitchen extract and ventilation systems.",
      features: ["Extract Ducts", "Kitchen Systems", "Ventilation"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "MEP Services",
      description: "Complete mechanical, electrical, and plumbing services for commercial projects.",
      features: ["Design Build", "Installation", "Maintenance"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-secondary" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-4">Our Expert Services</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive MEP and HVAC solutions tailored to meet the unique requirements 
            of commercial and residential projects across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group hover:-translate-y-2 h-full">
              <CardHeader className="pb-4">
                <div className="text-accent mb-4 sm:mb-6 group-hover:scale-110 transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl group-hover:text-accent transition-smooth mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:variant-accent transition-smooth touch-target">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Button variant="hero" size="lg" className="touch-target" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;