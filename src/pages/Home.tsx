import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Droplets, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';
import { STORE_INFO, REVIEWS, PAIRINGS, PRODUCTS } from '../data/websiteData';

export const Home = () => {
  return (
    <>
      <SEO 
        title="Extra Virgin Olive Oil & Balsamic Vinegar Tasting Room" 
        description="Experience Vancouver's finest extra virgin olive oils and aged balsamics. Family-owned since 2011. Visit our Kitsilano tasting room to sample the current harvest."
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=2000" 
            alt="Golden olive oil pouring over fresh bread" 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-[10s] scale-105 hover:scale-110"
          />
        </div>
        
        <div className="container-px relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.9] tracking-tighter mb-8 font-serif">
              Tasting oil as it <br />
              <span className="flourish-text text-secondary">was intended.</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-2xl mb-12 font-light leading-relaxed">
              Family-owned, independent, and obsessively fresh. <br className="hidden md:block" />
              Visit our Kitsilano tasting room to experience the harvest.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-secondary text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-all shadow-xl group"
              >
                Plan Your Visit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all font-serif italic"
              >
                Explore the Collection
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-4 text-cream/40 overflow-hidden">
          <div className="w-px h-12 bg-white/20 shrink-0">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/3 bg-secondary"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Begin</span>
        </div>
      </section>

      {/* The Tasting Room Experience */}
      <Section bgColor="cream">
        <div className="container-px grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-stone overflow-hidden border-[16px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200" 
                alt="Inside the Vancouver Olive Oil Company tasting room" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
          
          <div className="space-y-10">
            <SectionHeader 
              centered={false}
              subtitle="The Experience"
              title="A sensory sanctuary in the heart of Vancouver."
            />
            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
              <p>
                When you step into our Broadway shop, the industrial world fades away. You are met with rows of gleaming stainless steel containers (Fustis) holding the freshest liquid gold in the city.
              </p>
              <p>
                There are no barriers here. We invite you to taste as many oils and balsamics as your palate desires. Our family and staff are here to guide you through pairings—dipping, sipping, and discovering the flavors that elevate your home kitchen.
              </p>
            </div>
            <div className="pt-8">
              <Link to="/tasting-room" className="inline-flex items-center gap-3 text-primary text-xs uppercase tracking-[0.3em] font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
                How we taste <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Fresh is Best Logic */}
      <Section bgColor="primary" className="text-cream">
        <div className="container-px">
          <div className="flex flex-col lg:flex-row gap-20 items-center text-center lg:text-left">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl md:text-7xl tracking-tighter leading-tight italic">
                Why our oil <br /> 
                <span className="text-secondary italic">switches with the wind.</span>
              </h2>
              <p className="text-xl text-cream/70 font-light leading-relaxed">
                Most supermarket olive oil is stable, stagnant, and often years past its prime. We believe true extra virgin olive oil is a living product that decays. 
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-secondary mb-6">
                  <Leaf size={24} />
                </div>
                <h4 className="text-xl font-serif italic">The Hemisphere Shift</h4>
                <p className="text-sm text-cream/60 leading-relaxed font-light">
                  We pivot our selection twice a year. Northern harvests in the fall, Southern in the spring. 
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center text-secondary mb-6">
                  <Droplets size={24} />
                </div>
                <h4 className="text-xl font-serif italic">Press Date Priority</h4>
                <p className="text-sm text-cream/60 leading-relaxed font-light">
                  We only source oils where the press date is verifiable. If it’s not fresh, it’s not in our shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Categories */}
      <Section bgColor="white">
        <div className="container-px">
          <SectionHeader 
            subtitle="Explore"
            title="Every bottle tells a different story."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'evoo', title: 'Extra Virgin Oils', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600' },
              { id: 'flavored-oil', title: 'Fused & Infused', img: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80&w=600' },
              { id: 'white-balsamic', title: 'White Balsamics', img: 'https://images.unsplash.com/photo-1596431713028-eb761665a58d?auto=format&fit=crop&q=80&w=600' },
              { id: 'dark-balsamic', title: 'Dark Balsamics', img: 'https://images.unsplash.com/photo-1596431713028-eb761665a58d?auto=format&fit=crop&q=80&w=600' },
              { id: 'pairings', title: 'The Pairing Art', img: 'https://images.unsplash.com/photo-1543083115-638c32cd3d58?auto=format&fit=crop&q=80&w=600' },
              { id: 'specialty', title: 'Specialty Oils', img: 'https://images.unsplash.com/photo-1464639351491-a172c2aa2911?auto=format&fit=crop&q=80&w=600' }
            ].map((cat, i) => (
              <Link 
                key={cat.id} 
                to={cat.id === 'pairings' ? '/pairings' : `/products?cat=${cat.id}`}
                className="group relative h-[400px] overflow-hidden flex items-end p-8"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent group-hover:via-ink/40 transition-all opacity-60" />
                <div className="relative z-10 space-y-2">
                  <h3 className="text-3xl text-white tracking-tight italic">{cat.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] text-secondary uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    View Collection <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Top Pairings Carousel (Static Grid for simplicity and speed) */}
      <Section bgColor="stone">
        <div className="container-px">
          <SectionHeader 
            subtitle="The Sommelier's Selection"
            title="Curated pairings to ignite your kitchen."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PAIRINGS.slice(0, 3).map((pair, i) => (
              <div key={pair.id} className="bg-cream p-10 space-y-8 border-b-4 border-secondary shadow-sm hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold opacity-40">
                  <span>Pairing No. {i + 1}</span>
                  <Droplets size={14} className="text-secondary" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-serif text-primary leading-tight">
                    {pair.oilId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} <br />
                    <span className="text-secondary">&</span> {pair.balsamicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h4>
                  <p className="text-sm opacity-70 italic font-light">
                    "{pair.note}"
                  </p>
                </div>
                <Link to="/pairings" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary group-hover:text-secondary transition-colors">
                  All Pairings <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Press Mention */}
      <Section bgColor="white" className="border-y border-stone/30">
        <div className="container-px flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 px-12">
          {STORE_INFO.press.map((p, i) => (
            <a key={i} href={p.url} className="text-sm font-serif italic text-center max-w-[200px]">
              "{p.quote}" <br />
              <span className="text-[10px] uppercase tracking-widest font-sans font-bold not-italic">-{p.source}</span>
            </a>
          ))}
        </div>
      </Section>

      {/* Visit Section */}
      <Section id="visit" bgColor="cream">
        <div className="container-px grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <SectionHeader 
              centered={false}
              subtitle="The Destination"
              title="Come taste for yourself."
            />
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <MapPin className="text-secondary mt-1 shrink-0" size={24} />
                <div className="space-y-2">
                  <h4 className="text-xl font-serif italic text-primary">Kitsilano Storefront</h4>
                  <p className="text-lg font-light opacity-70 leading-relaxed">
                    2571 West Broadway <br />
                    Vancouver, BC V6K 2E9
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="text-secondary mt-1 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-serif italic text-primary">Shop Hours</h4>
                  <ul className="space-y-2 text-sm font-light opacity-70">
                    {STORE_INFO.hours.map((h, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="w-40">{h.days}</span>
                        <span className="font-bold">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-10">
              <a 
                href="https://www.google.com/maps/dir//2571+West+Broadway,+Vancouver,+BC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white border border-primary px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all text-center"
              >
                Get Directions
              </a>
              <a 
                href={STORE_INFO.phoneLink}
                className="bg-stone/50 text-primary border border-stone px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-stone transition-all text-center"
              >
                {STORE_INFO.phone}
              </a>
            </div>
          </div>
          
          <div className="h-[600px] bg-stone rounded-lg overflow-hidden shadow-inner border border-stone relative">
              {/* Actual Map Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.541624838497!2d-123.16624568431103!3d49.2641736793291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673addc15f2ff%3A0x6f199f54e027cf61!2sVancouver%20Olive%20Oil%20Company!5e0!3m2!1sen!2sca!4v1714073345678!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
          </div>
        </div>
      </Section>

      {/* Subtle Newsletter */}
      <Section bgColor="white" className="border-t border-stone overflow-hidden">
        <div className="container-px text-center space-y-8 max-w-2xl mx-auto">
          <SectionHeader 
            subtitle="The Leaflet"
            title="Hear when the harvest arrives."
          />
          <p className="text-sm opacity-60 font-light italic leading-relaxed">
            We send exactly two major updates a year—when the Northern and Southern hemisphere oils land. That’s it.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow bg-stone/20 border-none px-6 py-4 text-sm focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-ink/40"
            />
            <button className="bg-primary text-white text-xs uppercase tracking-widest font-bold px-8 py-4 hover:bg-ink transition-colors">
              Join
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};
