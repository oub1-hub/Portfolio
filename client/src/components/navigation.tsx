import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "projects", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-slate-800/50 ${scrolled ? "bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/5" : "bg-slate-900/90 backdrop-blur-sm"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white hover:text-blue-400 transition-all duration-300">
          <span data-testid="brand-name" className="tracking-wide">
  {/* Lettres spéciales */}
  <span  className="animate-spark" style={{ fontFamily: "'Tangerine', cursive", fontSize: "2.5rem", color: "#3e3c99ff" }}>F</span>
  
  {/* Lettres normales */}
  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#ffffff" }}>adoua </span>
  
  {/* Lettres spéciales */}
  <span className="animate-spark" style={{ fontFamily: "'Tangerine', cursive", fontSize: "2.5rem", color: "#4d29afff" }}>O</span>
  
  {/* Lettres normales */}
  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#ffffff" }}>UBZA</span>
</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "projects", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{ fontFamily: "'Playfair display', sans-serif" }}
                className={`nav-link text-slate-300 hover:text-blue-400 transition-all duration-300 capitalize transform hover:scale-105 ${
                  activeSection === section ? "text-blue-400 scale-105" : ""
                }`}
                data-testid={`nav-link-${section}`}
              >
                {section}
              </button>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <a 
              href="https://www.instagram.com/f_oubz/" 
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              data-testid="social-instagram"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a 
              href="https://github.com/oub1-hub" 
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              data-testid="social-github"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/fadoua-oubza-b98089303/" 
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              data-testid="social-linkedin"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700" data-testid="mobile-menu">
          <div className="px-4 py-3 space-y-3">
            {["home", "projects", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block text-slate-300 hover:text-white transition-colors capitalize w-full text-left"
                data-testid={`mobile-nav-${section}`}
              >
                {section}
              </button>
            ))}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
