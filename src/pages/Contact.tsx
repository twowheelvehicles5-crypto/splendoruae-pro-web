import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Calendar } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConsultationSubmitting, setIsConsultationSubmitting] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1000);
  };

  const handleConsultationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConsultationSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Booked!",
        description: "We'll contact you shortly to confirm your free consultation appointment.",
      });
      (e.target as HTMLFormElement).reset();
      setIsConsultationSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Get In Touch With Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your MEP and HVAC project? Our expert team is here to help 
              you with professional solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="text-accent mb-2 flex justify-center">
                  <MapPin className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Business Bay<br />
                  Dubai, UAE<br />
                  P.O. Box 12345
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="text-accent mb-2 flex justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg">Phone Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="tel:+971501234567" className="hover:text-accent transition-smooth">
                    +971 50 123 4567
                  </a><br />
                  <a href="tel:+97145678901" className="hover:text-accent transition-smooth">
                    +971 4 567 8901
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="text-accent mb-2 flex justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg">Email Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="mailto:info@splendoruae.com" className="hover:text-accent transition-smooth">
                    info@splendoruae.com
                  </a><br />
                  <a href="mailto:projects@splendoruae.com" className="hover:text-accent transition-smooth">
                    projects@splendoruae.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="text-accent mb-2 flex justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg">Working Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Saturday: 8:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-accent" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Have a question or need more information? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact_name">Full Name *</Label>
                      <Input 
                        id="contact_name" 
                        name="name" 
                        required 
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact_email">Email Address *</Label>
                      <Input 
                        id="contact_email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact_phone">Phone Number</Label>
                      <Input 
                        id="contact_phone" 
                        name="phone" 
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact_company">Company Name</Label>
                      <Input 
                        id="contact_company" 
                        name="company" 
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service_interest">Service Interest</Label>
                    <Select name="service_interest">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chw-piping">CHW Piping Systems</SelectItem>
                        <SelectItem value="hvac-installation">HVAC Installation</SelectItem>
                        <SelectItem value="valve-package">Valve Package Installation</SelectItem>
                        <SelectItem value="heat-exchanger">Heat Exchanger Setup</SelectItem>
                        <SelectItem value="ductwork">Ductwork Installation</SelectItem>
                        <SelectItem value="mep-services">Complete MEP Services</SelectItem>
                        <SelectItem value="maintenance">Maintenance Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contact_message">Message *</Label>
                    <Textarea 
                      id="contact_message" 
                      name="message" 
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Free Consultation Form */}
            <Card className="shadow-elegant" id="consultation">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Book Free Consultation
                </CardTitle>
                <CardDescription>
                  Schedule a complimentary consultation with our MEP experts.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="consult_name">Full Name *</Label>
                      <Input 
                        id="consult_name" 
                        name="name" 
                        required 
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="consult_email">Email Address *</Label>
                      <Input 
                        id="consult_email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="consult_phone">Phone Number *</Label>
                      <Input 
                        id="consult_phone" 
                        name="phone" 
                        required
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="consult_company">Company Name</Label>
                      <Input 
                        id="consult_company" 
                        name="company" 
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project_type">Project Type</Label>
                    <Select name="project_type">
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="residential">Residential Complex</SelectItem>
                        <SelectItem value="industrial">Industrial Facility</SelectItem>
                        <SelectItem value="healthcare">Healthcare Facility</SelectItem>
                        <SelectItem value="hospitality">Hotel/Restaurant</SelectItem>
                        <SelectItem value="retail">Retail/Mall</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferred_date">Preferred Date</Label>
                      <Input 
                        id="preferred_date" 
                        name="preferred_date" 
                        type="date"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferred_time">Preferred Time</Label>
                      <Select name="preferred_time">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 3PM)</SelectItem>
                          <SelectItem value="evening">Evening (3PM - 6PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="project_description">Project Description</Label>
                    <Textarea 
                      id="project_description" 
                      name="project_description" 
                      rows={3}
                      placeholder="Brief description of your project..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    disabled={isConsultationSubmitting}
                  >
                    {isConsultationSubmitting ? "Booking..." : "Book Free Consultation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Visit our office in the heart of Dubai's business district
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">SplendorUAE Office</h3>
                <p className="text-muted-foreground">
                  Business Bay, Dubai, UAE<br />
                  Google Maps integration available
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <a 
                    href="https://maps.app.goo.gl/n7vrNxnWRonnK8hw9?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            For urgent inquiries or emergency services, contact us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+971568423944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: 56 842 3944 & +971 56 257 8722
              </a>
            </Button>
            <Button variant="accent" size="lg" asChild>
              <a 
                href="https://api.whatsapp.com/send?phone=971562578722"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;