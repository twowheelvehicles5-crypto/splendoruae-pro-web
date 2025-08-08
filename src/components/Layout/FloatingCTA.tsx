import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* Consultation Button */}
      <Button 
        variant="cta" 
        size="lg"
        className="shadow-2xl animate-float"
        asChild
      >
        <a href="#consultation" className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Book Free Consultation</span>
          <span className="sm:hidden">Consult</span>
        </a>
      </Button>

      {/* WhatsApp Button */}
      <Button 
        variant="accent" 
        size="lg"
        className="shadow-2xl"
        asChild
      >
        <a 
          href="https://wa.me/971501234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;