
import React from 'react';
import { DribbbleIcon, LinkedInIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-background mt-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-12 border-t border-gray-300/50 flex flex-col sm:flex-row items-center justify-between text-sm text-brand-dark/60">
        <p>&copy; {new Date().getFullYear()} Abhinav Gupta. All Rights Reserved.</p>
        <div className="flex items-center space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-brand-dark transition-colors"><LinkedInIcon className="h-5 w-5" /></a>
          <a href="#" className="hover:text-brand-dark transition-colors"><DribbbleIcon className="h-5 w-5" /></a>
          <a href="#" className="hover:text-brand-dark transition-colors"><TwitterIcon className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
