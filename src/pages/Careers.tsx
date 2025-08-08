import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Users, GraduationCap, Clock, MapPin, Mail, Upload } from "lucide-react";

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const openPositions = [
    {
      title: "HVAC Site Engineer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead HVAC installation projects and coordinate with project teams.",
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "3+ years experience in HVAC systems",
        "UAE experience preferred",
        "Valid UAE driving license"
      ]
    },
    {
      title: "MEP Project Manager",
      department: "Project Management",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      experience: "5-8 years",
      description: "Manage large-scale MEP projects from planning to completion.",
      requirements: [
        "Bachelor's degree in Engineering",
        "5+ years project management experience",
        "PMP certification preferred",
        "Strong leadership skills"
      ]
    },
    {
      title: "Chilled Water Technician",
      department: "Operations",
      location: "Sharjah, UAE",
      type: "Full-time",
      experience: "2-4 years",
      description: "Install and maintain chilled water piping systems.",
      requirements: [
        "Technical diploma in Mechanical",
        "2+ years CHW piping experience",
        "Knowledge of welding and fabrication",
        "Safety certification required"
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Join Our Expert Team</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Build your career with SplendorUAE, where innovation meets expertise. 
              Join a team that's shaping the future of MEP and HVAC solutions in the UAE.
            </p>
            
            {/* Company Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-card">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-semibold">Great Team</div>
                <div className="text-sm text-muted-foreground">Collaborative Environment</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <GraduationCap className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-semibold">Growth</div>
                <div className="text-sm text-muted-foreground">Career Development</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <Briefcase className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-semibold">Benefits</div>
                <div className="text-sm text-muted-foreground">Competitive Package</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-semibold">Balance</div>
                <div className="text-sm text-muted-foreground">Work-Life Balance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground">
              Explore exciting career opportunities with our growing team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{position.title}</CardTitle>
                    <Badge variant="outline">{position.type}</Badge>
                  </div>
                  <CardDescription className="text-primary font-medium">
                    {position.department}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      {position.experience} experience
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {position.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {position.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="hero" className="w-full">
                    Apply for This Position
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Submit Your Application</h2>
              <p className="text-lg text-muted-foreground">
                Ready to join our team? Submit your application and we'll get back to you soon.
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  Career Application Form
                </CardTitle>
                <CardDescription>
                  Fill out the form below to apply for any of our open positions
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        required 
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience_years">Years of Experience</Label>
                      <Input 
                        id="experience_years" 
                        name="experience_years" 
                        type="number" 
                        min="0" 
                        placeholder="5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="position">Position of Interest *</Label>
                    <Select name="position" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map((position, index) => (
                          <SelectItem key={index} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other Position</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cover_letter">Cover Letter / Additional Information</Label>
                    <Textarea 
                      id="cover_letter" 
                      name="cover_letter" 
                      rows={4}
                      placeholder="Tell us about your experience and why you'd like to join SplendorUAE..."
                    />
                  </div>

                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload your CV/Resume (optional)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      You can also email your CV to careers@splendoruae.com
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;