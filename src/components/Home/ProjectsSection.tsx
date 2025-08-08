import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import chwPiping from "@/assets/chw-piping.jpg";
import hvacDuctwork from "@/assets/hvac-ductwork.jpg";
import valvePackage from "@/assets/valve-package.jpg";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      image: chwPiping,
      title: "City Life Al Tallha - Ajman",
      scope: "FCUs, CHW Piping, Valve Package Installation",
      status: "Completed",
      date: "Mar 2024",
      location: "Ajman, UAE",
      description: "Complete MEP installation for luxury residential complex including chilled water systems."
    },
    {
      image: hvacDuctwork,
      title: "Business Bay Commercial Tower",
      scope: "HVAC System Installation & Ductwork",
      status: "Ongoing",
      date: "Dec 2024",
      location: "Dubai, UAE",
      description: "Full HVAC system installation for 40-story commercial tower with advanced climate control."
    },
    {
      image: valvePackage,
      title: "Marina Heights Residential",
      scope: "Valve Package & Heat Exchanger Setup",
      status: "Completed",
      date: "Jan 2024",
      location: "Dubai Marina, UAE",
      description: "Comprehensive valve package installation and heat exchanger systems for luxury residences."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through successful project deliveries across the UAE. 
            Each project demonstrates our commitment to quality and professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-green-600" : "bg-orange-500"}
                  >
                    {project.status}
                  </Badge>
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
                    {project.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;