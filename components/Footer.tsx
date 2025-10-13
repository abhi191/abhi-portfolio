
import React from 'react';
import { DribbbleIcon, LinkedInIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-background mt-24 md:mt-32">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-12 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between text-sm text-brand-dark/60">
        <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Abhinav Gupta. All Rights Reserved.</p>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <a href="#" className="p-2 hover:text-brand-dark transition-colors" aria-label="LinkedIn"><LinkedInIcon className="h-5 w-5" /></a>
          <a href="#" className="p-2 hover:text-brand-dark transition-colors" aria-label="Dribbble"><DribbbleIcon className="h-5 w-5" /></a>
          <a href="#" className="p-2 hover:text-brand-dark transition-colors" aria-label="Twitter"><TwitterIcon className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;