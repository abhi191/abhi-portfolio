
import React from 'react';
import { GoogleLogo, CrestaLogo, VMWareLogo, SAPLogo } from './icons';
import InteractiveGrid from './InteractiveGrid';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">

        {/* Top-right blob (Blue) */}
        <div
          className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-highlight mix-blend-multiply filter blur-[80px] opacity-60 animate-aurora-1"
        />

        {/* Top-left blob (Purple/Accent) */}
        <div
          className="absolute top-0 -left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-brand-accent/40 mix-blend-multiply filter blur-[80px] opacity-60 animate-aurora-2"
        />

        {/* Bottom-center blob (Subtle Gray/Warm) */}
        <div
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-blue-100 mix-blend-multiply filter blur-[80px] opacity-60 animate-aurora-3"
        />

      </div>

      {/* Interactive Dot Grid */}
      <InteractiveGrid />

      <div className="max-w-4xl mx-auto text-center relative z-10 container px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="space-y-10">
          <h1
            className="text-5xl sm:text-6xl font-display leading-tight tracking-normal text-brand-dark"
          >
            Hi, I'm <span
              className="bg-clip-text text-transparent animate-gradient-flow"
              style={{
                backgroundImage: 'linear-gradient(to right, #ef4444, #f97316, #f59e0b, #eab308, #84cc16, #22c55e, #10b981, #14b8a6, #06b6d4, #0ea5e9, #3b82f6, #6366f1, #8b5cf6, #d946ef, #ec4899, #f43f5e, #ef4444)'
              }}
            >Abhinav</span> 👋
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
      {/* Gradient Fade to Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-brand-background to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;