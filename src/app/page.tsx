import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SOCSection from '@/components/SOCSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <SOCSection />
      <ContactSection />
      <Footer />
    </div>
  );
}