import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { aboutPageContent } from '../data/about';

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
              <div className="mt-16 max-w-3xl mx-auto space-y-12">
                  {journey.history.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row justify-between gap-4">
                      {/* Left Side */}
                      <div className="flex-1">
                          <div className="flex items-start gap-4">
                              <div className="bg-brand-card p-3 rounded-lg flex-shrink-0">
                                  <item.companyLogo className="h-6 w-6 text-brand-dark/80" />
                              </div>
                              <div>
                                  <h3 className="font-semibold text-lg text-brand-dark">{item.position}</h3>
                                  <p className="text-brand-dark/80">{item.company}</p>
                              </div>
                          </div>
                          {item.description && (
                            <p className="mt-4 pl-16 text-brand-dark/70 leading-relaxed text-base">
                              {item.description}
                            </p>
                          )}
                      </div>
                      {/* Right Side */}
                      <div className="flex-shrink-0 text-left sm:text-right mt-2 sm:mt-0 pt-1 pl-16 sm:pl-0">
                          <p className="text-brand-dark/90 font-medium text-base">{item.location}</p>
                          <p className="text-brand-dark/60 font-mono text-sm mt-1">{item.period}</p>
                      </div>
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