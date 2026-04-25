import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/fixtures';
import { ProductCard } from '../components/shop/ProductCard';
import { cn } from '../lib/utils';
import { Filter, SlidersHorizontal } from 'lucide-react';

export const Shop = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [sortBy, setSortBy] = useState('featured');

  const CATEGORIES = [
    { label: 'All Products', slug: 'all' },
    { label: 'Olive Oils', slug: 'olive-oil' },
    { label: 'Balsamic Vinegars', slug: 'balsamic' },
    { label: 'Gift Sets', slug: 'gift-sets' },
    { label: 'Pantry', slug: 'pantry' },
  ];

  const filteredProducts = useMemo(() => {
    let list = activeCategory === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === activeCategory);
    
    if (sortBy === 'price-low') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-high') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [activeCategory, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      {/* Category Header */}
      <section className="bg-cream py-20 lg:py-32 border-b border-[#E5DDD0]">
        <div className="container-px text-center max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6 block">The Collection</span>
          <h1 className="text-5xl lg:text-8xl tracking-tighter italic mb-8">
            {activeCategory === 'all' ? 'Everything we love.' : activeCategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          <p className="text-lg opacity-60 font-light leading-relaxed max-w-2xl mx-auto">
            Curated worldwide, bottled fresh in Vancouver. Explore our current selections of premium oils, vinegars, and artisanal kitchen essentials.
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-cream">
        <div className="container-px flex flex-wrap items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                  "px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap",
                  activeCategory === cat.slug 
                    ? "bg-primary text-cream" 
                    : "bg-transparent text-charcoal opacity-40 hover:opacity-100"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
              <SlidersHorizontal className="w-4 h-4" />
              Sort:
            </div>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[10px] uppercase tracking-[0.2em] font-bold outline-none cursor-pointer bg-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container-px py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-serif text-2xl italic opacity-40">No products found in this category.</p>
          </div>
        )}
      </section>

      {/* Trust Blocks */}
      <section className="border-t border-cream py-24 bg-cream/20">
        <div className="container-px grid grid-cols-1 md:grid-cols-3 gap-12 text-center font-light">
          <div className="space-y-4">
            <h4 className="font-serif text-2xl italic">Free Shipping</h4>
            <p className="text-sm opacity-60">On all Canadian orders over $75. Freshness delivered to your door.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-2xl italic">Hassle-Free Returns</h4>
            <p className="text-sm opacity-60">Not in love? Return any unopened bottle within 30 days for a full refund.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-2xl italic">Trusted Since 2011</h4>
            <p className="text-sm opacity-60">Independent, locally owned, and obsessively curated in Vancouver, BC.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
