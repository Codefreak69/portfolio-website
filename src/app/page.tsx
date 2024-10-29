import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/project-section";
import ThreeDSection from "@/components/three-d-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ThreeDSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
