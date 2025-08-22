import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-50 font-inter relative">
      {/* Extended Hero Background covering entire page */}
      <div className="fixed inset-0 w-full h-full particle-bg">
        <div className="absolute inset-0 overflow-hidden">
          {/* Large geometric shapes across entire page */}
          <div className="absolute w-32 h-32 border border-blue-500/10 rotate-45 animate-spin-slow" style={{ top: "5%", left: "90%" }}></div>
          <div className="absolute w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse" style={{ top: "15%", left: "5%" }}></div>
          <div className="absolute w-28 h-28 border-2 border-cyan-400/15 rounded-full" style={{ top: "85%", left: "85%" }}></div>
          <div className="absolute w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 transform rotate-12" style={{ top: "75%", left: "5%" }}></div>
          
          {/* Additional floating elements */}
          <div className="absolute w-16 h-16 hexagon-shape border border-green-400/15" style={{ top: "40%", left: "95%", animation: "float 12s ease-in-out infinite" }}></div>
          <div className="absolute w-12 h-12 hexagon-shape bg-gradient-to-r from-yellow-500/10 to-orange-500/10" style={{ top: "60%", left: "2%", animation: "float 8s ease-in-out infinite reverse" }}></div>
          <div className="absolute w-14 h-14 border border-pink-400/15 rounded-full" style={{ top: "25%", left: "50%", animation: "float 10s ease-in-out infinite" }}></div>
          <div className="absolute w-18 h-18 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform rotate-45" style={{ top: "90%", left: "45%", animation: "float 15s ease-in-out infinite" }}></div>
        </div>
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
