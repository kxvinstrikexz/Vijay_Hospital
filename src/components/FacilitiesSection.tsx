import React, { useState } from 'react';
import { FACILITIES, Facility } from '../data/hospitalData';

export const FacilitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredFacilities = filter === 'all' 
    ? FACILITIES 
    : FACILITIES.filter(f => f.category === filter);

  return (
    <section id="facilities" className="py-20 md:py-32 bg-sand/25 border-y border-sand/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b border-sand">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest-700 font-semibold block mb-2">
              03 / Hospital Infrastructure
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-tight">
              Spaces Designed <br />
              <span className="italic font-light text-forest-700">Around Care.</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-light">
              From continuous central oxygen delivery and advanced infant incubators to an automated on-site pathology laboratory and 24/7 pharmacy.
            </p>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: 'All 12 Facilities', value: 'all' },
                { label: 'Inpatient & Wards', value: 'inpatient' },
                { label: 'Emergency & ICU', value: 'emergency' },
                { label: 'Clinical & Lab', value: 'clinical' },
                { label: 'Pharmacy', value: 'support' },
              ].map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    filter === tab.value
                      ? 'bg-forest-700 text-ivory font-medium shadow-sm'
                      : 'bg-ivory text-charcoal/70 hover:bg-sand/60 border border-sand'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photography-Led Asymmetrical Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((facility: Facility, index: number) => {
            const hasImage = Boolean(facility.image);
            const isFeatured = index === 1 || facility.id === 'pharmacy' || facility.id === 'laboratory';

            return (
              <div
                key={facility.id}
                className={`group rounded-2xl overflow-hidden border border-sand bg-ivory shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isFeatured && hasImage ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Facility Image if present */}
                {hasImage ? (
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-forest-900">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent"></div>
                    
                    {facility.badge && (
                      <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-forest-900/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-sand border border-sand/30">
                        {facility.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-sage-light">
                        {facility.imageType === 'illustrative' ? 'Clinical Overview' : 'Authentic Facility'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-sand/60 text-forest-700 flex items-center justify-center font-mono text-xs font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {facility.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-sand/60 text-[10px] font-mono uppercase tracking-wider text-forest-800 border border-sand">
                        {facility.badge}
                      </span>
                    )}
                  </div>
                )}

                {/* Facility Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-forest-900 group-hover:text-forest-700 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-sand/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-charcoal/50 uppercase tracking-wider">
                      {facility.category.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-copper flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Available on-site →
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
