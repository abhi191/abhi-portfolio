import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { LinkedInIcon, EmailIcon } from './icons';

const Footer: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const endRetroMode = () => {
    document.body.classList.remove('retro-mode');
    setShowSnackbar(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <footer ref={footerRef} className="bg-brand-background mt-24 md:mt-32 relative">
      {/* 90s Snackbar */}
      {showSnackbar && (
        <div className="fixed bottom-10 right-10 bg-blue-800 border-4 border-gray-300 outline outline-2 outline-black text-white font-mono z-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-72">
          {/* Title Bar */}
          <div className="bg-blue-900 px-2 py-1 flex justify-between items-center border-b-2 border-white">
            <span className="font-bold text-xs">SYSTEM MESSAGE</span>
            <button onClick={endRetroMode} className="bg-gray-300 text-black px-1 border border-black hover:bg-red-500 hover:text-white text-xs">X</button>
          </div>

          {/* Content */}
          <div className="p-3 text-center">
            <div className="text-yellow-300 font-bold flex items-center justify-center gap-2 mb-2">
              <span>⚠️</span> <span className="text-sm">90's MODE ACTIVE</span> <span>⚠️</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-700 border border-white relative overflow-hidden">
              <div
                className="h-full bg-green-500 absolute left-0 top-0"
                style={{
                  width: '100%',
                  animation: 'retro-progress 8s linear forwards'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Contact block */}
      <div className="border-t border-brand-dark/10">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 pt-16 md:pt-24 pb-12 md:pb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-brand-dark">
            Let's talk
          </h2>
          <a
            href="mailto:abhinav191@gmail.com"
            className="inline-block mt-6 text-xl md:text-2xl font-medium text-brand-dark underline decoration-brand-accent decoration-2 underline-offset-8 hover:text-brand-accent transition-colors duration-300"
          >
            abhinav191@gmail.com
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between text-sm text-brand-dark/60 relative">
        <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Made with ❤️ and vibecoding by Abhinav Gupta</p>

        {/* The "mistake" - Centered Floppy */}
        <button
          onClick={() => {
            if (showSnackbar) return; // Prevent double click

            // Trigger retro mode
            document.body.classList.add('retro-mode');
            setHasClicked(true);

            // Trigger Confetti
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#00FF00', '#FFFF00', '#0000FF', '#FF00FF'] // Retro colors
            });

            // Show Snackbar
            setShowSnackbar(true);

            // Cleanup after 8 seconds
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              endRetroMode();
            }, 8000);
          }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 hover:text-brand-dark transition-colors"
          aria-label="90s Mode"
          title="Whoops, left this here..."
        >
          <span className={!hasClicked && isVisible ? "animate-wiggle" : ""}>
            💾
            {!hasClicked && (
              <>
                <span className="spark" style={{ top: '-5px', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <span className="spark" style={{ top: '20%', right: '-5px', transform: 'translate(50%, -50%)' }} />
                <span className="spark" style={{ bottom: '20%', left: '-5px', transform: 'translate(-50%, -50%)' }} />
              </>
            )}
          </span>
        </button>

        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/abhinav191/" className="p-2 hover:text-brand-dark transition-colors" aria-label="LinkedIn"><LinkedInIcon className="h-5 w-5" /></a>
          <a href="mailto:abhinav191@gmail.com" className="p-2 hover:text-brand-dark transition-colors" aria-label="Email"><EmailIcon className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
