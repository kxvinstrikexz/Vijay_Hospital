import React from 'react';
import { Stethoscope, CheckCircle2 } from 'lucide-react';
import { BotanicalSignature } from './BotanicalSignature';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-sand/30 border-y border-sand/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with index label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-sand">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest-700 font-semibold block mb-2">
              01 / Care Philosophy
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-tight">
              Healthcare with a <br />
              <span className="italic font-light text-forest-700">Human Touch.</span>
            </h2>
          </div>
          <div className="flex items-center sm:flex-col sm:items-end gap-3 text-left sm:text-right">
            {/* Subtle botanical line-art transition */}
            <BotanicalSignature variant="about" size={64} colorScheme="sage" className="shrink-0" />
            <p className="font-mono text-xs text-charcoal/60 uppercase tracking-widest max-w-xs">
              Patient Dignity • Clear Medical Communication • Genuine Healing
            </p>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Hospital Photography */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-ivory bg-forest-900 group">
              <img
                src="/images/consultation-room.jpg"
                alt="Doctor consultation room at Vijay Hospital with serene artwork and medical equipment"
                className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="px-2.5 py-1 rounded bg-forest-800/90 text-[10px] font-mono uppercase tracking-wider text-sand border border-sand/20 mb-2 inline-block">
                  Consultation Suite
                </span>
                <p className="font-serif text-lg text-ivory font-medium">
                  Private, quiet consulting rooms designed for unhurried discussions with specialists.
                </p>
              </div>
            </div>

            {/* Small reassurance callout */}
            <div className="p-4 rounded-xl bg-ivory border border-sand flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-forest-700 text-ivory flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-sage-light" />
              </div>
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                Consultations are never hurried. We take the time needed to thoroughly evaluate conditions, explain treatment choices, and answer every family question.
              </p>
            </div>
          </div>

          {/* Right: Concise Narrative grounded in real care principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <p className="font-serif text-2xl sm:text-3xl text-forest-900 leading-snug">
                At Vijay Hospital, we believe medical care must be as thoughtful and comforting as it is clinically sound.
              </p>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
                Serving patients and families across Usilampatti and surrounding towns, our practice brings together experienced physicians across core clinical branches—Paediatrics, Internal Medicine & Diabetology, Dermatology, General Surgery, and Orthopedics.
              </p>
              <p className="font-sans text-base text-charcoal/80 leading-relaxed font-light">
                Rather than treating patients as case numbers, our medical team focuses on personal accountability. Every recommendation is made with clinical transparency, practical guidance, and deep respect for the individual and their family.
              </p>
            </div>

            {/* Core Care Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sand">
              <div className="p-4 rounded-xl bg-ivory/80 border border-sand/80 space-y-2">
                <div className="flex items-center gap-2 text-forest-800 font-serif font-semibold text-lg">
                  <CheckCircle2 className="w-4 h-4 text-forest-700" />
                  <span>Experienced Doctors</span>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  Direct consultations with senior post-graduate doctors holding specialized degrees in their respective clinical disciplines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory/80 border border-sand/80 space-y-2">
                <div className="flex items-center gap-2 text-forest-800 font-serif font-semibold text-lg">
                  <CheckCircle2 className="w-4 h-4 text-forest-700" />
                  <span>Integrated Support</span>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  Direct on-site access to blood diagnostics, automated hematology, central oxygen supply, and a 24/7 in-house pharmacy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory/80 border border-sand/80 space-y-2">
                <div className="flex items-center gap-2 text-forest-800 font-serif font-semibold text-lg">
                  <CheckCircle2 className="w-4 h-4 text-forest-700" />
                  <span>Child-Friendly Setting</span>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  Specially painted pediatric spaces, live aquarium, and gentle doctors to reduce anxiety for little children.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory/80 border border-sand/80 space-y-2">
                <div className="flex items-center gap-2 text-forest-800 font-serif font-semibold text-lg">
                  <CheckCircle2 className="w-4 h-4 text-forest-700" />
                  <span>24/7 Emergency Care</span>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                  Emergency casualty team, day-and-night pharmacy, and acute resuscitation capability ready round the clock.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
