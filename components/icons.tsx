
import React from 'react';

type IconProps = {
  className?: string;
};

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const DribbbleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.4.6-2.8.4c-1.1 2.3-3.4 3.9-3.4 3.9s-1.4-.2-2.3-.6c-.7.5-1.5.8-2.3.8s-1.6-.3-2.3-.8c-.9.4-2.3.6-2.3.6s-2.3-1.6-3.4-3.9c-1.4.2-2.8-.4-2.8-.4s1.7-3.5 3.3-4.9c-1.3-1.3-2-3.4-2-3.4s.7-.2 1.5.2c1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c.8-.4 1.5-.2 1.5-.2z"></path>
    </svg>
);

export const VMWareLogo: React.FC<IconProps> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
      <title>VMware</title>
      <path d="M18.002 0h-5.08L6.04 16.558h5.077l1.804-4.89h5.08zm-5.077 24h5.078l6.88-16.558h-5.08L12.925 24z"/>
    </svg>
);
  
export const OracleLogo: React.FC<IconProps> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
      <title>Oracle</title>
      <path d="M12.43 12.004c0 3.93-3.07 7.15-6.91 7.15v-3.57c1.9 0 3.44-1.6 3.44-3.58s-1.54-3.58-3.44-3.58v-3.57c3.84 0 6.91 3.22 6.91 7.15zm-1.04 7.15c-3.84 0-6.91-3.22-6.91-7.15s3.07-7.15 6.91-7.15V.004C5.02.004.5 4.874.5 12.004s4.52 11.99 10.89 11.99v-3.84zm11.23-7.15c0-3.93-3.07-7.15-6.91-7.15v3.57c1.9 0 3.44 1.6 3.44-3.58s-1.54 3.58-3.44 3.58v3.57c3.84 0 6.91-3.22 6.91-7.15zm1.04-7.15V.004C18.26.004 13.74 4.874 13.74 12.004s4.52 11.99 10.89 11.99v-3.84c-3.84 0-6.91-3.22-6.91-7.15s3.07-7.15 6.91-7.15z"/>
    </svg>
);

export const GoogleLogo: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 272 92"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Google"
    >
        <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
        <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
        <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
        <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
        <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
        <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
    </svg>
);

export const NameLogoIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.91 38.51" className={className} fill="currentColor" aria-hidden="true">
      <path d="M35.9,15.21l-4,6-4-6-1.8-2.8a1.11,1.11,0,0,0-1.6-.3l-.3.3-17,25.5a1.19,1.19,0,0,1-.9.5H1.1A1.11,1.11,0,0,1,0,37.31a1.42,1.42,0,0,1,.2-.6L24.4.51A1.11,1.11,0,0,1,26,.21l.3.3Z"/>
      <path d="M63.7,36.61a1.15,1.15,0,0,1-.3,1.6,1.42,1.42,0,0,1-.6.2l-4,.1H14.6a1.11,1.11,0,0,1-1.1-1.1,1.42,1.42,0,0,1,.2-.6L28,15.31l4-6L37.8.61a1.15,1.15,0,0,1,1.6-.3l.3.3,10.2,15.5a1.25,1.25,0,0,1-.3,1.6,1.45,1.45,0,0,1-.7.2H43.8a1.05,1.05,0,0,1-.9-.5l-3.2-5a1.11,1.11,0,0,0-1.6-.3l-.3.3-1.9,2.8-4,6L26,30.11a1.25,1.25,0,0,0,.3,1.6,1.42,1.42,0,0,0,.6.2H50.7a1.2,1.2,0,0,0,1.2-1.1,1.45,1.45,0,0,0-.2-.7l-2.3-3.4a1.15,1.15,0,0,1,.3-1.6,1.42,1.42,0,0,1,.6-.2h5a1.05,1.05,0,0,1,.9.5Z"/>
    </svg>
  );
