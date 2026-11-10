import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  showTagline = true 
}) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center gap-2 lg:gap-2.5 xl:gap-3 select-none shrink-0 ${className}`}>
      {/* Handcrafted Medical & Botanical Emblem */}
      <div className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 xl:w-10 xl:h-10 rounded-sm shrink-0 transition-transform duration-300 group-hover:scale-105 ${
        isLight ? 'bg-ivory text-forest-700' : 'bg-forest-700 text-ivory'
      }`}>
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-4.5 h-4.5 sm:w-5 sm:h-5 xl:w-7 xl:h-7"
        >
          {/* Subtle medical cross base */}
          <path 
            d="M20 7V33M7 20H33" 
            stroke="currentColor" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            opacity={isLight ? "0.35" : "0.3"}
          />
          {/* Organic sprouting leaf & stem representing growth & healing */}
          <path 
            d="M20 31C20 23 20 18 20 14C20 14 24 10 28 11C28 15 25 18 20 19C16 19 12 16 12 12C15 11 19 13 20 14" 
            stroke={isLight ? "#243D32" : "#F5F1E8"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Small restorative seed/bud node */}
          <circle cx="20" cy="9" r="2" fill={isLight ? "#B77D5C" : "#A8B99C"} />
        </svg>
      </div>

      <div className="flex flex-col min-w-0">
        <div className="flex items-baseline gap-1 sm:gap-1.5 whitespace-nowrap">
          <span className={`font-serif text-base sm:text-lg xl:text-xl font-bold tracking-tight leading-none ${
            isLight ? 'text-ivory' : 'text-forest-700'
          }`}>
            VIJAY
          </span>
          <span className={`font-serif text-base sm:text-lg xl:text-xl font-light tracking-wide leading-none ${
            isLight ? 'text-sage-light' : 'text-olive-dark'
          }`}>
            HOSPITAL
          </span>
        </div>
        {showTagline && (
          <span className={`hidden xl:block text-[10px] xl:text-[11px] font-mono tracking-wider uppercase mt-1 whitespace-nowrap ${
            isLight ? 'text-sand/80' : 'text-forest-600/70'
          }`}>
            Care That Grows With You
          </span>
        )}
      </div>
    </div>
  );
};

