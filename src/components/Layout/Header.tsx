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
    <header className="bg-background shadow-card sticky top-0 z-50 border-b border-border/10">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-1 sm:py-2">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a href="tel:+971501234567" className="flex items-center gap-2 hover:text-accent transition-smooth touch-target">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">+971 50 123 4567</span>
              </a>
              <a href="mailto:info@splendoruae.com" className="flex items-center gap-2 hover:text-accent transition-smooth touch-target">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="hidden xs:inline">info@splendoruae.com</span>
                <span className="xs:hidden">Email Us</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span className="text-xs lg:text-sm">15+ Years Experience | 500+ Projects Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-2 sm:py-3 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/ed0e910b-b807-4822-b27f-8476ed5e2ec5.png" 
              alt="SplendorUAE - HVAC Reliable Solution" 
              className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto max-w-full object-contain"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-smooth text-sm xl:text-base touch-target ${
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
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Button variant="outline" size="sm" className="text-sm touch-target" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button variant="cta" size="sm" className="text-sm touch-target" asChild>
              <a href="https://api.whatsapp.com/send?phone=971562578722">WhatsApp</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 touch-target"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/20 animate-slide-up">
            <div className="flex flex-col space-y-1 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-smooth py-3 px-2 rounded-lg touch-target ${
                    isActive(item.href)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-6">
                <Button variant="outline" className="touch-target" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
                </Button>
                <Button variant="cta" className="touch-target" asChild>
                  <a href="https://api.whatsapp.com/send?phone=971562578722">WhatsApp</a>
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