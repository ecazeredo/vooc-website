import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems, setIsOpen: setIsCartOpen } = useCart();
  const location = useLocation();

  const NAV_LINKS = [
    { label: 'Shop', href: '/shop' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Our Story', href: '/about' },
    { label: 'Tasting Room', href: '/tasting-room' },
    { label: 'Refill', href: '/refill' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream">
      <nav className="container-px flex items-center justify-between h-20">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.slice(0, 2).map(link => (
            <Link 
              key={link.href} 
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors",
                location.pathname === link.href ? "text-primary" : "text-charcoal"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className="font-serif text-2xl lg:text-3xl tracking-tighter leading-none">VOOC</span>
          <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] font-medium mt-1">Vancouver Olive Oil Co.</span>
        </Link>

        {/* Desktop Nav Right */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.slice(2).map(link => (
            <Link 
              key={link.href} 
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors",
                location.pathname === link.href ? "text-primary" : "text-charcoal"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-cream">
            <button className="p-2 hover:text-primary transition-colors"><Search className="w-5 h-5" /></button>
            <Link to="/account" className="p-2 hover:text-primary transition-colors"><User className="w-5 h-5" /></Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-primary transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 relative"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-cream py-8 px-4 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.href} 
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium tracking-wide uppercase border-b border-cream pb-4"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-4">
            <Link to="/account" className="flex items-center gap-2 text-sm font-medium uppercase"><User className="w-5 h-5" /> Account</Link>
          </div>
        </div>
      )}
    </header>
  );
};
