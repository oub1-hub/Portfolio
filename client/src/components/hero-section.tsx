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
      {/* Particle Background */}
      <div className="absolute inset-0 particle-bg">
        <ParticleBackground />
        {/* Static floating elements */}
        <div className="particle animate-float" style={{ width: "80px", height: "80px", top: "10%", left: "10%", animationDelay: "0s" }}></div>
        <div className="particle animate-float" style={{ width: "60px", height: "60px", top: "20%", left: "80%", animationDelay: "2s" }}></div>
        <div className="particle animate-float" style={{ width: "100px", height: "100px", top: "60%", left: "70%", animationDelay: "4s" }}></div>
        <div className="particle animate-float" style={{ width: "40px", height: "40px", top: "80%", left: "20%", animationDelay: "1s" }}></div>
        <div className="particle animate-float" style={{ width: "70px", height: "70px", top: "40%", left: "40%", animationDelay: "3s" }}></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-slate-300 text-lg mb-4" data-testid="hero-greeting">
            Hi, This is <span className="text-secondary">Fadoua OUBZA</span>
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
            <span className="text-white">Web Design</span><br />
            <span className="text-white">& Artificial</span><br />
            <span className="text-white">Intelligence</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="hero-description">
            I am a Web Designer and Artificial Intelligence graduate, passionate about creating 
            innovative and user-friendly digital experiences. With a strong foundation in design 
            and a deep understanding of AI, I specialize in building modern.
          </p>
          <button 
            onClick={scrollToProjects}
            className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect"
            data-testid="button-view-projects"
          >
            View My Projects
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <i className="fas fa-chevron-down text-slate-400 text-2xl"></i>
      </div>
    </section>
  );
}
