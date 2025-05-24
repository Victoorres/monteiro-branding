'use client';

import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ScrollingText from '@/components/scrolling-text';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import MethodsSection from '@/components/methods-section';
import TestimonialsSection from '@/components/testemonials-section';
import CTASection from '@/components/cta-section';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#464545] text-[#f5f3e7] overflow-hidden">
      <Navbar />
      <HeroSection />
      <ScrollingText />
      <ServicesSection />
      <PortfolioSection />
      <MethodsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection/>
      <ContactSection />
      <Footer />
    </div>
  );
}
