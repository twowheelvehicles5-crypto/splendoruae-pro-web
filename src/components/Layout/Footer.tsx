import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/ed0e910b-b807-4822-b27f-8476ed5e2ec5.png" 
              alt="SplendorUAE" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4 opacity-90">
              Your trusted MEP & HVAC partner in the UAE with over 15 years of experience 
              and 500+ successful projects.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Clock className="w-4 h-4" />
              <span className="text-sm">15+ Years | 500+ Projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services" className="hover:text-accent transition-smooth">CHW Piping Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">HVAC System Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Valve Package Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Heat Exchanger Setup</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Ductwork Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-smooth">Maintenance Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-accent transition-smooth">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-smooth">Our Projects</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-smooth">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact Us</Link></li>
              <li><a href="#consultation" className="hover:text-accent transition-smooth">Free Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contact Info</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <p>Business Bay, Dubai</p>
                  <p>United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+971501234567" className="hover:text-accent transition-smooth">
                  +971 50 123 4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@splendoruae.com" className="hover:text-accent transition-smooth">
                  info@splendoruae.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; 2024 SplendorUAE. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a 
                href="https://wa.me/971501234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <Link to="/privacy" className="hover:text-accent transition-smooth">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-smooth">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;