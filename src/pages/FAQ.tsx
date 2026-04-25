import React from 'react';
import { Section, SectionHeader } from '../components/layout/Section';
import { SEO } from '../components/SEO';
import { STORE_INFO } from '../data/websiteData';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-stone/50 py-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="font-serif text-2xl group-hover:text-secondary transition-colors italic">{question}</span>
        <span className="text-secondary">{isOpen ? <Minus /> : <Plus />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-ink/70 font-light leading-relaxed max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    { 
      question: "Do I need an appointment for a tasting?", 
      answer: "No appointment necessary. Our tasting room is designed for walk-ins during our regular hours of Tuesday through Saturday, 11am to 5pm. Just come as you are." 
    },
    { 
      question: "Is there a fee to taste the oils and balsamics?", 
      answer: "We offer complimentary tastings for individuals and small families. If you are planning a large group visit or a specific corporate event, please call us to discuss a curated experience." 
    },
    { 
      question: "Why does your Extra Virgin Olive Oil selection switch twice a year?", 
      answer: "Olive oil is seasonal. We follow the world harvest: in the spring, we source from the Southern Hemisphere, and in the fall, we move to the Northern Hemisphere. This ensures you are always buying oil that was pressed within the last few months." 
    },
    { 
      question: "Can I bring my own bottles back to be refilled?", 
      answer: "At this time, we are no longer able to accept used bottles for refill. However, all our glass is 100% recyclable, and we encourage you to repurpose your bottles at home!" 
    },
    { 
      question: "Do you ship or take online orders?", 
      answer: "We do not offer shipping or online ordering. We believe the sensory experience of the tasting room is fundamental to choosing the right oil. We specialize in the in-store experience at our Kitsilano shop." 
    },
    { 
      question: "Do you offer gift sets?", 
      answer: "Absolutely. We can create custom gift bundles of assorted sizes. Please visit us in-store to build the perfect gift for the cook in your life." 
    },
    { 
      question: "I have a restaurant or a shop. Do you do wholesale?", 
      answer: "We primarily focus on our retail tasting room, but we are open to discussions for local partners. Please send us an email at info@vooc.ca or call the shop." 
    },
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Quick answers about visiting our tasting room, our hemisphere-switching philosophy, and why we focus on the in-store experience."
      />

      <Section bgColor="cream" className="pt-40">
        <div className="container-px max-w-4xl mx-auto">
          <SectionHeader 
            subtitle="The Details"
            title="Common Questions"
          />
          <div className="space-y-2 mt-12 mb-20">
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.question} answer={f.answer} />
            ))}
          </div>

          {/* Contact Hook */}
          <div className="bg-primary p-12 text-center text-cream space-y-6">
            <h4 className="text-3xl font-serif italic">Still have questions?</h4>
            <p className="opacity-70 font-light">We’re happy to chat. Give us a call at the shop during our regular hours.</p>
            <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center">
              <a href={STORE_INFO.phoneLink} className="bg-secondary text-primary px-10 py-4 text-xs font-bold uppercase tracking-widest">{STORE_INFO.phone}</a>
              <a href={`mailto:${STORE_INFO.email}`} className="bg-white/10 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all">Email info@vooc.ca</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
