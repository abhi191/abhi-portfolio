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

export const UpArrowIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const LeftArrowIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
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

export const WiproLogo: React.FC<IconProps> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
        <title>Wipro</title>
        <path d="M6.31 3.255h3.833L12 7.088l1.857-3.833h3.833L12 14.19zm0 7.39h3.833L12 14.478l1.857-3.833h3.833L12 21.58zM12 0l12 24H0z"/>
    </svg>
);

export const VMWareLogo: React.FC<IconProps> = ({ className }) => (
  <svg role="img" viewBox="0 0 190.25 31" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>VMware</title>
    <g transform="matrix(1.25, 0, 0, -1.25, -375.855, 370.03)">
      <g>
        <g transform="translate(388.349, 250.856)">
          <path fill="currentColor" d="M-21.716,23.2l-6.571,18.298c-0.084,0.253-0.209,0.587-0.209,0.88        c0,0.793,0.67,1.546,1.63,1.546c0.838,0,1.384-0.544,1.634-1.337l5.445-15.767l5.484,15.811        c0.25,0.75,0.753,1.294,1.586,1.294h0.17c0.881,0,1.425-0.544,1.675-1.294l5.439-15.811l5.531,15.85        c0.209,0.673,0.666,1.255,1.548,1.255c0.92,0,1.591-0.708,1.591-1.505c0-0.292-0.127-0.625-0.209-0.88L-3.585,23.2        c-0.338-0.958-1.005-1.461-1.76-1.461H-5.47c-0.838,0-1.467,0.503-1.762,1.461l-5.397,15.549L-18.073,23.2        c-0.293-0.958-0.923-1.461-1.758-1.461h-0.088C-20.712,21.739-21.379,22.242-21.716,23.2"/>
        </g>
        <g transform="translate(436.249, 269.985)">
          <path fill="currentColor" d="M-21.717,23.2c0,0.883,0.712,1.637,1.591,1.637c0.927,0,1.637-0.713,1.637-1.637v-3.713        c1.592,3.606,5.123,5.308,7.463,5.308c0.969,0,1.598-0.712,1.598-1.634c0-0.882-0.584-1.508-1.43-1.634        c-4.195-0.503-7.63-3.65-7.63-9.9V4.274c0-0.881-0.67-1.634-1.592-1.634c-0.923,0-1.636,0.716-1.636,1.634L-21.717,23.2        L-21.717,23.2z"/>
        </g>
        <g transform="translate(458.898, 249.221)">
          <path fill="currentColor" d="M-21.716,23.2c-5.837,0-10.603,4.527-10.603,11.166v0.086        c0,6.183,4.316,11.164,10.192,11.164c6.283,0,9.861-5.184,9.861-10.873c0-0.874-0.705-1.499-1.481-1.499h-15.362        c0.448-4.645,3.692-7.259,7.477-7.259c2.631,0,4.556,1.038,6.12,2.491c0.247,0.205,0.534,0.371,0.906,0.371        c0.778,0,1.397-0.623,1.397-1.373c0-0.372-0.164-0.747-0.497-1.034C-15.717,24.491-18.103,23.2-21.716,23.2 M-15.43,35.611        c-0.33,3.905-2.55,7.305-6.783,7.305c-3.698,0-6.492-3.111-6.898-7.305H-15.43z"/>
        </g>
        <g transform="translate(413.36, 255.941)">
          <path fill="currentColor" d="M-21.717,23.2v0.084c0,4.556,3.764,6.984,9.239,6.984c2.761,0,4.725-0.376,6.652-0.923        v0.756c0,3.885-2.39,5.895-6.441,5.895c-2.175,0-3.441-0.277-5.033-0.986c-0.206-0.084-0.417-0.127-0.58-0.127        c-0.753,0-1.425,0.629-1.425,1.38c0,0.667,0.291,1.08,0.88,1.341c2.129,0.924,3.734,1.231,6.492,1.231        c3.05,0,5.392-0.792,6.978-2.382c1.466-1.463,2.219-3.553,2.219-6.314V18.211c0-0.917-0.669-1.588-1.552-1.588        c-0.916,0-1.537,0.67-1.537,1.505v2.062c-1.508-1.969-4.019-3.722-7.816-3.722C-17.657,16.471-21.717,18.768-21.717,23.2         M-5.785,24.873v2.091c-1.592,0.459-3.727,0.92-6.359,0.92c-4.05,0-6.311-1.758-6.311-4.473v-0.083        c0-2.717,2.506-4.306,5.436-4.306C-9.049,19.022-5.785,21.448-5.785,24.873"/>
        </g>
        <g transform="translate(329.779, 270.223)">
          <path fill="currentColor" d="M-21.716,23.2c-0.708,1.552-2.458,2.255-4.092,1.529        c-1.636-0.727-2.238-2.541-1.499-4.094l6.861-14.913c1.079-2.337,2.216-3.562,4.35-3.562c2.28,0,3.274,1.334,4.352,3.562        c0,0,5.984,13.03,6.044,13.166c0.061,0.138,0.253,0.559,0.862,0.555c0.515-0.003,0.948-0.414,0.948-0.966V5.735        c0-1.964,1.089-3.575,3.185-3.575c2.094,0,3.226,1.611,3.226,3.575v10.427c0,2.011,1.441,3.316,3.405,3.316        s3.271-1.352,3.271-3.316V5.735c0-1.964,1.093-3.575,3.185-3.575c2.094,0,3.232,1.611,3.232,3.575v10.427        c0,2.011,1.435,3.316,3.4,3.316c1.961,0,3.273-1.352,3.273-3.316V5.735c0-1.964,1.092-3.575,3.186-3.575        c2.093,0,3.229,1.611,3.229,3.575v11.867c0,4.361-3.507,7.416-7.727,7.416c-4.215,0-6.855-2.916-6.855-2.916        c-1.403,1.819-3.337,2.912-6.61,2.912c-3.454,0-6.477-2.912-6.477-2.912c-1.404,1.819-3.794,2.912-5.773,2.912        c-3.061,0-5.492-1.346-6.975-4.737l-4.381-10.327L-21.716,23.2z"/>
        </g>
        <g transform="translate(468.609, 268.931)">
          <path fill="currentColor" d="M-21.716,23.2v0.018c0,1.459,1.184,2.688,2.672,2.688c1.509,0,2.677-1.216,2.677-2.677        v-0.011c0-1.464-1.181-2.693-2.677-2.693C-20.553,20.525-21.716,21.737-21.716,23.2 M-16.881,23.218v0.007        c0,1.2-0.927,2.184-2.163,2.184c-1.225,0-2.166-1.001-2.166-2.191v-0.014c0-1.197,0.93-2.181,2.166-2.181        C-17.823,21.023-16.881,22.022-16.881,23.218"/>
        </g>
        <g transform="translate(470.257, 270.007)">
          <path fill="currentColor" d="M-21.715,23.2c0,0.159,0.127,0.286,0.288,0.286h0.892c0.336,0,0.595-0.095,0.756-0.265        c0.147-0.143,0.227-0.35,0.227-0.59v-0.008c0-0.408-0.206-0.657-0.517-0.788l0.394-0.48c0.055-0.072,0.092-0.131,0.092-0.219        c0-0.158-0.134-0.262-0.27-0.262c-0.127,0-0.213,0.065-0.28,0.147l-0.555,0.702h-0.455v-0.564        c0-0.159-0.123-0.284-0.283-0.284c-0.161,0-0.288,0.126-0.288,0.284V23.2z M-20.567,22.228c0.278,0,0.431,0.145,0.431,0.366        v0.009c0,0.241-0.164,0.371-0.441,0.371h-0.569v-0.745H-20.567z"/>
        </g>
      </g>
    </g>
  </svg>
);
  
export const SAPLogo: React.FC<IconProps> = ({ className }) => (
    <svg role="img" viewBox="0 0 455 225" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title>SAP</title>
        <defs>
            <linearGradient id="sap-logo-gradient-a" x2="0" y2="225" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ae" offset="0"/>
                <stop stopColor="#05a" offset="1"/>
            </linearGradient>
        </defs>
        <path d="m455 0h-455v225h230" fill="url(#sap-logo-gradient-a)"/>
        <path d="m225 45v106l-39-106h-39l-33 88c-4-22-27-30-45-36-12-4-25-9-25-16 0-5 7-10 20-9 9 1 17 1 33 9l16-27c-15-8-35-12-51-12-19 0-35 6-45 16-7 7-10 16-11 26 0 14 5 24 16 32 9 6 20 10 30 13 13 4 23 8 23 15-1 9-11 11-18 11-12 1-22-1-37-10l-14 27c15 9 31 13 50 13 13 0 33-4 44-14l-2 9h38l7-17c15 4 32 5 47 0l5 17h68v-40h14c35 0 56-17 56-47 0-34-20-48-63-48zm-73 88 14-45h1l14 45c-10 3-20 3-29 0zm111-23v-36h10c13 0 23 4 23 17 0 14-10 19-23 19z" fill="#fff"/>
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