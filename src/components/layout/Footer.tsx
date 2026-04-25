import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_INFO } from '../../data/websiteData';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-ink text-cream/70 pt-24 pb-12 overflow-hidden border-t border-primary/20">
      <div className="container-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="inline-block text-white">
            <span className="font-serif text-2xl font-bold tracking-tight">Vancouver Olive Oil <span className="italic font-normal">Co.</span></span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs font-light">
            Family-owned and independent since 2011. We believe that when it comes to olive oil, "fresh is best." Visit our Kitsilano tasting room to sample the current harvest.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Visit */}
        <div className="space-y-6">
          <h4 className="text-white text-xs uppercase tracking-widest font-bold">Visit the Store</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex gap-3">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span>{STORE_INFO.address}<br/>Vancouver, BC V6K 2E9</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <a href={STORE_INFO.phoneLink} className="hover:text-white transition-colors">{STORE_INFO.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <a href={`mailto:${STORE_INFO.email}`} className="hover:text-white transition-colors">{STORE_INFO.email}</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h4 className="text-white text-xs uppercase tracking-widest font-bold">Hours</h4>
          <ul className="space-y-3 text-sm font-light">
            {STORE_INFO.hours.map((h, i) => (
              <li key={i} className="flex justify-between gap-4">
                <span className="opacity-60">{h.days}</span>
                <span className="text-white">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="text-[10px] uppercase font-bold text-secondary mt-6">Holiday Hours Noted on Contact Page</p>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-white text-xs uppercase tracking-widest font-bold">Quick Links</h4>
          <ul className="space-y-3 text-sm font-light">
            <li><Link to="/products" className="hover:text-white transition-colors">Browse the Collection</Link></li>
            <li><Link to="/pairings" className="hover:text-white transition-colors">Top Pairings</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/tasting-room" className="hover:text-white transition-colors">How We Taste</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-px pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest opacity-40">
          © {new Date().getFullYear()} Vancouver Olive Oil Company. Hand-poured in Kitsilano.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest opacity-40">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
