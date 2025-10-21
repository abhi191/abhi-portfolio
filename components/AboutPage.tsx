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
    beyondPixels, 
    connect 
  } = aboutPageContent;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto space-y-20 md:space-y-28">
        {/* Intro Section */}
        <AnimateOnScroll>
          <section className="text-center flex flex-col items-center">
            <div className="w-96 h-96 md:w-56 md:h-56 rounded-full overflow-hidden bg-brand-card shadow-lg">
              <img 
                src={profileImageUrl} 
                alt="Abhinav Gupta" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mt-8">
              {title}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
              {intro}
            </p>
          </section>
        </AnimateOnScroll>

        {/* Design Philosophy Section */}
        <AnimateOnScroll>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">{designPhilosophy.title}</h2>
            <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-16 text-center">
              {designPhilosophy.points.map((point, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                  <div className="space-y-3 p-4">
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                    <p className="text-brand-dark/80 leading-relaxed">{point.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Journey Section */}
        <AnimateOnScroll>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">{journey.title}</h2>
            <div className="mt-16 max-w-3xl mx-auto">
              {journey.history.map((item, index) => (
                <div key={index} className="py-6 border-b border-brand-dark/10 last:border-b-0">
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
                      <div className="bg-brand-card p-5 rounded-xl flex-shrink-0">
                        {typeof item.companyLogo === 'string' ? (
                          <div className="h-12 w-12 flex items-center justify-center font-bold text-brand-dark/80 text-center text-xs leading-tight tracking-wider uppercase">
                            {item.companyLogo}
                          </div>
                        ) : (
                          <item.companyLogo className="h-12 w-12 text-brand-dark/80" />
                        )}
                      </div>
                      <div className="flex-1 pt-1">
                        {/* Desktop View: Split layout */}
                        <div className="hidden sm:block">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-semibold text-xl text-brand-dark">{item.position}</h3>
                            <p className="text-brand-dark/90 font-medium text-base">{item.location}</p>
                          </div>
                          <div className="flex justify-between items-baseline mt-1">
                            <p className="text-brand-dark/80">{item.company}</p>
                            <p className="text-brand-dark/60 font-mono text-sm">{item.period}</p>
                          </div>
                        </div>

                        {/* Mobile View: Stacked layout */}
                        <div className="sm:hidden">
                          <h3 className="font-semibold text-xl text-brand-dark">{item.position}</h3>
                          <p className="text-brand-dark/80 mt-1">{item.company}</p>
                          <div className="mt-2 text-left">
                            <p className="text-brand-dark/90 font-medium text-base">{item.location}</p>
                            <p className="text-brand-dark/60 font-mono text-sm mt-1">{item.period}</p>
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
                        <p className="pt-4 text-brand-dark/70 leading-relaxed text-base pl-28">
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
        
        {/* Beyond the Pixels Section */}
        <AnimateOnScroll>
          <section className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{beyondPixels.title}</h2>
              <p className="mt-8 text-lg md:text-xl text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
                  {beyondPixels.text}
              </p>
          </section>
        </AnimateOnScroll>

        {/* Connect Section */}
        <AnimateOnScroll>
          <section className="text-center py-12 md:py-16 bg-brand-card rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{connect.title}</h2>
              <p className="mt-6 text-lg text-brand-dark/80 max-w-xl mx-auto px-4">
                  {connect.text}
              </p>
              <div className="mt-10">
                  <button className="bg-brand-dark text-white text-base font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                      {connect.buttonText}
                  </button>
              </div>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default AboutPage;