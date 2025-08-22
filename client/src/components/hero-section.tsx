import { useEffect, useState } from "react";
import ParticleBackground from "./particle-background";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Particle Background */}
      <div className="absolute inset-0 particle-bg">
        <ParticleBackground />
        
        {/* Additional floating geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large geometric shapes */}
          <div className="absolute w-32 h-32 border border-blue-500/20 rotate-45 animate-spin-slow" style={{ top: "15%", left: "85%", animation: "float 8s ease-in-out infinite" }}></div>
          <div className="absolute w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse" style={{ top: "25%", left: "15%", animation: "float 6s ease-in-out infinite reverse" }}></div>
          <div className="absolute w-28 h-28 border-2 border-cyan-400/30 rounded-full" style={{ top: "70%", left: "80%", animation: "float 10s ease-in-out infinite" }}></div>
          <div className="absolute w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform rotate-12" style={{ top: "60%", left: "10%", animation: "float 7s ease-in-out infinite" }}></div>
          
          {/* Hexagon shapes */}
          <div className="absolute w-16 h-16 hexagon-shape border border-green-400/30" style={{ top: "30%", left: "75%", animation: "float 9s ease-in-out infinite, spin 15s linear infinite" }}></div>
          <div className="absolute w-12 h-12 hexagon-shape bg-gradient-to-r from-yellow-500/20 to-orange-500/20" style={{ top: "80%", left: "75%", animation: "float 5s ease-in-out infinite reverse" }}></div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-slate-300 text-lg mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }} data-testid="hero-greeting">
            Hi, This is <span className="text-blue-400 font-semibold">Fadoua OUBZA</span>,
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.4s" }} data-testid="hero-title">
            <span className="text-white block">Web Design</span>
            <span className="text-white block">& Artificial</span>
            <span className="text-white block">Intelligence</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.6s" }} data-testid="hero-description">
            I am a Web Designer and Artificial Intelligence 
            graduate, passionate about creating 
            innovative and user-friendly digital 
            experiences. With a strong foundation in design 
            and a deep understanding of AI, I specialize in 
            building modern.
          </p>
          <button 
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect animate-slide-up shadow-lg shadow-blue-500/25"
            style={{ animationDelay: "0.8s" }}
            data-testid="button-view-projects"
          >
            View My Projects
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
