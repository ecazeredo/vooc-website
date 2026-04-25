import React from 'react';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';
import { STORE_INFO } from '../data/websiteData';
import { Phone, Mail, MapPin, ExternalLink, Calendar } from 'lucide-react';

export const Contact = () => {
  return (
    <>
      <SEO 
        title="Visit Us in Kitsilano" 
        description="Find our Kitsilano tasting room address, hours, phone, and holiday updates. We are located at 2571 West Broadway in Vancouver."
      />

      <Section bgColor="cream" className="pt-40">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <SectionHeader 
                centered={false}
                subtitle="Get in Touch"
                title="Visit the Tasting Room."
              />
              <p className="text-xl font-light opacity-80 leading-relaxed max-w-xl">
                We are located in the heart of Kitsilano. Walk-ins are always welcome for tastings. If you have any questions about our current harvest or specific product availability, feel free to give us a call.
              </p>

              <div className="space-y-8 pt-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary border border-stone shadow-sm shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-serif italic">The Broadway Shop</h4>
                    <p className="opacity-60 font-light leading-relaxed">
                      2571 West Broadway <br />
                      Vancouver, BC V6K 2E9
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir//2571+West+Broadway,+Vancouver,+BC" 
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-secondary border-b border-secondary/30 pb-0.5 hover:border-secondary transition-all"
                    >
                      Get Directions <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary border border-stone shadow-sm shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-serif italic">Call the Tasting Room</h4>
                    <p className="opacity-60 font-light leading-relaxed">For stock inquiries or large group visits.</p>
                    <a href={STORE_INFO.phoneLink} className="text-2xl font-serif italic text-primary hover:text-secondary transition-colors">{STORE_INFO.phone}</a>
                  </div>
                </div>

                 <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary border border-stone shadow-sm shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-serif italic">Email Inquiries</h4>
                    <p className="opacity-60 font-light leading-relaxed">General questions only. We are not taking email orders at this time.</p>
                    <a href={`mailto:${STORE_INFO.email}`} className="text-sm font-bold uppercase tracking-widest text-primary border-b border-stone pb-0.5">{STORE_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Block */}
            <div className="bg-white p-12 shadow-2xl border border-stone/50 space-y-12">
               <div className="space-y-6">
                  <div className="flex items-center gap-3 text-secondary uppercase text-[10px] font-bold tracking-[0.4em]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Regular Hours
                  </div>
                  <ul className="space-y-4">
                    {STORE_INFO.hours.map((h, i) => (
                      <li key={i} className="flex justify-between items-center pb-4 border-b border-stone/30 last:border-0 last:pb-0">
                        <span className="font-serif italic text-xl">{h.days}</span>
                        <span className="font-bold text-sm tracking-widest">{h.time}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="space-y-6 pt-12 border-t-2 border-stone border-dashed">
                  <div className="flex items-center gap-3 text-balsamic uppercase text-[10px] font-bold tracking-[0.4em]">
                    <Calendar size={16} />
                    Holiday Schedule
                  </div>
                  <ul className="space-y-4">
                    {STORE_INFO.holidayHours.map((h, i) => (
                      <li key={i} className="flex justify-between items-center text-sm">
                        <span className="opacity-50 uppercase tracking-widest font-bold">{h.date}</span>
                        <span className={h.time === "Closed" ? "text-balsamic font-bold italic" : "font-bold"}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section className="h-[50vh] w-full grayscale contrast-125 border-y border-stone">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.541624838497!2d-123.16624568431103!3d49.2641736793291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673addc15f2ff%3A0x6f199f54e027cf61!2sVancouver%20Olive%20Oil%20Company!5e0!3m2!1sen!2sca!4v1714073345678!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
      </section>

      {/* Contact Form Sub-Section (Disabled logic noted) */}
      <Section bgColor="white">
        <div className="container-px max-w-2xl mx-auto space-y-12">
          <SectionHeader 
            subtitle="Message Us"
            title="General Questions"
          />
          <p className="text-center text-sm font-light opacity-60 italic">
            Please note: we are unable to process orders or reservations via this form.
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Your Name</label>
                <input type="text" className="w-full bg-stone/20 border-none px-6 py-4 outline-none focus:ring-1 focus:ring-secondary" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Email Address</label>
                <input type="email" className="w-full bg-stone/20 border-none px-6 py-4 outline-none focus:ring-1 focus:ring-secondary" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Message</label>
              <textarea rows={6} className="w-full bg-stone/20 border-none px-6 py-4 outline-none focus:ring-1 focus:ring-secondary" />
            </div>
            <button className="w-full bg-primary text-white py-5 px-8 font-bold uppercase tracking-widest text-xs hover:bg-ink transition-all">
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};
