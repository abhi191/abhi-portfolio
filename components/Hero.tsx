
import React from 'react';
import { GoogleLogo, CrestaLogo, VMWareLogo, SAPLogo, ChevronDownIcon } from './icons';
import InteractiveGrid from './InteractiveGrid';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle dot grid */}
      <InteractiveGrid />

      {/* Soft atmospheric gradient — whisper-level, like Vercel's hero wash */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(180,200,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(200,180,255,0.12) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 container px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="space-y-10">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-none text-brand-dark"
            style={{ letterSpacing: '-0.05em' }}
          >
            Hi, I'm{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0072f5 0%, #7928ca 50%, #de1d8d 100%)'
              }}
            >
              Abhinav
            </span>{' '}
            👋
          </h1>
          <div className="space-y-8">
            <p
              className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
              style={{ color: '#4d4d4d' }}
            >
              A multi-disciplinary designer with 9+ years of experience in designing and developing for enterprise and consumer grade applications. I focus on creating meaningful, clear, and effective products.
            </p>

            <div className="flex flex-col items-center gap-6">
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#808080' }}>
                Designed experiences for
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12" style={{ opacity: 0.6 }}>
                <GoogleLogo className="h-7 w-auto text-brand-dark" />
                <CrestaLogo className="h-5 w-auto text-brand-dark" />
                <VMWareLogo className="h-4 w-auto text-brand-dark" />
                <SAPLogo className="h-7 w-auto text-brand-dark" />
              </div>
            </div>

            {/* Scroll indicator */}
            <div
              className="flex justify-center mt-16 cursor-pointer animate-bounce"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <ChevronDownIcon className="w-6 h-6" style={{ color: '#ebebeb' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
