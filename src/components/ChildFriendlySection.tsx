import React from 'react';
import { Smile, Shield, Fish, Gamepad2 } from 'lucide-react';

export const ChildFriendlySection: React.FC = () => {
  return (
    <section id="child-friendly" className="py-20 md:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative Warm Accent Blur */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-sand/60 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-sand">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-copper font-semibold block mb-2">
              04 / Pediatric Care Atmosphere
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-tight">
              A Little More Comfort <br />
              <span className="italic font-light text-forest-700">for Little Ones.</span>
            </h2>
          </div>
          <p className="font-sans text-charcoal/70 text-base max-w-md font-light">
            We understand that hospital visits can feel intimidating for children. Every corner of our paediatric waiting space is intentionally curated to bring smiles, calm fears, and restore comfort.
          </p>
        </div>

        {/* Asymmetrical Real Photo Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Large Photo: Live Tropical Aquarium */}
          <div className="md:col-span-7 relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-ivory bg-forest-950">
              <img
                src="/images/aquarium-display.jpg"
                alt="Tropical illuminated fish aquarium in pediatric waiting area at Vijay Hospital"
                className="w-full h-[450px] sm:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/80 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-sand mb-2 border border-sand/20">
                  <Fish className="w-3.5 h-3.5 text-copper-light" />
                  Live Aquatic Display
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory">
                  Calming the mind before the stethoscope
                </h3>
                <p className="text-sand/80 font-sans text-xs sm:text-sm mt-1 max-w-lg">
                  Children love watching the colorful swimming fish, naturally easing pre-examination jitters and making clinic visits pleasant.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Cartoon Murals & Ride-on Toys */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Cartoon Murals Photo Card */}
            <div className="rounded-2xl overflow-hidden border border-sand bg-sand/30 shadow-sm group">
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/images/paediatric-op-corridor.jpg"
                  alt="Colorful cartoon wall art outside Injection OP and Consulting Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sage-light">
                    Friendly Murals
                  </span>
                  <p className="font-serif text-base text-ivory font-medium">
                    Joyful character corridors & playful art
                  </p>
                </div>
              </div>
            </div>

            {/* Ride-On Toys & Reception Seating */}
            <div className="rounded-2xl overflow-hidden border border-sand bg-sand/30 shadow-sm group">
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/images/child-friendly-lounge.jpg"
                  alt="Child-friendly waiting lounge with toys and benches"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sage-light">
                    Safe Play & Waiting
                  </span>
                  <p className="font-serif text-base text-ivory font-medium">
                    Kid-sized ride-ons, toy cars & open space
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Thoughtful Pillars for Parents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-sand/30 border border-sand space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-700 text-ivory flex items-center justify-center">
              <Smile className="w-5 h-5 text-sand" />
            </div>
            <h4 className="font-serif text-xl font-bold text-forest-900">
              Gentle Pediatricians
            </h4>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              Dr. Radahamani, M.D. Paediatrics approaches each child with tenderness, gentle humor, and boundless patience.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sand/30 border border-sand space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-700 text-ivory flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-sand" />
            </div>
            <h4 className="font-serif text-xl font-bold text-forest-900">
              Toys & Entertainment
            </h4>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              Clean, interactive ride-on toys and cartoons keep youngsters joyfully occupied while parents consult the physician.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sand/30 border border-sand space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-700 text-ivory flex items-center justify-center">
              <Fish className="w-5 h-5 text-sand" />
            </div>
            <h4 className="font-serif text-xl font-bold text-forest-900">
              Living Aquarium
            </h4>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              Scientifically proven bio-distraction: an illuminated aquarium that captivates children's attention before vaccinations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sand/30 border border-sand space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-700 text-ivory flex items-center justify-center">
              <Shield className="w-5 h-5 text-sand" />
            </div>
            <h4 className="font-serif text-xl font-bold text-forest-900">
              Newborn Incubator Care
            </h4>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              Immediate access to Phoenix radiant warmers, phototherapy, and neonatal vitals monitoring when specialized care is essential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
