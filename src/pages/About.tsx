import React from 'react';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';

export const About = () => {
  return (
    <>
      <SEO 
        title="Our Story" 
        description="Established in 2011, Vancouver Olive Oil Company is an independent, family-owned business in Kitsilano dedicated to the freshest harvests and artisanal balsamics."
      />

      <Section bgColor="cream" className="pt-40">
        <div className="container-px max-w-4xl mx-auto text-center space-y-12">
          <SectionHeader 
            subtitle="Independent & Family Owned"
            title="A journey rooted in freshness."
          />
          <div className="space-y-8 text-xl font-light opacity-80 leading-relaxed text-left lg:text-center">
            <p>
              In 2011, our family opened the doors to a small storefront on West Broadway with a simple observation: the olive oil in most Canadian kitchens was old, tired, and lacked the vibrant life force that defines a true extra virgin press.
            </p>
            <p>
              We decided to build a different kind of shop. One that followed the harvest across the hemispheres, rotating its selection twice a year to ensure that what you pour into your pan was on the tree just a few months prior.
            </p>
          </div>
        </div>
      </Section>

      <section className="h-[70vh] relative">
         <img 
            src="https://images.unsplash.com/photo-1464639351491-a172c2aa2911?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-ink/20" />
      </section>

      <Section bgColor="white">
        <div className="container-px grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-4xl font-serif italic text-primary">The Fresh Is Best Philosophy</h3>
            <div className="space-y-6 font-light opacity-80 leading-relaxed">
              <p>
                Unlike wine, olive oil does not improve with age. From the moment it is pressed, the clock is ticking on its antioxidants and delicate flavor esters. 
              </p>
              <p>
                That is why we never buy in bulk for the year. We source smaller lots that correlate to the current hemisphere's harvest season. In the spring, we look to the Southern Hemisphere (Chile, Australia, South Africa). In the winter, we look to the Northern Hemisphere (Italy, Spain, Greece, California).
              </p>
              <p>
                 This obsession with the "Press Date" is what has kept our Kitsilano customers returning for over a decade.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-serif italic text-primary">Proudly Independent</h3>
            <div className="space-y-6 font-light opacity-80 leading-relaxed">
              <p>
                We aren't a franchise. We aren't a corporate chain. We are a single boutique shop in Kitsilano run by people who know the stories of every grove we source from.
              </p>
              <p>
                When you visit us, you aren't just buying ingredients; you are joining a family that believes the best things in life are simple, artisanal, and exceptionally fresh.
              </p>
            </div>
            <div className="pt-10">
               <div className="grid grid-cols-2 gap-8 border-t border-stone pt-8">
                  <div>
                    <span className="block text-4xl text-secondary font-serif italic mb-2">2011</span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Established</span>
                  </div>
                   <div>
                    <span className="block text-4xl text-secondary font-serif italic mb-2">1,000+</span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Harvests Sourced</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
