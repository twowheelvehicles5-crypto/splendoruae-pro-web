import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-white mb-6 animate-fade-in">
            Your Trusted MEP & HVAC Partner in the UAE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in">
            Professional HVAC solutions with 15+ years of experience and 500+ successful projects. 
            From CHW piping to complete MEP installations.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in">
            <div className="flex items-center gap-2 text-accent">
              <Trophy className="w-6 h-6" />
              <span className="text-lg font-semibold">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Users className="w-6 h-6" />
              <span className="text-lg font-semibold">500+ Projects</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-semibold">Licensed & Certified</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#consultation" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#services">View Our Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;