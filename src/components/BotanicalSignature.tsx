import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface BotanicalSignatureProps {
  variant?: 'hero' | 'about' | 'footer';
  className?: string;
  size?: number;
  colorScheme?: 'dark' | 'light' | 'sage';
}

export const BotanicalSignature: React.FC<BotanicalSignatureProps> = ({
  variant = 'hero',
  className = '',
  size = 64,
  colorScheme = 'dark'
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Color tokens matching the Vijay Hospital identity
  const strokeColor = colorScheme === 'light' 
    ? '#F5F1E8' 
    : colorScheme === 'sage' 
      ? '#A8B99C' 
      : '#243D32';

  const leafFill = colorScheme === 'light'
    ? 'rgba(245, 241, 232, 0.08)'
    : colorScheme === 'sage'
      ? 'rgba(168, 185, 156, 0.15)'
      : 'rgba(36, 61, 50, 0.06)';

  const accentColor = '#B77D5C'; // Muted copper brand accent

  // Timing configuration per variant
  const duration = shouldReduceMotion ? 0 : variant === 'hero' ? 1.6 : variant === 'about' ? 2.0 : 1.4;
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Smooth editorial organic ease

  // Hero: compact, delicate reveal near the headline
  if (variant === 'hero') {
    return (
      <div 
        className={`inline-flex items-center justify-center select-none ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Main Central Stem drawing upward */}
          <motion.path
            d="M50 92 C 50 75, 50 58, 50 42"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: duration * 0.5, ease: easeCurve }}
          />

          {/* Lower Left tender leaf */}
          <motion.path
            d="M50 78 C 40 76, 32 68, 35 60 C 41 62, 47 70, 50 78 Z"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinejoin="round"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, scale: 1, opacity: 1 } : { pathLength: 0, scale: 0.6, opacity: 0 }}
            animate={{ pathLength: 1, scale: 1, opacity: 1 }}
            transition={{ duration: duration * 0.6, delay: shouldReduceMotion ? 0 : 0.25, ease: easeCurve }}
            style={{ transformOrigin: "50px 78px" }}
          />

          {/* Lower Right tender leaf */}
          <motion.path
            d="M50 78 C 60 76, 68 68, 65 60 C 59 62, 53 70, 50 78 Z"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinejoin="round"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, scale: 1, opacity: 1 } : { pathLength: 0, scale: 0.6, opacity: 0 }}
            animate={{ pathLength: 1, scale: 1, opacity: 1 }}
            transition={{ duration: duration * 0.6, delay: shouldReduceMotion ? 0 : 0.35, ease: easeCurve }}
            style={{ transformOrigin: "50px 78px" }}
          />

          {/* V-Stem: Left Graceful Branch */}
          <motion.path
            d="M50 62 C 40 50, 26 42, 22 26 C 26 28, 36 36, 44 48 C 47 53, 50 58, 50 62 Z"
            stroke={strokeColor}
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: duration * 0.7, delay: shouldReduceMotion ? 0 : 0.45, ease: easeCurve }}
          />

          {/* V-Stem: Right Graceful Branch */}
          <motion.path
            d="M50 62 C 60 50, 74 42, 78 26 C 74 28, 64 36, 56 48 C 53 53, 50 58, 50 62 Z"
            stroke={strokeColor}
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: duration * 0.7, delay: shouldReduceMotion ? 0 : 0.55, ease: easeCurve }}
          />

          {/* Unfolding Crown Petals forming the V-Bloom */}
          {/* Left Petal */}
          <motion.path
            d="M50 42 C 42 32, 36 22, 42 14 C 47 20, 48 30, 50 42 Z"
            stroke={strokeColor}
            strokeWidth="1.2"
            fill={leafFill}
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.2, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: duration * 0.6, delay: shouldReduceMotion ? 0 : 0.75, ease: easeCurve }}
            style={{ transformOrigin: "50px 42px" }}
          />

          {/* Right Petal */}
          <motion.path
            d="M50 42 C 58 32, 64 22, 58 14 C 53 20, 52 30, 50 42 Z"
            stroke={strokeColor}
            strokeWidth="1.2"
            fill={leafFill}
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.2, rotate: 15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: duration * 0.6, delay: shouldReduceMotion ? 0 : 0.85, ease: easeCurve }}
            style={{ transformOrigin: "50px 42px" }}
          />

          {/* Central Tender Bud / Core Petal */}
          <motion.path
            d="M50 42 C 46 32, 47 18, 50 10 C 53 18, 54 32, 50 42 Z"
            stroke={strokeColor}
            strokeWidth="1.3"
            fill="none"
            initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: duration * 0.5, delay: shouldReduceMotion ? 0 : 0.95, ease: easeCurve }}
          />

          {/* Copper Restorative Bud Node */}
          <motion.circle
            cx="50"
            cy="16"
            r="2"
            fill={accentColor}
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 1.2, ease: "easeOut" }}
          />
        </svg>
      </div>
    );
  }

  // About: Scroll-triggered graceful botanical development framing clinical ethics
  if (variant === 'about') {
    return (
      <div 
        className={`inline-flex items-center justify-center select-none ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Subtle circular boundary ring drawing as scroll anchors */}
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            stroke={strokeColor}
            strokeWidth="0.8"
            strokeDasharray="3 3"
            strokeOpacity="0.4"
            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* Root to Stem */}
          <motion.path
            d="M60 106 C 60 90, 60 74, 60 52"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.0, ease: easeCurve }}
          />

          {/* Left Arching Leaf */}
          <motion.path
            d="M60 88 C 46 84, 34 72, 38 60 C 46 62, 54 74, 60 88 Z"
            stroke={strokeColor}
            strokeWidth="1.3"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0.8 }}
            whileInView={{ pathLength: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: shouldReduceMotion ? 0 : 0.3, ease: easeCurve }}
            style={{ transformOrigin: "60px 88px" }}
          />

          {/* Right Arching Leaf */}
          <motion.path
            d="M60 88 C 74 84, 86 72, 82 60 C 74 62, 66 74, 60 88 Z"
            stroke={strokeColor}
            strokeWidth="1.3"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0.8 }}
            whileInView={{ pathLength: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: shouldReduceMotion ? 0 : 0.4, ease: easeCurve }}
            style={{ transformOrigin: "60px 88px" }}
          />

          {/* Secondary Left Foliage */}
          <motion.path
            d="M60 68 C 48 58, 42 46, 46 36 C 52 40, 56 52, 60 68 Z"
            stroke={strokeColor}
            strokeWidth="1.3"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.0, delay: shouldReduceMotion ? 0 : 0.55, ease: easeCurve }}
          />

          {/* Secondary Right Foliage */}
          <motion.path
            d="M60 68 C 72 58, 78 46, 74 36 C 68 40, 64 52, 60 68 Z"
            stroke={strokeColor}
            strokeWidth="1.3"
            fill={leafFill}
            initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.0, delay: shouldReduceMotion ? 0 : 0.65, ease: easeCurve }}
          />

          {/* Delicate Top V-Bloom Petals */}
          <motion.path
            d="M60 52 C 50 40, 36 28, 44 18 C 50 24, 54 36, 60 52 Z"
            stroke={strokeColor}
            strokeWidth="1.2"
            fill={leafFill}
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: shouldReduceMotion ? 0 : 0.8, ease: easeCurve }}
            style={{ transformOrigin: "60px 52px" }}
          />

          <motion.path
            d="M60 52 C 70 40, 84 28, 76 18 C 70 24, 66 36, 60 52 Z"
            stroke={strokeColor}
            strokeWidth="1.2"
            fill={leafFill}
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: shouldReduceMotion ? 0 : 0.9, ease: easeCurve }}
            style={{ transformOrigin: "60px 52px" }}
          />

          {/* Center Pinnacle Blossom */}
          <motion.path
            d="M60 52 C 56 42, 56 24, 60 14 C 64 24, 64 42, 60 52 Z"
            stroke={strokeColor}
            strokeWidth="1.3"
            fill="none"
            initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 1.05, ease: easeCurve }}
          />

          {/* Copper Healing Node */}
          <motion.circle
            cx="60"
            cy="18"
            r="2.5"
            fill={accentColor}
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 1.25, ease: "easeOut" }}
          />
        </svg>
      </div>
    );
  }

  // Footer: The completed V-inspired bloom as the brand signature
  return (
    <div 
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Harmonious background crest ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.3"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0, rotate: -30 }}
          whileInView={{ pathLength: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Established V-Stem architecture */}
        <motion.path
          d="M50 88 C 50 74, 50 60, 50 46"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeCurve }}
        />

        {/* Left V-Branch */}
        <motion.path
          d="M50 72 C 38 60, 24 50, 18 32 C 24 34, 36 44, 44 56 C 47 62, 50 67, 50 72 Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill={leafFill}
          initial={shouldReduceMotion ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0.9 }}
          whileInView={{ pathLength: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: shouldReduceMotion ? 0 : 0.3, ease: easeCurve }}
          style={{ transformOrigin: "50px 72px" }}
        />

        {/* Right V-Branch */}
        <motion.path
          d="M50 72 C 62 60, 76 50, 82 32 C 76 34, 64 44, 56 56 C 53 62, 50 67, 50 72 Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill={leafFill}
          initial={shouldReduceMotion ? { pathLength: 1, scale: 1 } : { pathLength: 0, scale: 0.9 }}
          whileInView={{ pathLength: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: shouldReduceMotion ? 0 : 0.4, ease: easeCurve }}
          style={{ transformOrigin: "50px 72px" }}
        />

        {/* Fully Unfolded Petals of Healing & Compassion */}
        <motion.path
          d="M50 46 C 40 34, 32 22, 40 12 C 46 18, 48 30, 50 46 Z"
          stroke={strokeColor}
          strokeWidth="1.3"
          fill={leafFill}
          initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.4, rotate: -10, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.6, ease: easeCurve }}
          style={{ transformOrigin: "50px 46px" }}
        />

        <motion.path
          d="M50 46 C 60 34, 68 22, 60 12 C 54 18, 52 30, 50 46 Z"
          stroke={strokeColor}
          strokeWidth="1.3"
          fill={leafFill}
          initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.4, rotate: 10, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.7, ease: easeCurve }}
          style={{ transformOrigin: "50px 46px" }}
        />

        {/* Central Lotus / Bud Node */}
        <motion.path
          d="M50 46 C 46 34, 46 20, 50 10 C 54 20, 54 34, 50 46 Z"
          stroke={strokeColor}
          strokeWidth="1.4"
          fill="none"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.85, ease: easeCurve }}
        />

        {/* Radiating Healing Stigma & Copper Seed */}
        <motion.circle
          cx="50"
          cy="16"
          r="2.5"
          fill={accentColor}
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 1.0, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

