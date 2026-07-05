import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { aboutPageContent } from '../data/about';
import { ChevronDownIcon } from './icons';

const AboutPage: React.FC = () => {
  const {
    profileImageUrl,
    title,
    intro,
    designPhilosophy,
    journey,
    beyondPixels
  } = aboutPageContent;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-20 md:py-28 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Intro: asymmetric split, type left / portrait right */}
        <AnimateOnScroll>
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-brand-dark">
                {title}
              </h1>
              <p className="mt-8 text-lg md:text-xl text-brand-dark/70 leading-relaxed max-w-[58ch]">
                {intro}
              </p>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0 rounded-2xl overflow-hidden border border-brand-dark/10 aspect-[4/5] bg-brand-card">
                <img
                  src={profileImageUrl}
                  alt="Abhinav Gupta"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Design Philosophy: hairline columns, no cards */}
        <AnimateOnScroll>
          <section className="mt-24 md:mt-32">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark">
              {designPhilosophy.title}
            </h2>
            <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10">
              {designPhilosophy.points.map((point, index) => (
                <AnimateOnScroll key={index} delay={index * 120}>
                  <div className="border-t border-brand-dark/15 pt-6">
                    <h3 className="text-lg md:text-xl font-bold text-brand-dark">{point.title}</h3>
                    <p className="mt-3 text-brand-dark/70 leading-relaxed">{point.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Journey */}
        <AnimateOnScroll>
          <section className="mt-24 md:mt-32">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark">
              {journey.title}
            </h2>
            <div className="mt-12 md:mt-16 max-w-4xl">
              {journey.history.map((item, index) => (
                <div key={index} className="py-6 border-t border-brand-dark/10">
                  <div
                    className={`flex flex-row justify-between items-start gap-4 ${item.description ? 'cursor-pointer group' : ''}`}
                    onClick={item.description ? () => handleToggle(index) : undefined}
                    onKeyDown={item.description ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggle(index); } } : undefined}
                    role={item.description ? 'button' : undefined}
                    tabIndex={item.description ? 0 : -1}
                    aria-expanded={item.description ? expandedIndex === index : undefined}
                    aria-controls={item.description ? `description-${index}` : undefined}
                    aria-label={item.description ? `${item.position} at ${item.company}. ${expandedIndex === index ? 'Hide details' : 'Show details'}` : undefined}
                  >
                    {/* Left Side: Logo and all text content */}
                    <div className="flex-1 flex items-start gap-6">
                      <div className="w-12 flex-shrink-0 pt-1.5">
                        {typeof item.companyLogo === 'string' ? (
                          <div className="h-8 flex items-center font-mono font-semibold text-brand-dark/70 text-[10px] leading-tight tracking-widest uppercase">
                            {item.companyLogo}
                          </div>
                        ) : (
                          <item.companyLogo className="h-8 w-12 text-brand-dark/80" />
                        )}
                      </div>
                      <div className="flex-1 pt-1">
                        {/* Desktop View: Split layout */}
                        <div className="hidden sm:block">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-xl text-brand-dark">{item.position}</h3>
                            <p className="text-brand-dark/70 text-base">{item.location}</p>
                          </div>
                          <div className="flex justify-between items-baseline mt-1">
                            <p className="text-brand-dark/70">{item.company}</p>
                            <p className="text-brand-dark/50 font-mono text-sm">{item.period}</p>
                          </div>
                        </div>

                        {/* Mobile View: Stacked layout */}
                        <div className="sm:hidden">
                          <h3 className="font-bold text-xl text-brand-dark">{item.position}</h3>
                          <p className="text-brand-dark/70 mt-1">{item.company}</p>
                          <div className="mt-2 text-left">
                            <p className="text-brand-dark/70 text-base">{item.location}</p>
                            <p className="text-brand-dark/50 font-mono text-sm mt-1">{item.period}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Chevron only */}
                    <div className="flex-shrink-0 flex items-center justify-end self-center">
                      {item.description ? (
                        <div
                          className="p-2 rounded-full group-hover:bg-brand-card transition-colors flex-shrink-0"
                          aria-hidden="true"
                        >
                          <ChevronDownIcon
                            className={`h-5 w-5 text-brand-dark/70 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                          />
                        </div>
                      ) : (
                        <div className="w-9 h-9 flex-shrink-0" /> // Placeholder for alignment
                      )}
                    </div>
                  </div>

                  {/* Collapsible content, outside the flex row */}
                  {item.description && (
                    <div
                      id={`description-${index}`}
                      className={`grid transition-all duration-500 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-4 text-brand-dark/70 leading-relaxed text-base pl-[72px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Contact CTA intentionally omitted here; the footer's "Let's talk"
            block handles it site-wide to avoid duplicate contact CTAs. */}
      </div>
    </div>
  );
};

export default AboutPage;
