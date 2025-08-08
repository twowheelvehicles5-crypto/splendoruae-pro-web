import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
    </Layout>
  );
};

export default Index;
