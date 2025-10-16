
import React from 'react';
import { GoogleLogo, CrestaLogo, VMWareLogo, SAPLogo } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-10">
          <h1 
            className="text-5xl sm:text-6xl font-display leading-tight tracking-normal"
          >
            Hi, myself Abhinav 👋
          </h1>
          <div className="space-y-6">
            <p 
              className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto leading-loose"
            >
              A multi-disciplinary designer with 9+ years of experience in designing and developing for enterprise and consumer grade applications. I focus on creating meaningful, clear, and effective products.
            </p>
            <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto leading-loose">
              <span className="font-semibold text-brand-dark">
                Currently designing experiences at
                 <GoogleLogo 
                  className="inline-block h-[1.5em] w-auto align-baseline relative top-[0.5em] ml-3"
                />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 
      // Companies I've worked with card
      <div className="mt-24 max-w-4xl mx-auto">
        <div className="bg-brand-card rounded-3xl py-10 px-8 md:py-12 md:px-12 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-brand-dark/60 uppercase">
            Companies I have previously worked with
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 text-brand-dark/70">
            <a href="#/about" className="transition-colors hover:text-brand-dark" aria-label="Cresta">
                <CrestaLogo className="h-7 w-auto" />
            </a>
            <a href="#/about" className="transition-colors hover:text-brand-dark" aria-label="VMware">
                <VMWareLogo className="h-5 w-auto" />
            </a>
            <a href="#/about" className="transition-colors hover:text-brand-dark" aria-label="SAP">
                <SAPLogo className="h-9 w-auto" />
            </a>
          </div>
        </div>
      </div> 
      */}
    </section>
  );
};

export default Hero;