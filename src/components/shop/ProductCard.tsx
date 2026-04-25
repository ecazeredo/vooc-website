import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[4/5] bg-cream overflow-hidden mb-4">
        <Link to={`/products/${product.slug}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        
        {/* Quick Add Button */}
        <button 
          onClick={() => addItem(product)}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-charcoal py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-cream flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>

        {/* Badges */}
        {product.intensity && (
          <div className="absolute top-4 left-4 bg-primary text-cream px-2 py-1 text-[8px] uppercase tracking-widest font-bold">
            {product.intensity}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-start gap-2">
          <Link to={`/products/${product.slug}`} className="font-serif text-lg leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </Link>
          <span className="font-bold text-sm">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-60">
          <span>{product.origin}</span>
          {product.harvestYear !== 'N/A' && (
            <>
              <span className="w-1 h-1 rounded-full bg-charcoal/20" />
              <span>Harvest: {product.harvestYear}</span>
            </>
          )}
        </div>

        {product.polyphenols > 0 && (
          <div className="pt-2 flex items-center gap-2">
            <div className="h-1 bg-cream flex-grow rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${Math.min((product.polyphenols / 800) * 100, 100)}%` }} 
              />
            </div>
            <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">{product.polyphenols} PPP</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
