import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Thermometer, Wrench, Shield, Zap, Wind, CheckCircle } from "lucide-react";
import chwPiping from "@/assets/chw-piping.jpg";
import hvacDuctwork from "@/assets/hvac-ductwork.jpg";
import valvePackage from "@/assets/valve-package.jpg";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-10 h-10" />,
      title: "CHW Piping Fabrication & Installation",
      description: "Complete chilled water piping systems designed and installed to the highest industry standards.",
      image: chwPiping,
      features: [
        "Custom pipe fabrication",
        "Professional installation",
        "Testing & commissioning",
        "Insulation services",
        "System optimization"
      ],
      applications: ["Commercial buildings", "Residential complexes", "Industrial facilities"]
    },
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: "CHW Pumps & Heat Exchanger Installation",
      description: "Expert installation and maintenance of heat transfer systems for optimal energy efficiency.",
      image: valvePackage,
      features: [
        "Heat exchanger installation",
        "Pump selection & setup",
        "Performance optimization",
        "Energy efficiency analysis",
        "Preventive maintenance"
      ],
      applications: ["HVAC systems", "Process cooling", "District cooling"]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Valve Package Installation",
      description: "Comprehensive valve solutions including control systems and automation integration.",
      image: valvePackage,
      features: [
        "Control valve installation",
        "Safety valve systems",
        "Automation integration",
        "System calibration",
        "Regular maintenance"
      ],
      applications: ["Process control", "Safety systems", "Flow regulation"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "HVAC System Installation & Maintenance",
      description: "Complete HVAC solutions from design to installation and ongoing maintenance.",
      image: hvacDuctwork,
      features: [
        "System design & planning",
        "Professional installation",
        "Regular maintenance",
        "Emergency repairs",
        "Energy audits"
      ],
      applications: ["Commercial spaces", "Residential buildings", "Healthcare facilities"]
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Extract Duct & Kitchen Extract Installation",
      description: "Specialized ventilation systems for commercial kitchens and industrial applications.",
      image: hvacDuctwork,
      features: [
        "Kitchen extract systems",
        "Fire safety compliance",
        "Grease management",
        "Noise control",
        "Maintenance programs"
      ],
      applications: ["Restaurants", "Commercial kitchens", "Food processing"]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Other MEP & HVAC Works",
      description: "Comprehensive mechanical, electrical, and plumbing services for all project types.",
      image: chwPiping,
      features: [
        "Electrical installations",
        "Plumbing systems",
        "Fire safety systems",
        "Building automation",
        "Energy management"
      ],
      applications: ["Mixed-use developments", "Industrial projects", "Infrastructure"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Our Professional Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive MEP and HVAC solutions designed to meet the unique requirements 
              of every project. From concept to completion, we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-accent mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="hero">
                    Get Quote for This Service
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-elegant"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free consultation and detailed quote 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;