import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock, Shield, Wrench } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years Experience",
      description: "Over a decade and half of expertise in MEP and HVAC solutions across the UAE market."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "500+ Successful Projects",
      description: "Proven track record with hundreds of completed projects for satisfied clients."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified engineers and skilled technicians committed to delivering quality work."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "We understand project timelines and consistently deliver on schedule."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring the highest standards of workmanship."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Comprehensive Service",
      description: "From design to installation and maintenance - complete MEP solutions under one roof."
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Why Choose SplendorUAE?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We are the trusted partner for developers, contractors, and facility managers 
            throughout the UAE, delivering exceptional MEP and HVAC solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-smooth group">
              <CardHeader className="text-center">
                <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-smooth">
                  {reason.icon}
                </div>
                <CardTitle className="text-white text-xl">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 bg-white/10 rounded-lg p-8 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;