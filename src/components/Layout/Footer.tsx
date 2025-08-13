import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="/lovable-uploads/ed0e910b-b807-4822-b27f-8476ed5e2ec5.png" 
              alt="SplendorUAE" 
              className="h-10 sm:h-12 w-auto mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-sm sm:text-base mb-4 opacity-90 leading-relaxed">
              Your trusted MEP & HVAC partner in the UAE with over 15 years of experience 
              and 500+ successful projects.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">15+ Years | 500+ Projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services" className="hover:text-accent transition-smooth touch-target">CHW Piping Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth touch-target">HVAC System Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth touch-target">Valve Package Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth touch-target">Heat Exchanger Setup</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth touch-target">Ductwork Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth touch-target">Maintenance Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-accent transition-smooth touch-target">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-smooth touch-target">Our Projects</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-smooth touch-target">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-smooth touch-target">Contact Us</Link></li>
              <li><a href="#consultation" className="hover:text-accent transition-smooth touch-target">Free Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contact Info</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p>Business Bay, Dubai</p>
                  <p>United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+971568423944" className="hover:text-accent transition-smooth touch-target">
                  56 842 3944 & +971 56 257 8722
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:info@splendoruae.com" className="hover:text-accent transition-smooth touch-target break-all">
                  info@splendoruae.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90 gap-4">
            <p>&copy; 2024 SplendorUAE. All rights reserved.</p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a 
                href="https://api.whatsapp.com/send?phone=971562578722"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth touch-target"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <Link to="/privacy" className="hover:text-accent transition-smooth touch-target">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-smooth touch-target">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;