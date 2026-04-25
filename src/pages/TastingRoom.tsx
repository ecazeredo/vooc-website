import React from 'react';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';
import { STORE_INFO } from '../data/websiteData';
import { Compass, Coffee, MessageSquare, MapPin } from 'lucide-react';

export const TastingRoom = () => {
  const steps = [
    { title: "The Pour", desc: "We pour a small sample of any oil or balsamic into a tiny stainless steel cup.", icon: <Compass className="text-secondary" /> },
    { title: "The Swirl", desc: "We teach you to warm the oil with your hands to release its aromatic esters.", icon: <Coffee className="text-secondary" /> },
    { title: "The Discovery", desc: "You taste, we talk pairings. No pressure, no hurry, just exploration.", icon: <MessageSquare className="text-secondary" /> },
  ];

  return (
    <>
      <SEO 
        title="Inside the Tasting Room" 
        description="Learn how to taste extra virgin olive oil and balsamic vinegar in our Vancouver shop. Step inside our sensory sanctuary and discover the fresh differences."
      />

      <Section bgColor="cream" className="pt-40">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <SectionHeader 
                centered={false}
                subtitle="Sensory Playground"
                title="A space for the curious palate."
              />
              <div className="space-y-6 text-xl font-light opacity-80 leading-relaxed">
                <p>
                  Most grocery stores hide their oils behind paper labels and glass walls. At the Vancouver Olive Oil Company, we have nothing to hide. 
                </p>
                <p>
                  Our tasting room is designed for walk-ins. You don’t need an appointment, a degree in gastronomy, or even a specific recipe in mind. You just need to be hungry for something better.
                </p>
              </div>
            </div>
            <div className="aspect-video lg:aspect-square bg-stone overflow-hidden shadow-2xl skew-y-3">
              <img 
                src="https://images.unsplash.com/photo-1544333346-64e4fe18204e?auto=format&fit=crop&q=80&w=1200" 
                alt="Stainless steel fustis in the tasting room" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* The Process */}
      <Section bgColor="white">
        <div className="container-px">
          <SectionHeader 
            subtitle="The Ritual"
            title="How we taste."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto border border-stone">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-serif italic text-primary">{step.title}</h4>
                <p className="text-sm opacity-60 font-light leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Large Visual Section */}
      <section className="h-[60vh] relative overflow-hidden bg-primary">
         <img 
            src="https://images.unsplash.com/photo-1596431713028-eb761665a58d?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-cream font-serif italic text-4xl md:text-6xl text-center container-px">
              "We encourage you to dip the crackers, sip the oil, <br className="hidden md:block" /> 
              and find the finish that speaks to you."
            </p>
         </div>
      </section>

      {/* Visit Invitation */}
      <Section bgColor="stone">
        <div className="container-px text-center space-y-12">
          <SectionHeader 
            subtitle="Visit Kitsilano"
            title="Open Tuesday through Saturday."
          />
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
                href="https://www.google.com/maps/dir//2571+West+Broadway,+Vancouver,+BC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-12 py-6 font-bold uppercase tracking-widest text-sm hover:bg-ink transition-all flex items-center justify-center gap-3"
              >
                <MapPin size={18} /> Take Me There
              </a>
              <div className="border border-primary/20 bg-white/50 px-12 py-6">
                <span className="block text-[10px] uppercase font-bold text-secondary mb-1">Store Hours</span>
                <span className="text-sm font-bold text-primary">{STORE_INFO.hours[0].time}</span>
              </div>
          </div>
        </div>
      </Section>
    </>
  );
};
