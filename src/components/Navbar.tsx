import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/hospitalData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Departments', href: '#departments' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Child Care', href: '#child-friendly' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top emergency & announcement ticker strip (hidden on mobile, optimized for md+) */}
      <div className="bg-forest-900 text-ivory text-[11px] xl:text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-forest-800/60 hidden md:block z-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono gap-4">
          <div className="flex items-center gap-3 lg:gap-6 min-w-0 shrink">
            <span className="flex items-center gap-2 text-sage-light whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              24/7 Emergency & In-House Pharmacy
            </span>
            <span className="text-sand/40 hidden lg:inline">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-sand/80 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-sage shrink-0" />
              Usilampatti, Madurai District
            </span>
          </div>

          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <span className="hidden xl:flex items-center gap-1.5 text-sand/90 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-copper-light shrink-0" />
              NABH-Standard Clinical Care
            </span>
            <a 
              href={`tel:${HOSPITAL_CONTACT.phone}`} 
              className="flex items-center gap-1.5 font-medium text-ivory hover:text-sage-light transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-copper-light shrink-0" />
              <span>24/7 Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#F5F1E8] shadow-sm py-2.5 sm:py-3 border-b border-sand'
            : 'bg-[#F5F1E8] sm:bg-[#F5F1E8]/95 backdrop-blur-md py-3 sm:py-4 lg:py-5 border-b border-sand/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between gap-2 lg:gap-4 xl:gap-8 w-full">
            
            {/* 1. Left: Brand Logo (Always shrink-0 to prevent overlap) */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="shrink-0 flex items-center group focus:outline-none"
              aria-label="Vijay Hospital Home"
            >
              <Logo />
            </a>

            {/* 2. Center: Desktop Navigation Links (Responsive sizing, no overlap, no line wrap) */}
            <nav 
              className="hidden lg:flex items-center justify-center gap-1 lg:gap-1.5 xl:gap-4 2xl:gap-6 font-sans text-xs xl:text-sm font-medium shrink-0"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="whitespace-nowrap px-1 xl:px-1.5 py-1 text-charcoal/80 hover:text-forest-700 transition-colors relative group shrink-0"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-forest-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </nav>

            {/* 3. Right: Desktop Action buttons (Hidden below lg, shrink-0, nowrap) */}
            <div className="hidden lg:flex items-center gap-1.5 lg:gap-2 xl:gap-3 shrink-0">
              <a
                href={`tel:${HOSPITAL_CONTACT.phone}`}
                className="inline-flex items-center gap-1.5 px-2.5 lg:px-3 xl:px-4 py-1.5 xl:py-2 text-xs font-sans font-medium rounded-full text-forest-700 bg-sand/60 hover:bg-sand border border-forest-700/15 transition-all whitespace-nowrap shrink-0"
                title="Call Vijay Hospital"
              >
                <Phone className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>Call Us</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-2.5 lg:px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-full bg-forest-700 text-ivory hover:bg-forest-800 shadow-sm transition-all duration-200 group active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <span>Contact & Location</span>
                <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>
            </div>

            {/* 4. Right Mobile & Tablet Controls (Visible on < lg screens) */}
            <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden shrink-0">
              {/* Compact Call Us action on mobile/tablet */}
              <a
                href={`tel:${HOSPITAL_CONTACT.phone}`}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-sand/60 hover:bg-sand text-forest-700 text-xs font-sans font-medium border border-forest-700/15 transition-colors shrink-0"
                aria-label="Call Hospital"
              >
                <Phone className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span className="hidden xs:inline sm:inline">Call Us</span>
              </a>

              {/* Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-forest-700 hover:bg-sand/60 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-700/30 shrink-0"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile / Tablet Dropdown Drawer (< lg) */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 right-0 bg-[#F5F1E8] border-b border-sand shadow-2xl transition-all duration-300 max-h-[calc(100vh-80px)] overflow-y-auto px-4 sm:px-6 py-6 z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="max-w-md mx-auto flex flex-col gap-5">
              
              {/* Navigation Grid */}
              <div className="pb-4 border-b border-sand/70">
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-forest-600/70 mb-3">
                  Hospital Navigation
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="py-2.5 px-3 rounded-lg text-sm sm:text-base font-serif font-medium text-charcoal hover:bg-sand/60 hover:text-forest-700 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* 24/7 Casualty & Helpline Card */}
              <div className="bg-forest-900 text-ivory p-4 sm:p-5 rounded-xl flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono text-sage-light uppercase tracking-wider">
                    24/7 Casualty & Helpline
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <p className="text-xs text-sand/80 font-sans">
                  Usilampatti, Madurai District. Dedicated casualty medical officers on round-the-clock duty.
                </p>
                <div className="pt-1">
                  <a
                    href={`tel:${HOSPITAL_CONTACT.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-lg bg-forest-700 text-ivory text-xs font-medium font-sans hover:bg-forest-600 w-full transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-copper-light shrink-0" />
                    <span>Call Us ({HOSPITAL_CONTACT.phone})</span>
                  </a>
                </div>
              </div>

              {/* Contact & Location Button */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-3 sm:py-3.5 rounded-full bg-forest-700 text-ivory font-medium hover:bg-forest-800 shadow-md text-xs sm:text-sm transition-colors"
              >
                Hospital Contact & Directions
              </a>

            </div>
          </div>
        )}
      </header>
    </>
  );
};
