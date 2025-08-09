import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
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
    </div>
  );
};

export default FloatingCTA;