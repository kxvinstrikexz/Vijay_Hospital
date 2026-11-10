import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ChildFriendlySection } from './components/ChildFriendlySection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-forest-700 selection:text-ivory">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Editorial Hero */}
        <Hero />

        {/* About Section - Healthcare with a Human Touch */}
        <AboutSection />

        {/* 5 Departments - Expertise Across Specialities */}
        <DepartmentsSection />

        {/* 12 Facilities - Spaces Designed Around Care */}
        <FacilitiesSection />

        {/* Child-Friendly Care - A Little More Comfort for Little Ones */}
        <ChildFriendlySection />

        {/* Genuine Hospital Asymmetric Photo Gallery */}
        <GallerySection />

        {/* Contact, Emergency & Location Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
