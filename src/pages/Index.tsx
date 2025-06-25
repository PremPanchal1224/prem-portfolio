
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="w-full bg-darkbg font-poppins">
      <Navbar />
      <div className="pt-20" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <AchievementsSection />
      <ContactSection />
      <footer className="py-8 text-center text-gray-400 bg-section">
        &copy; {new Date().getFullYear()} Prem Panchal. All rights reserved.
      </footer>
    </main>
  );
};
export default Index;
