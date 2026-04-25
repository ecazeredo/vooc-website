import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { STORE_INFO } from '../../data/websiteData';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Oils & Balsamics', path: '/products' },
    { name: 'Tasting Room', path: '/tasting-room' },
    { name: 'Pairings', path: '/pairings' },
    { name: 'The Story', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-cream/95 backdrop-blur-md border-b border-stone/50">
      <div className="container-px flex items-center justify-between h-20">
        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-primary"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center lg:items-start group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-primary transition-transform group-hover:scale-[1.02]">
            Vancouver Olive Oil <span className="italic font-normal">Company</span>
          </span>
          <span className="hidden lg:block text-[10px] uppercase tracking-[0.3em] text-secondary font-medium">
            Independent & Family Owned since 2011
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => cn(
                "text-xs uppercase tracking-widest font-medium transition-colors hover:text-secondary",
                isActive ? "text-primary font-bold" : "text-ink/60"
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action / Contact */}
        <div className="hidden lg:flex items-center gap-6 pl-8 border-l border-stone">
          <a href={STORE_INFO.phoneLink} className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
            <Phone size={16} />
            <span className="text-xs font-bold">{STORE_INFO.phone}</span>
          </a>
          <Link to="/contact" className="bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-6 py-3 hover:bg-ink transition-colors">
            Visit Us
          </Link>
        </div>

        {/* Mobile Contact Link */}
        <a href={STORE_INFO.phoneLink} className="lg:hidden p-2 text-primary">
          <Phone />
        </a>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-cream border-b border-stone p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl text-primary hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-stone space-y-4">
            <p className="flex items-center gap-3 text-sm italic opacity-70">
              <MapPin size={18} className="text-secondary" /> {STORE_INFO.address}
            </p>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full bg-primary text-white text-center py-4 text-xs uppercase tracking-widest font-bold"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
