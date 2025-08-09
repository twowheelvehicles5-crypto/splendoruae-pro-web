import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+971501234567" className="flex items-center gap-2 hover:text-accent transition-smooth">
                <Phone className="w-4 h-4" />
                +971 50 123 4567
              </a>
              <a href="mailto:info@splendoruae.com" className="flex items-center gap-2 hover:text-accent transition-smooth">
                <Mail className="w-4 h-4" />
                info@splendoruae.com
              </a>
            </div>
            <div className="hidden md:block">
              <span>15+ Years Experience | 500+ Projects Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ed0e910b-b807-4822-b27f-8476ed5e2ec5.png" 
              alt="SplendorUAE - HVAC Reliable Solution" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-smooth ${
                  isActive(item.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button variant="cta" asChild>
              <a href="https://web.whatsapp.com/send?phone=971562578722">WhatsApp</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-smooth ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button variant="cta" asChild>
                  <a href="https://web.whatsapp.com/send?phone=971562578722">WhatsApp</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;