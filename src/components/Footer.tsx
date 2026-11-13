import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';
import { DEPARTMENTS } from '../data/hospitalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Care', href: '#about' },
    { label: 'Departments', href: '#departments' },
    { label: 'Consulting Doctors', href: '#doctors' },
    { label: 'Hospital Facilities', href: '#facilities' },
    { label: 'Child-Friendly Care', href: '#child-friendly' },
    { label: 'Hospital Gallery', href: '#gallery' },
    { label: 'Contact & Directions', href: '#contact' },
  ];

  return (
    <footer className="bg-forest-950 text-ivory pt-20 pb-12 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-forest-800/80">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" />
            
            <p className="font-sans text-sm text-sand/80 font-light max-w-sm leading-relaxed">
              Thoughtful healthcare, experienced specialists, and compassionate care for every generation.
              Committed to medical dignity, transparent clinical guidance, and round-the-clock emergency support.
            </p>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-sage-light">
              Navigation
            </p>
            <ul className="space-y-2.5 font-sans text-sm text-sand/80">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="hover:text-ivory transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-sage-light/60"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialities (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-sage-light">
              Consulting Specialities
            </p>
            <ul className="space-y-2.5 font-sans text-sm text-sand/80">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id} className="flex items-baseline justify-between gap-2 border-b border-forest-800/40 pb-1.5">
                  <span className="text-ivory font-serif font-medium">{dept.name}</span>
                  <span className="font-mono text-xs text-sand/60">{dept.doctor}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 text-xs font-mono text-sand/60">
          <div className="flex flex-col items-center sm:items-start gap-1.5 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} Vijay Hospital. All Rights Reserved.</span>
              <span>•</span>
              <span className="hidden sm:inline">Usilampatti, Madurai District</span>
            </div>
            <p className="text-[11px] text-sand/50">
              <span>Designed & Developed by </span>
              <a
                href="https://kevinsivraj.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/75 hover:text-ivory transition-colors underline-offset-4 hover:underline"
              >
                Kevin Siv Raj M S
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sand/80 hover:text-ivory transition-colors group self-center sm:self-auto"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-forest-800 group-hover:bg-forest-700 flex items-center justify-center text-ivory transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
