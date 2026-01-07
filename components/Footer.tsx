import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DribbbleIcon, LinkedInIcon, TwitterIcon, EmailIcon } from './icons';

const Footer: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const endRetroMode = () => {
    document.body.classList.remove('retro-mode');
    setShowSnackbar(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const keepRetroMode = () => {
    setShowSnackbar(false); // Hide snackbar but keep mode
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <footer className="bg-brand-background mt-24 md:mt-32 relative">
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

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-12 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between text-sm text-brand-dark/60 relative">
        <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Made with ❤️ and vibecoding by Abhinav Gupta</p>

        {/* The "mistake" - Centered Floppy */}
        <button
          onClick={() => {
            if (showSnackbar) return; // Prevent double click

            // Trigger retro mode
            document.body.classList.add('retro-mode');

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
          💾
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
