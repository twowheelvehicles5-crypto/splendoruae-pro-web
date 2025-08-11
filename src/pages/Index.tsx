import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import AIServicesSection from "@/components/Home/AIServicesSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AIServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
    </Layout>
  );
};

export default Index;
