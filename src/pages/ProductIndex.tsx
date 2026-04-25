import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORY_INTROS } from '../data/websiteData';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductIndex = () => {
  const [searchParams] = useSearchParams();
  const currentCat = searchParams.get('cat') || 'all';

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'evoo', label: 'Extra Virgin' },
    { id: 'flavored-oil', label: 'Fused & Infused' },
    { id: 'white-balsamic', label: 'White Balsamics' },
    { id: 'dark-balsamic', label: 'Dark Balsamics' },
    { id: 'specialty', label: 'Specialty Selection' },
  ];

  const filteredProducts = useMemo(() => {
    return currentCat === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === currentCat);
  }, [currentCat]);

  return (
    <>
      <SEO 
        title="Oils & Balsamics Collection" 
        description="Explore our collection of the world's finest extra virgin olive oils, fused and infused oils, and barrel-aged balsamics. Visit us in Kitsilano to taste them all."
      />

      <Section bgColor="cream" className="pt-32 pb-20">
        <div className="container-px">
          <SectionHeader 
            centered={false}
            subtitle="The Collection"
            title={currentCat === 'all' ? "Everything we pour." : categories.find(c => c.id === currentCat)?.label || ""}
          />
          
          {currentCat !== 'all' && (
            <div className="max-w-3xl">
              <p className="text-xl font-light opacity-70 leading-relaxed mb-12">
                {CATEGORY_INTROS[currentCat as keyof typeof CATEGORY_INTROS]}
              </p>
            </div>
          )}

          {/* Filtering Sub-nav */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            {categories.map(cat => (
              <Link 
                key={cat.id} 
                to={cat.id === 'all' ? '/products' : `/products?cat=${cat.id}`}
                className={cn(
                  "px-6 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all",
                  currentCat === cat.id 
                    ? "bg-primary text-white border-primary" 
                    : "bg-transparent text-primary/60 border-stone hover:border-primary hover:text-primary"
                )}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/products/${product.id}`}
                className="group flex flex-col items-start"
              >
                <div className="w-full aspect-[3/4] bg-stone mb-6 overflow-hidden relative border border-stone/30">
                  <img 
                    src={`https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80&w=600&sig=${product.id}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  {/* Category Indicator */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    {product.limited && (
                      <span className="bg-balsamic text-white text-[8px] uppercase tracking-tighter px-2 py-1 font-bold">Call for Availability</span>
                    )}
                  </div>
                </div>
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-serif italic text-primary group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.tastesLike.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest opacity-40 font-bold border-b border-stone/50">
                        {tag.replace(/-/g, ' ')}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm opacity-60 line-clamp-2 font-light leading-relaxed pt-2">
                    {product.tastingNote}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Show tasting notes <ArrowRight size={10} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Tasting Room Hook */}
      <Section bgColor="primary" className="text-center">
        <div className="container-px space-y-8">
          <SectionHeader 
            light
            subtitle="The Fine Print"
            title="We do not ship our oils."
          />
          <p className="text-xl font-light opacity-80 max-w-2xl mx-auto leading-relaxed">
            Because our extra virgin olive oils are so fresh, they are precious. We don't believe an industrial shipping box does them justice. Instead, we invite you to our shop to taste, pour, and bottle them your way.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/contact" className="bg-secondary text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all">
                Plan Your Visit
             </Link>
             <Link to="/faq" className="border border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                FAQ on Shipping
             </Link>
          </div>
        </div>
      </Section>
    </>
  );
};
