import React from 'react';
import { Phone, MapPin, Clock, ShieldAlert, Navigation, Building2, Pill } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/hospitalData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-forest-900 text-ivory relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-forest-800/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-forest-800">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage-light font-semibold block mb-2">
              06 / Hospital Contact & Location
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory leading-tight">
              Hospital Access & <br />
              <span className="italic font-light text-sage-light">Visiting Information.</span>
            </h2>
          </div>
          <p className="font-sans text-sand/80 text-sm max-w-sm font-light">
            Conveniently situated in Usilampatti with 24/7 emergency casualty, continuous medical oxygen, and on-site pharmacy services.
          </p>
        </div>

        {/* Editorial Information Architecture: 2 Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Essential Contacts, Clinical Hours & Emergency Protocols (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Primary Direct Helpline Banner */}
            <div className="p-8 rounded-3xl bg-forest-950/80 border border-forest-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-xs font-mono uppercase tracking-wider text-sage-light border border-forest-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  24/7 Casualty & Reception
                </span>
                <span className="text-xs font-mono text-sand/60">Usilampatti</span>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-sand/70 mb-1">
                  Main Hospital Telephone
                </p>
                <a
                  href={`tel:${HOSPITAL_CONTACT.phone}`}
                  className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory hover:text-sand transition-colors block"
                >
                  {HOSPITAL_CONTACT.displayPhone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${HOSPITAL_CONTACT.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-full bg-forest-700 hover:bg-forest-600 text-ivory font-mono text-sm font-semibold transition-all shadow-md group"
                >
                  <Phone className="w-4 h-4 text-copper-light group-hover:scale-110 transition-transform" />
                  <span>Call Hospital Front Desk</span>
                </a>
              </div>
            </div>

            {/* Operating Timings & Clinical Departments Card */}
            <div className="p-8 rounded-3xl bg-forest-950/60 border border-forest-800 space-y-6 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Outpatient OPD Hours */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sand font-bold uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-copper-light" />
                    <span>Outpatient (OPD)</span>
                  </div>
                  <p className="text-sand/80 font-sans text-sm">
                    {HOSPITAL_CONTACT.hours.opd}
                  </p>
                  <p className="text-[11px] text-sand/60 font-sans">
                    Walk-in registration available directly at ground floor reception.
                  </p>
                </div>

                {/* Emergency & Casualty */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sand font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                    <span>Emergency & Trauma</span>
                  </div>
                  <p className="text-emerald-400 font-sans text-sm font-semibold">
                    Open 24 Hours / 365 Days
                  </p>
                  <p className="text-[11px] text-sand/60 font-sans">
                    Round-the-clock attending medical officer and trauma team on duty.
                  </p>
                </div>

              </div>

              {/* In-House Pharmacy & Patient Services */}
              <div className="pt-6 border-t border-forest-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sand font-bold uppercase tracking-wider">
                    <Pill className="w-4 h-4 text-copper-light" />
                    <span>Vijay Pharmacy</span>
                  </div>
                  <p className="text-sand/80 font-sans text-xs">
                    In-house dispensary open 24/7 for prescriptions and pediatric medications.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sand font-bold uppercase tracking-wider">
                    <Building2 className="w-4 h-4 text-copper-light" />
                    <span>Inpatient (IP) Care</span>
                  </div>
                  <p className="text-sand/80 font-sans text-xs">
                    Common wards and 4 single private recovery suites with central oxygen.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Address, Google Maps & Directions (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address & Navigation Card */}
            <div className="p-8 rounded-3xl bg-forest-950/60 border border-forest-800 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-800 text-copper-light flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sage-light block mb-1">
                    Hospital Location
                  </span>
                  <h3 className="font-serif text-2xl text-ivory font-medium">
                    Vijay Hospital, Usilampatti
                  </h3>
                  <p className="text-sand/80 font-sans text-sm mt-1 leading-relaxed">
                    {HOSPITAL_CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={HOSPITAL_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-ivory text-forest-900 font-mono text-xs font-bold hover:bg-sand transition-colors shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-forest-800 bg-forest-950 flex-1 min-h-[300px] flex flex-col">
              <div className="p-4 bg-forest-950/95 flex items-center justify-between text-xs font-mono text-sand/80 border-b border-forest-800">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-copper"></span>
                  Interactive Map: Usilampatti
                </span>
                <a
                  href={HOSPITAL_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper-light hover:underline font-semibold"
                >
                  Directions ↗
                </a>
              </div>

              <iframe
                title="Vijay Hospital Usilampatti Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2227187123985!2d77.78642647585068!3d9.957661790145607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0737d0c8f9dc35%3A0xf2c9a6563850e89!2sVijay%20Hospital!5e0!3m2!1sen!2sin!4v1730538000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '260px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full flex-1 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
