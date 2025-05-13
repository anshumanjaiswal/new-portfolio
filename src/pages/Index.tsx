
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
    </Layout>
  );
};

export default Index;
