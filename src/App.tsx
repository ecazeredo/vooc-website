import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { TastingRoom } from './pages/TastingRoom';
import { ProductIndex } from './pages/ProductIndex';
import { ProductDetail } from './pages/ProductDetail';
import { Pairings } from './pages/Pairings';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';

import { Gallery } from './pages/Gallery';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen pt-20">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasting-room" element={<TastingRoom />} />
            <Route path="/products" element={<ProductIndex />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/pairings" element={<Pairings />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Mobile Sticky Action */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[90]">
          <a 
            href="https://www.google.com/maps/dir//2571+West+Broadway,+Vancouver,+BC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-primary text-white py-5 px-8 rounded-full shadow-2xl font-bold uppercase tracking-widest text-xs hover:bg-ink transition-colors"
          >
            Visit the Tasting Room
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}
