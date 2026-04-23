import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DesireSection from "./components/DesireSection";
import MethodSection from "./components/MethodSection";
import ServicesSection from "./components/ServicesSection";
import ProofSection from "./components/ProofSection";
import AboutSection from "./components/AboutSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <DesireSection />
        <MethodSection />
        <ServicesSection />
        <ProofSection />
        <AboutSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
