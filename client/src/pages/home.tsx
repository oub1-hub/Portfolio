import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-inter">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
