import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GoogleLogo, ToastLogo, CrestaLogo, VMWareLogo, SAPLogo } from './icons';
import InteractiveGrid from './InteractiveGrid';

// Two controlled lines so the headline never wraps to 3+ lines at desktop.
const HEADLINE_LINES: { text: string; italic?: boolean }[][] = [
  [{ text: 'I' }, { text: 'design' }, { text: 'intelligent', italic: true }, { text: 'products' }],
  [{ text: 'that' }, { text: 'feel' }, { text: 'effortless.' }],
];

const EASE = [0.16, 1, 0.3, 1] as const;

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  let wordIndex = 0;

  return (
    <>
      <section className="relative min-h-[82dvh] w-full flex items-center overflow-hidden">
        <InteractiveGrid />

        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative z-10 py-20">
          <div className="max-w-6xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-brand-dark">
              {HEADLINE_LINES.map((line, lineIdx) => (
                <span key={lineIdx} className="block pb-1">
                  {line.map((word) => {
                    const delay = wordIndex++ * 0.07;
                    return (
                      <span key={word.text} className="inline-block overflow-hidden align-bottom pb-3 -mb-3">
                        <motion.span
                          className={`inline-block mr-[0.24em] ${word.italic ? 'italic accent-word' : ''}`}
                          initial={reduceMotion ? false : { y: '110%', opacity: 0 }}
                          animate={{ y: '0%', opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.15 + delay, ease: EASE }}
                        >
                          {word.text}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-8 text-lg md:text-xl text-brand-dark/70 leading-relaxed max-w-[52ch]"
              initial={reduceMotion ? false : { y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            >
              Product Designer with 9+ years building AI-native products,
              agentic platforms, and enterprise experiences that simplify
              complexity and drive business impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Logo strip: separate section, directly under the hero */}
      <motion.section
        className="border-y border-brand-dark/10 bg-brand-background"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 md:py-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-dark/50">
            Designed for
          </span>
          <div className="flex flex-wrap items-center gap-x-10 md:gap-x-14 gap-y-6">
            <GoogleLogo className="h-7 w-auto text-brand-dark/70 hover:text-brand-dark transition-colors duration-300" />
            <ToastLogo className="h-5 w-auto text-brand-dark/70 hover:text-brand-dark transition-colors duration-300" />
            <CrestaLogo className="h-5 w-auto text-brand-dark/70 hover:text-brand-dark transition-colors duration-300" />
            <VMWareLogo className="h-4 w-auto text-brand-dark/70 hover:text-brand-dark transition-colors duration-300" />
            <SAPLogo className="h-7 w-auto text-brand-dark/70 hover:text-brand-dark transition-colors duration-300" />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
