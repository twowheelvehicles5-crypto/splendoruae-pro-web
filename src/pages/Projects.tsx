import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building, Wrench } from "lucide-react";
import chwPiping from "@/assets/chw-piping.jpg";
import hvacDuctwork from "@/assets/hvac-ductwork.jpg";
import valvePackage from "@/assets/valve-package.jpg";

const Projects = () => {
  const projects = [
    {
      image: valvePackage,
      title: "MIDTOWN DUBAI",
      scope: "FCU & Valve Package Installation",
      status: "Completed",
      date: "Oct 2022",
      location: "Dubai, UAE",
      client: "Midtown Development",
      description: "Installation of FCU & Valve Package with pressure test, insulation and foster for modern commercial development.",
      value: "AED 1.2M",
      duration: "6 months"
    },
    {
      image: chwPiping,
      title: "OFF-CAMPUS STUDENT HOUSING",
      scope: "Chiller Water Piping Installation",
      status: "Completed",
      date: "Nov 2020",
      location: "Academic City, Dubai",
      client: "Academic Housing Authority",
      description: "Installation of chiller water piping and branches with insulation in BLOCK-B & BLOCK-G for student accommodation facility.",
      value: "AED 950K",
      duration: "4 months"
    },
    {
      image: hvacDuctwork,
      title: "SEVENTH HEAVEN - AL BRARI",
      scope: "GI Ducting & Fire Rated Duct Installation",
      status: "Completed",
      date: "Jun 2020",
      location: "Dubai, UAE",
      client: "Seventh Heaven Development",
      description: "Installation of GI ducting with insulation upper and lower ground, and installation of fire rated duct systems.",
      value: "AED 1.1M",
      duration: "5 months"
    },
    {
      image: hvacDuctwork,
      title: "Fakeeh University Hospital",
      scope: "Comprehensive Ducting Installation",
      status: "Completed",
      date: "Sep 2021",
      location: "Silicone Oasis, Dubai",
      client: "Fakeeh Healthcare",
      description: "Installation of GI, FIRERATED, MS, SS ducting with insulation for state-of-the-art medical facility.",
      value: "AED 2.8M",
      duration: "8 months"
    },
    {
      image: chwPiping,
      title: "Success Point College",
      scope: "Complete HVAC & CHW System",
      status: "Ongoing",
      date: "In Progress",
      location: "Al Rayyan Building, Sharjah",
      client: "Success Point Education",
      description: "Installation of FAHU, AHU, FCU and CHW piping, valve package with insulation, Pressure Testing and Flushing.",
      value: "AED 1.9M",
      duration: "10 months"
    },
    {
      image: chwPiping,
      title: "City Life Al Tallha - Ajman",
      scope: "FCUs, CHW Piping, Valve Package Installation",
      status: "Completed",
      date: "Mar 2024",
      location: "Ajman, UAE",
      client: "Al Tallha Development",
      description: "Complete MEP installation for luxury residential complex including chilled water systems, FCU installation, and comprehensive valve package setup.",
      value: "AED 2.5M",
      duration: "8 months"
    },
    {
      image: hvacDuctwork,
      title: "Business Bay Commercial Tower",
      scope: "HVAC System Installation & Ductwork",
      status: "Ongoing",
      date: "Dec 2024",
      location: "Dubai, UAE",
      client: "Emirates Properties",
      description: "Full HVAC system installation for 40-story commercial tower with advanced climate control and energy management systems.",
      value: "AED 5.2M",
      duration: "12 months"
    },
    {
      image: valvePackage,
      title: "Marina Heights Residential",
      scope: "Valve Package & Heat Exchanger Setup",
      status: "Completed",
      date: "Jan 2024",
      location: "Dubai Marina, UAE",
      client: "Marina Development Co.",
      description: "Comprehensive valve package installation and heat exchanger systems for luxury residences with smart automation integration.",
      value: "AED 1.8M",
      duration: "6 months"
    },
    {
      image: chwPiping,
      title: "Sharjah Industrial Complex",
      scope: "CHW Piping & Pump Installation",
      status: "Completed",
      date: "Nov 2023",
      location: "Sharjah, UAE",
      client: "Industrial Holdings LLC",
      description: "Large-scale chilled water piping system for industrial complex with multiple buildings and central plant installation.",
      value: "AED 3.1M",
      duration: "10 months"
    },
    {
      image: hvacDuctwork,
      title: "Abu Dhabi Mall Extension",
      scope: "Extract Duct & Kitchen Ventilation",
      status: "Completed",
      date: "Sep 2023",
      location: "Abu Dhabi, UAE",
      client: "Mall Development Authority",
      description: "Complex kitchen extract systems and ventilation for food court and restaurant areas with fire safety compliance.",
      value: "AED 2.2M",
      duration: "7 months"
    },
    {
      image: valvePackage,
      title: "Green Valley Villas",
      scope: "Complete MEP Package",
      status: "Ongoing",
      date: "Feb 2025",
      location: "Al Ain, UAE",
      client: "Green Valley Developers",
      description: "Full MEP services for luxury villa development including HVAC, plumbing, electrical, and automation systems.",
      value: "AED 4.7M",
      duration: "14 months"
    }
  ];

  const completedProjects = projects.filter(p => p.status === "Completed");
  const ongoingProjects = projects.filter(p => p.status === "Ongoing");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Our Featured Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful MEP and HVAC projects across the UAE. 
              Each project showcases our commitment to quality, innovation, and client satisfaction.
            </p>
            
            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">On Time Delivery</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="text-3xl font-bold text-accent mb-2">AED 50M+</div>
                <div className="text-sm text-muted-foreground">Project Value</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Current Projects</h2>
            <p className="text-lg text-muted-foreground">
              Projects currently under development and execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 text-white p-2 rounded text-sm">
                      Value: {project.value}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-accent transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {project.scope}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Completion: {project.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Wrench className="w-4 h-4" />
                      Duration: {project.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Completed Projects</h2>
            <p className="text-lg text-muted-foreground">
              Successfully delivered projects showcasing our expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 text-white p-2 rounded text-sm">
                      Value: {project.value}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-accent transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {project.scope}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Completed: {project.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Wrench className="w-4 h-4" />
                      Duration: {project.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Start Your Next Project</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to join our portfolio of successful projects? Contact us today 
            for a consultation and detailed proposal.
          </p>
          <Button variant="accent" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;