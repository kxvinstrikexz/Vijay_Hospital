import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hospitalData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Wards & Care', 'Child Health', 'Diagnostics & Pharmacy', 'Hospital Architecture'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const currentItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-32 bg-sand/30 border-y border-sand/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-sand">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest-700 font-semibold block mb-2">
              05 / Visual Walkthrough
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-tight">
              Hospital Spaces & <br />
              <span className="italic font-light text-forest-700">Clinical Life.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-forest-700 text-ivory font-medium shadow-sm'
                    : 'bg-ivory text-charcoal/70 hover:bg-sand/70 border border-sand'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Image Grid (All authentic, non-repeating photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: GalleryItem, index: number) => {
            const isSpan2 = index % 5 === 0;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border border-sand bg-ivory shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${
                  isSpan2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Photo container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-forest-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-forest-900/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-sand border border-sand/30">
                    {item.category}
                  </span>

                  {/* Expand icon hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory/80 backdrop-blur-md text-forest-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-ivory">
                    <p className="font-serif text-lg font-medium leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="p-4 bg-ivory flex items-center justify-between text-xs font-mono text-charcoal/60">
                  <span>Photo {String(index + 1).padStart(2, '0')}</span>
                  <span className="text-forest-700 group-hover:text-copper transition-colors">
                    Click to Enlarge ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Accessible Lightbox Modal */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-forest-900 text-ivory hover:bg-forest-800 flex items-center justify-center transition-colors border border-sand/20"
            aria-label="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-forest-900/80 hover:bg-forest-900 text-ivory flex items-center justify-center transition-colors border border-sand/20"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-forest-900/80 hover:bg-forest-900 text-ivory flex items-center justify-center transition-colors border border-sand/20"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Central Modal Content */}
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-sand/20 shadow-2xl bg-black max-h-[70vh]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="mt-4 text-center max-w-2xl px-4 text-ivory space-y-1.5">
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-sage-light">
                  {currentItem.category}
                </span>
                <span className="text-sand/40">•</span>
                <span className="font-mono text-xs text-sand/60">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-ivory">
                {currentItem.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-sand/80 font-light">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
