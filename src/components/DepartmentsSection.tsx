import React, { useState } from 'react';
import { DEPARTMENTS, Department } from '../data/hospitalData';
import { ChevronDown, Calendar } from 'lucide-react';

export const DepartmentsSection: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<string>(DEPARTMENTS[0].id);

  return (
    <section id="departments" className="py-20 md:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-sand">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest-700 font-semibold block mb-2">
              02 / Clinical Focus
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-tight">
              Expertise Across <br />
              <span className="italic font-light text-forest-700">Specialities.</span>
            </h2>
          </div>
          <p className="font-sans text-charcoal/70 text-base max-w-md font-light">
            Dedicated consulting physicians with advanced medical qualifications delivering focused, compassionate care across five critical healthcare pillars.
          </p>
        </div>

        {/* Custom Editorial Numbered List */}
        <div id="doctors" className="divide-y divide-sand/90 border-y border-sand/90">
          {DEPARTMENTS.map((dept: Department) => {
            const isOpen = activeDepartment === dept.id;

            return (
              <div 
                key={dept.id}
                className={`transition-colors duration-300 ${
                  isOpen ? 'bg-sand/30' : 'hover:bg-sand/15'
                }`}
              >
                {/* Main Collapsible / Interactive Row */}
                <button
                  onClick={() => setActiveDepartment(isOpen ? '' : dept.id)}
                  className="w-full py-8 sm:py-10 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 focus:outline-none group px-2 sm:px-4"
                  aria-expanded={isOpen}
                >
                  {/* Left: Number & Department Name */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span className="font-mono text-xl sm:text-2xl font-light text-forest-700/60 group-hover:text-forest-700 transition-colors">
                      {dept.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-900 font-medium group-hover:text-forest-700 transition-colors">
                        {dept.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-copper font-medium tracking-wide mt-1">
                        {dept.doctor} — <span className="font-mono text-charcoal/70">{dept.qualification}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right: Badge, Schedule snippet & Expand Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pl-12 md:pl-0">
                    <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider text-forest-800/70 bg-sand/60 px-3 py-1.5 rounded-full border border-forest-700/10">
                      {dept.schedule}
                    </span>

                    <div className={`w-10 h-10 rounded-full border border-forest-700/20 flex items-center justify-center text-forest-700 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-forest-700 text-ivory border-forest-700' : 'group-hover:bg-sand'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Expanded Detail Panel */}
                {isOpen && (
                  <div className="px-4 sm:px-14 pb-10 pt-2 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-2xl bg-ivory border border-sand shadow-sm">
                      
                      {/* Doctor Credential Card */}
                      <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-sand pb-6 lg:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-forest-700 text-ivory flex items-center justify-center font-serif text-xl font-bold">
                            {dept.doctor.replace('Dr. ', '')[0]}
                          </div>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-widest text-copper block">
                              Attending Specialist
                            </span>
                            <h4 className="font-serif text-2xl font-bold text-forest-900">
                              {dept.doctor}
                            </h4>
                            <p className="font-mono text-xs font-semibold text-forest-700">
                              {dept.qualification}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm font-sans text-charcoal/80 leading-relaxed pt-2">
                          {dept.summary}
                        </p>

                        <div className="pt-2">
                          <span className="inline-flex items-center gap-2 text-xs font-mono text-forest-800 bg-sand/60 px-3 py-1.5 rounded-md">
                            <Calendar className="w-3.5 h-3.5 text-forest-700" />
                            {dept.schedule}
                          </span>
                        </div>
                      </div>

                      {/* Clinical Scope & Focus Areas */}
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-charcoal/60 mb-3">
                            Key Clinical Scope & Procedures
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {dept.focusAreas.map((focus: string, idx: number) => (
                              <div 
                                key={idx}
                                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-sand/30 border border-sand/60 text-xs font-sans text-charcoal"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-forest-700 shrink-0"></span>
                                <span>{focus}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Consultation Contact Prompt */}
                        <div className="pt-4 border-t border-sand">
                          <p className="text-xs text-charcoal/70 font-sans">
                            Consultation inquiries & OPD visits call reception
                          </p>
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
