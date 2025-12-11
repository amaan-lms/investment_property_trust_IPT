import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import ExperienceBadge from "@/components/home/ExperienceBadge";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectPreview from "@/components/home/ProjectPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServiceHighlights />
        <ExperienceBadge />
        <WhyChooseUs />
        <ProjectPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;