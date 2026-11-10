import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { BotanicalSignature } from './BotanicalSignature';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-20 md:pt-10 md:pb-28 overflow-hidden">
      {/* Subtle organic background gradient & grain accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-sage/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-sand/60 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Top Eyebrow Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-sand/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-forest-700"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-forest-700 font-semibold">
              Usilampatti • Madurai District
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-charcoal/70">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-copper" />
              Easy Access on Main Road
            </span>
            <span className="inline-flex items-center gap-1.5 text-forest-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Outpatient & Inpatient Services Open
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/70 border border-forest-700/10 text-forest-800 text-xs font-mono uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper"></span>
                  Multispeciality Medical Excellence
                </div>
                {/* Botanical Reveal near headline */}
                <BotanicalSignature variant="hero" size={36} colorScheme="dark" className="shrink-0" />
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal leading-[1.05] tracking-tight text-forest-900">
                Care That Grows <br />
                <span className="italic font-light text-forest-700">With You.</span>
              </h1>
            </div>

            {/* Sub-headline description */}
            <p className="font-sans text-lg sm:text-xl text-charcoal/80 max-w-2xl font-light leading-relaxed">
              Thoughtful healthcare, experienced specialists, and compassionate care for every generation. 
              From gentle paediatric attention to advanced diagnostics, surgery, and 24/7 pharmacy services.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('#departments')}
                className="px-8 py-4 rounded-full bg-forest-700 text-ivory font-medium hover:bg-forest-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-base"
              >
                Explore Departments
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 rounded-full bg-sand/50 hover:bg-sand border border-forest-700/20 text-forest-900 font-medium transition-all text-base"
              >
                Contact Us
              </button>
            </div>

            {/* Editorial Highlight Strip */}
            <div className="pt-6 border-t border-sand/80 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono">
              <div>
                <p className="text-2xl sm:text-3xl font-serif text-forest-900 font-medium">05</p>
                <p className="text-xs text-charcoal/70 uppercase tracking-wider mt-1">Core Specialities</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif text-forest-900 font-medium">24/7</p>
                <p className="text-xs text-charcoal/70 uppercase tracking-wider mt-1">Pharmacy & Trauma</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-serif text-forest-900 font-medium">100%</p>
                <p className="text-xs text-charcoal/70 uppercase tracking-wider mt-1">Central Piped O₂</p>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Real Photography Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Real Hospital Photo: Main Atrium & Waiting Lounge */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory bg-forest-900 group">
                <img
                  src="/images/hero-hospital-atrium.jpg"
                  alt="Vijay Hospital main reception, pediatric seating and aquarium atrium"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette to ensure editorial elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>

                {/* Real caption on photo */}
                <div className="absolute bottom-5 left-5 right-5 text-ivory">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-forest-900/80 backdrop-blur-md text-[11px] font-mono tracking-wider uppercase text-sand mb-1.5 border border-sand/20">
                    Hospital Interior
                  </div>
                  <p className="font-serif text-lg font-medium text-ivory leading-snug">
                    Comfortable, naturally-lit waiting lounge with live tropical aquarium
                  </p>
                </div>
              </div>

              {/* Floating Real Secondary Photo: In-House 24/7 Pharmacy */}
              <div className="hidden sm:block absolute -bottom-8 -left-10 w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-ivory bg-forest-900 transition-transform duration-500 hover:-translate-y-1">
                <img
                  src="/images/vijay-pharmacy-counter.jpg"
                  alt="Vijay Pharmacy storefront counter"
                  className="w-full h-36 object-cover"
                  loading="eager"
                />
                <div className="p-3 bg-forest-900 text-ivory text-left">
                  <div className="flex items-center justify-between text-[10px] font-mono text-sage-light uppercase tracking-wider mb-0.5">
                    <span>In-House</span>
                    <span className="text-copper-light font-bold">24/7 OPEN</span>
                  </div>
                  <p className="font-serif text-sm font-semibold text-ivory leading-tight">
                    Vijay Pharmacy
                  </p>
                </div>
              </div>

              {/* Premium Rod of Asclepius Medical Emblem */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-ivory border border-sand/80 shadow-lg flex items-center justify-center p-2.5 transition-shadow duration-300 hover:shadow-xl cursor-default"
                role="img"
                aria-label="Medical care"
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
                  {/* Forest Green Circular Base (#243D32) */}
                  <circle cx="50" cy="50" r="47" fill="#243D32" />
                  
                  {/* Delicate Muted Gold Inner Accent Rim (#B77D5C) */}
                  <circle cx="50" cy="50" r="42" stroke="#B77D5C" strokeWidth="1.2" strokeOpacity="0.35" />

                  {/* Subtle Integrated Medical Cross (+) */}
                  {/* Base cross in muted gold */}
                  <path 
                    d="M50 32 V68 M32 50 H68" 
                    stroke="#B77D5C" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeOpacity="0.28" 
                  />
                  {/* Fine inner cross in Warm Ivory */}
                  <path 
                    d="M50 32 V68 M32 50 H68" 
                    stroke="#F5F1E8" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeOpacity="0.35" 
                  />

                  {/* The Staff of Asclepius (Central Medical Rod in Muted Gold #B77D5C) */}
                  <line 
                    x1="50" y1="18" x2="50" y2="82" 
                    stroke="#B77D5C" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  {/* Staff Finial Knob / Restorative Node */}
                  <circle cx="50" cy="17" r="3.2" fill="#B77D5C" />
                  <circle cx="50" cy="17" r="1.5" fill="#F5F1E8" />
                  
                  {/* Bottom Finial Node */}
                  <circle cx="50" cy="82" r="1.8" fill="#B77D5C" />

                  {/* Asclepius Serpent (Elegantly Wrapped, Sleek Line Art in Warm Ivory #F5F1E8) */}
                  <path 
                    d="M 44 76 
                       C 40 72, 42 66, 47 63 
                       C 55 58, 56 53, 51 49 
                       C 44 44, 43 38, 48 33 
                       C 54 28, 54 23, 49 20 
                       C 46 18, 43 20.5, 45 23" 
                    stroke="#F5F1E8" 
                    strokeWidth="2.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  
                  {/* Delicate Serpent Crown Accent */}
                  <path 
                    d="M 45 23 C 45.5 24.5, 47.5 24.5, 48 23" 
                    stroke="#B77D5C" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 pt-6 flex justify-center">
          <button
            onClick={() => scrollToSection('#about')}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest-700/60 hover:text-forest-700 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span>Learn About Our Care Philosophy</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
