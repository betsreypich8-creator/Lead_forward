
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import ServicesSection from './components/ServicesSection';
import SolutionsSection from './components/SolutionsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ServicesSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
