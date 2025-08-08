import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About SplendorUAE</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over 15 years of excellence in the MEP and HVAC industry, SplendorUAE has established 
              itself as the most trusted partner for commercial and residential projects across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2009, SplendorUAE began as a small team of passionate engineers 
                with a vision to revolutionize MEP and HVAC services in the UAE. Today, we 
                stand as a leading service provider with over 500 successful projects.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our journey has been marked by continuous innovation, unwavering commitment 
                to quality, and building lasting relationships with clients across the region.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  ISO Certified
                </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  Licensed Engineers
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/ed0e910b-b807-4822-b27f-8476ed5e2ec5.png" 
                alt="SplendorUAE Company" 
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="text-accent mb-4 flex justify-center">
                  <Target className="w-12 h-12" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver exceptional MEP and HVAC solutions that exceed client expectations 
                  while maintaining the highest standards of safety, quality, and sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="text-accent mb-4 flex justify-center">
                  <Eye className="w-12 h-12" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative MEP contractor in the UAE, setting 
                  industry benchmarks for excellence and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="text-accent mb-4 flex justify-center">
                  <Heart className="w-12 h-12" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrity, Excellence, Innovation, and Commitment to our clients, 
                  team members, and the communities we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that define our journey of excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-accent/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="bg-accent/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-accent/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Expert Team Members</div>
            </div>
            <div className="bg-accent/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;