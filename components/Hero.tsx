
import React from 'react';
import { GoogleLogo } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-10">
          <h1 
            className="text-5xl sm:text-6xl font-display leading-tight tracking-normal"
          >
            Hi, myself Abhinav
          </h1>
          <div className="space-y-6">
            <p 
              className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto leading-loose"
            >
              A multi-disciplinary designer with 9+ years of experience in designing and developing for enterprise and consumer grade applications. I focus on creating meaningful, clear, and effective products.
            </p>
            <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto leading-loose">
              <span className="font-semibold text-brand-dark">
                Currently designing digital experiences at {' '}
                 <GoogleLogo 
                  className="inline-block h-[2.1em] w-auto align-baseline relative top-[0.65em]"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;