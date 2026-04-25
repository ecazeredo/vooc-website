import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, PAIRINGS, STORE_INFO } from '../data/websiteData';
import { Section } from '../components/layout/Section';
import { SEO } from '../components/SEO';
import { ArrowLeft, Phone, MapPin, ExternalLink, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center container-px">
        <h2 className="text-6xl font-serif italic mb-8">Not Found</h2>
        <Link to="/products" className="text-primary font-bold border-b-2 border-secondary pb-1">Return to Collection</Link>
      </div>
    );
  }

  // Find related pairings
  const relatedPairings = PAIRINGS.filter(pair => pair.oilId === product.id || pair.balsamicId === product.id);

  return (
    <>
      <SEO 
        title={product.name} 
        description={product.tastingNote}
         path={`/products/${product.id}`}
      />

      <Section bgColor="white" className="pt-40">
        <div className="container-px">
          {/* Breadcrumb */}
          <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12">
            <ArrowLeft size={14} /> Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Split 1: Imagery */}
            <div className="space-y-8">
              <div className="aspect-[4/5] bg-stone overflow-hidden border border-stone">
                <img 
                  src={`https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80&w=1200&sig=${product.id}-hero`}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[10%]"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-square bg-stone opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <img 
                      src={`https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400&sig=${product.id}-${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Split 2: Content */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">{product.category.replace(/-/g, ' ')}</span>
                  {product.limited && (
                     <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-balsamic">Limited Selection</span>
                  )}
                </div>
                <h1 className="text-6xl md:text-8xl tracking-tighter leading-none italic text-primary">
                  {product.name}
                </h1>
                <p className="text-2xl font-serif leading-relaxed italic opacity-80 max-w-xl">
                  {product.tastingNote}
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.tastesLike.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-widest font-bold bg-stone/30 px-3 py-1 text-primary/60">
                      {tag.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-stone/50">
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink">Suggested Pairings</h4>
                  <ul className="space-y-2">
                    {relatedPairings.length > 0 ? relatedPairings.map(pair => {
                      const otherId = pair.oilId === product.id ? pair.balsamicId : pair.oilId;
                      const otherProd = PRODUCTS.find(p => p.id === otherId);
                      return (
                        <li key={pair.id}>
                          <Link to={`/products/${otherId}`} className="text-sm font-serif italic border-b border-stone/50 hover:text-secondary transition-colors underline-offset-4">
                            {otherProd?.name || otherId.replace(/-/g, ' ')}
                          </Link>
                        </li>
                      );
                    }) : (
                      <li className="text-sm italic opacity-40 font-light">Tastes exceptional with a fresh crusty sourdough.</li>
                    )}
                  </ul>
                </div>
                <div className="space-y-4">
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink">Uses In The Kitchen</h4>
                   <ul className="space-y-1">
                      {product.uses.map(use => (
                        <li key={use} className="text-sm font-light opacity-60 capitalize">
                          &bull; {use.replace(/-/g, ' ')}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>

              {/* CONVERSION PANEL: Come Taste It */}
              <div className="bg-cream p-10 space-y-8 border-l-[8px] border-primary shadow-xl">
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif italic text-primary">Experience the Tastes.</h3>
                  <p className="text-sm opacity-60 font-light">
                    We invite you to our Broadway tasting room to sample this selection for yourself. We pour every day we are open.
                  </p>
                </div>
                
                {product.limited ? (
                   <div className="flex bg-balsamic/10 p-4 gap-4 items-center border border-balsamic/20">
                      <Info className="text-balsamic" size={20} />
                      <p className="text-xs font-bold text-balsamic uppercase tracking-widest">Limited Availability: Call {STORE_INFO.phone} to check current stock.</p>
                   </div>
                ) : null}

                <div className="flex flex-col sm:flex-row gap-4">
                   <a 
                    href="https://www.google.com/maps/dir//2571+West+Broadway,+Vancouver,+BC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center gap-3 bg-primary text-white py-5 px-8 font-bold uppercase tracking-widest text-xs hover:bg-ink transition-all"
                  >
                    <MapPin size={16} /> Get Directions
                  </a>
                  <a 
                    href={STORE_INFO.phoneLink}
                    className="flex items-center justify-center gap-3 border border-primary text-primary py-5 px-8 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all"
                  >
                    <Phone size={16} /> Phone for Stock
                  </a>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-stone/50 opacity-40 text-[10px] uppercase tracking-[0.3em] font-bold">
                   <span>Location: {STORE_INFO.address.split(',')[0]}</span>
                   <span>Open Today: {STORE_INFO.hours[0].time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Freshness Section Repetition */}
      <Section bgColor="stone" className="text-center font-serif py-32 italic">
        <p className="text-4xl md:text-5xl lg:text-7xl opacity-80 container-px max-w-4xl mx-auto leading-tight">
          "The most expensive bottle of olive oil is the one <br className="hidden md:block" /> 
          you buy but <span className="text-primary italic">never actually taste.</span>"
        </p>
      </Section>
    </>
  );
};
