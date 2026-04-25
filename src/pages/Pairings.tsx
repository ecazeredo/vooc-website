import React from 'react';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';
import { PAIRINGS, PRODUCTS } from '../data/websiteData';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets } from 'lucide-react';

export const Pairings = () => {
  return (
    <>
      <SEO 
        title="The Art of Pairing" 
        description="Discover the perfect marriage of olive oil and balsamic vinegar. Explore our curated pairing guide to elevate your culinary creations."
      />

      <Section bgColor="cream" className="pt-40">
        <div className="container-px">
          <SectionHeader 
            subtitle="The Sommelier's Guide"
            title="A symphony of liquid gold."
          />
          <p className="text-xl font-light opacity-80 leading-relaxed max-w-2xl mx-auto text-center mb-20">
            While every oil and balsamic we carry is exceptional on its own, something magical happens when they meet. Use this guide to find the perfect marriage for your kitchen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PAIRINGS.map((pair, i) => {
              const oilProd = PRODUCTS.find(p => p.id === pair.oilId);
              const balsamicProd = PRODUCTS.find(p => p.id === pair.balsamicId);

              return (
                <div key={pair.id} className="bg-white p-12 space-y-10 border border-stone/50 hover:border-secondary transition-all shadow-sm flex flex-col">
                  <div className="flex justify-between items-center opacity-30 text-[10px] font-bold uppercase tracking-widest">
                    <span>Selection No. {i + 1}</span>
                    <Droplets size={16} />
                  </div>
                  
                  <div className="space-y-8 flex-grow">
                     <div className="space-y-4">
                        <Link to={`/products/${pair.oilId}`} className="block text-2xl font-serif italic text-primary hover:text-secondary transition-colors leading-tight">
                           {oilProd?.name || pair.oilId.replace(/-/g, ' ')}
                        </Link>
                        <div className="w-8 h-px bg-secondary/50 mx-auto" />
                        <Link to={`/products/${pair.balsamicId}`} className="block text-2xl font-serif italic text-primary hover:text-secondary transition-colors leading-tight">
                           {balsamicProd?.name || pair.balsamicId.replace(/-/g, ' ')}
                        </Link>
                     </div>
                     <p className="text-sm font-light leading-relaxed opacity-60">
                        "{pair.note}"
                     </p>
                  </div>

                  <div className="pt-8 border-t border-stone/30">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-secondary group">
                       Come taste this pairing <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section bgColor="primary" className="text-center overflow-hidden relative">
         <div className="container-px space-y-8 relative z-10">
            <h3 className="text-5xl font-serif italic text-cream">The Best Pairing is the one <br /> <span className="text-secondary italic">you discover yourself.</span></h3>
            <p className="text-xl font-light text-cream/70 max-w-2xl mx-auto leading-relaxed">
              Our guides are just a starting point. Visit our Kitsilano shop to experiment, mix, and match over 60 flavors. The combinations are endless.
            </p>
            <div className="pt-10">
              <Link to="/contact" className="bg-secondary text-primary px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                 Plan Your Tasting Visit
              </Link>
            </div>
         </div>
         {/* Decorative Blur */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -z-0" />
      </Section>
    </>
  );
};
