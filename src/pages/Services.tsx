import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Wind, Settings, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-accent" />,
      title: "CHW Pipe Installation",
      features: [
        "Supply and inspection of pipes & fittings.",
        "Routing and support installation.",
        "Pipe joining (threading, grooving, welding).",
        "Thermal insulation of CHW pipes.",
        "Hydrostatic pressure testing.",
        "Valves & accessories installation.",
        "Final inspection & documentation."
      ]
    },
    {
      icon: <Wind className="w-12 h-12 text-accent" />,
      title: "HVAC Installation",
      features: [
        "Supply and installation of HVAC units.",
        "Ductwork fabrication & insulation.",
        "Refrigerant piping & condensate drains.",
        "Electrical & control wiring.",
        "Equipment alignment & vibration isolation.",
        "Testing & commissioning.",
        "Final inspection & handover."
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-accent" />,
      title: "MJE HVAC Installation",
      features: [
        "Installation of chillers, AHUs, FCUs & pumps.",
        "Ducting, piping, insulation & air outlets.",
        "Electrical cabling & panel integration.",
        "Connection with Building Management System (BMS).",
        "Testing, adjusting & balancing (TAB).",
        "Commissioning & performance verification.",
        "System labeling & handover."
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Our Services – HVAC & MEP Solutions</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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