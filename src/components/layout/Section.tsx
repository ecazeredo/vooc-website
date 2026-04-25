import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'cream' | 'white' | 'stone' | 'primary' | 'none';
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  id, 
  bgColor = 'none',
  noPadding = false
}) => {
  const bgClasses = {
    cream: 'bg-cream',
    white: 'bg-white',
    stone: 'bg-stone',
    primary: 'bg-primary text-cream',
    none: ''
  };

  return (
    <section 
      id={id}
      className={cn(
        !noPadding && 'py-20 md:py-32',
        bgClasses[bgColor],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}> = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={cn(
      "max-w-3xl mb-16",
      centered && "mx-auto text-center"
    )}>
      {subtitle && (
        <span className={cn(
          "text-[10px] uppercase tracking-[0.4em] font-bold block mb-4",
          light ? "text-secondary" : "text-secondary"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-4xl md:text-6xl tracking-tight leading-tight italic",
        light ? "text-cream" : "text-primary"
      )}>
        {title}
      </h2>
    </div>
  );
};
