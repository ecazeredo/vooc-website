import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-[2px]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-cream">
              <h2 className="text-xl font-bold uppercase tracking-widest">Your Cart</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:opacity-70 transition-opacity"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-60">
                  <ShoppingBag className="w-16 h-16 stroke-[1px]" />
                  <p className="font-serif text-xl italic text-center">Your cart is currently empty.</p>
                  <Link 
                    to="/shop" 
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-cream px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-primary-dark transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-cream overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <Link 
                          to={`/products/${item.slug}`} 
                          onClick={() => setIsOpen(false)}
                          className="font-serif text-lg leading-tight hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button onClick={() => removeItem(item.id)} className="text-xs opacity-50 hover:opacity-100 uppercase tracking-widest underline underline-offset-4">Remove</button>
                      </div>
                      <p className="text-xs opacity-60 mb-3">{item.origin} · {item.size}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-cream">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-cream transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-cream transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-cream bg-cream/30 space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold uppercase tracking-widest opacity-60">Subtotal</span>
                  <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-center opacity-60 uppercase tracking-widest mb-4">Shipping & taxes calculated at checkout</p>
                <button className="w-full bg-primary text-cream py-4 uppercase text-sm font-bold tracking-widest hover:bg-primary-dark transition-all transform active:scale-[0.98]">
                  Checkout
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
