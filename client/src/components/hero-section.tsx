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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-slate-300 text-lg mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }} data-testid="hero-greeting">
            Hi, This is <span className="text-blue-400 font-semibold">Fadoua OUBZA</span>,
          </p>
          
          {/* Title with Flying Mini Robots */}
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.4s" }} data-testid="hero-title">
              <span className="text-white block">Web Design</span>
              <span className="text-white block">& Artificial</span>
              <span className="text-white block">Intelligence</span>
            </h1>
            
            {/* Flying Mini Robots around the title */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-8 left-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-ai-float flex items-center justify-center text-sm" style={{ animationDelay: "0s" }}>
                🤖
              </div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-purple-500/30 rounded-full animate-robot-bounce flex items-center justify-center text-xs" style={{ animationDelay: "1s" }}>
                🔧
              </div>
              <div className="absolute top-1/2 -left-6 w-7 h-7 bg-green-500/30 rounded-full animate-ml-pulse flex items-center justify-center text-sm" style={{ animationDelay: "2s" }}>
                ⚙️
              </div>
              <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-cyan-500/30 rounded-full animate-ai-float flex items-center justify-center text-sm" style={{ animationDelay: "0.5s" }}>
                🧠
              </div>
              <div className="absolute -bottom-4 left-1/2 w-5 h-5 bg-orange-500/30 rounded-full animate-robot-bounce flex items-center justify-center text-xs" style={{ animationDelay: "1.5s" }}>
                ⚡
              </div>
              <div className="absolute top-3/4 left-1/5 w-6 h-6 bg-pink-500/30 rounded-full animate-ml-pulse flex items-center justify-center text-sm" style={{ animationDelay: "0.8s" }}>
                🚀
              </div>
              
              {/* Geometric shapes flying around */}
              <div className="absolute top-1/3 right-1/4 w-4 h-4 border border-blue-400/40 rotate-45 animate-spin-slow" style={{ animationDelay: "1.2s" }}></div>
              <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: "2.5s" }}></div>
              <div className="absolute top-1/6 right-1/6 w-4 h-4 hexagon-shape bg-green-400/20 animate-ai-float" style={{ animationDelay: "0.3s" }}></div>
            </div>
          </div>
          
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
        
        {/* Profile Picture Area */}
        <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative">
            {/* Main picture container */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-slate-800 border-2 border-blue-500/30 flex items-center justify-center overflow-hidden glow-effect">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Fadoua OUBZA Profile" 
                  className="w-full h-full object-cover"
                  data-testid="profile-image"
                />
              </div>
            </div>
            
            {/* Floating elements around picture */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-ml-pulse flex items-center justify-center">
              💡
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-purple-500/30 rounded-full animate-ai-float flex items-center justify-center">
              💻
            </div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-500/30 rounded-full animate-robot-bounce flex items-center justify-center text-sm">
              🌐
            </div>
            <div className="absolute bottom-1/4 -left-4 w-7 h-7 bg-cyan-500/30 rounded-full animate-ml-pulse flex items-center justify-center">
              📊
            </div>
          </div>
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
