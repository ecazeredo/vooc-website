import React from 'react';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1596431713028-eb761665a58d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543083115-638c32cd3d58?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1464639351491-a172c2aa2911?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544333346-64e4fe18204e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1414115019757-a164df19970e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <>
      <SEO 
        title="Gallery" 
        description="A visual tour of the Vancouver Olive Oil Company. See our artisanal collection and browse our Broadway store interior."
      />

      <Section bgColor="cream" className="pt-40">
        <div className="container-px">
          <SectionHeader 
            subtitle="The Visuals"
            title="Sights of the Shop."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="aspect-square bg-stone overflow-hidden group">
                <img 
                  src={img} 
                  alt={`VOOC Gallery Image ${i}`} 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};
