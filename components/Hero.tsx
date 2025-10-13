import React from 'react';

const HeroIllustration: React.FC = () => {
  return (
    <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-auto md:w-64 lg:w-72">
      <path d="M125.758 171.808C136.196 161.43 147.643 162.839 157.072 169.58C166.429 176.265 174.929 186.321 184.536 189.92C194.143 193.518 206.518 190.25 212.75 180.75C219.661 170.241 217.5 155.5 210.5 147.5C203.5 139.5 192.179 137.491 184.536 132.5C176.893 127.509 172.589 119.5 173.5 110.5C174.411 101.5 181.5 93.8304 186.5 86.5C191.5 79.1696 194.5 70.1696 191 63C187.5 55.8304 178.179 53.1696 171 52C163.821 50.8304 156.661 51.3304 150.5 54.5C144.339 57.6696 138.821 63.8304 133 67.5C127.179 71.1696 119.5 72.8304 113.5 69C107.5 65.1696 104.161 57.5 101 51.5C97.8393 45.5 94.8393 39.5 89.5 36C84.1607 32.5 75.8393 31.8304 70 34.5C64.1607 37.1696 59.8393 43.1696 57.5 49.5C55.1607 55.8304 54.5 63.5 52 68.5C49.5 73.5 45.1607 76.1696 40.5 76C35.8393 75.8304 31.5 72.8304 28 69C24.5 65.1696 21.8393 60.1696 19 56C16.1607 51.8304 12.5 48.1696 8 50C3.5 51.8304 1.16071 58.8304 2.5 64C3.83929 69.1696 8.5 72.1696 13.5 73.5C18.5 74.8304 24.5 74.5 29 76C33.5 77.5 37.1607 81.1696 39 86C40.8393 90.8304 40.8393 97.5 39.5 102.5C38.1607 107.5 35.5 111.17 33.5 116C31.5 120.83 30.1607 126.83 32 131.5C33.8393 136.17 38.8393 138.83 43.5 140C48.1607 141.17 53.1607 140.83 57.5 142.5C61.8393 144.17 65.5 147.83 67 152.5C68.5 157.17 67.8393 163.17 66 168C64.1607 172.83 61.1607 176.83 58 181.5" stroke="#1C1C1C" strokeWidth="2.5" strokeLinecap="round"/>
      <g className="fill-brand-accent">
        <circle cx="150" cy="40" r="10" />
        <circle cx="190" cy="55" r="12" />
        <circle cx="215" cy="120" r="8" />
        <circle cx="168" cy="180" r="15" />
        <circle cx="120" cy="190" r="6" />
        <circle cx="40" cy="120" r="13" />
        <circle cx="20" cy="70" r="9" />
        <circle cx="95" cy="30" r="7" />
      </g>
    </svg>
  )
}

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-40">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tighter">
            Hi, myself Abhinav
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-lg mx-auto md:mx-0 leading-loose">
            A multi-disciplinary designer with 9+ years of experience in designing and developing for enterprise and consumer grade applications. I focus on creating meaningful, clear, and effective products. <span className="font-semibold text-brand-dark">Currently an Interaction Designer at Google.</span>
          </p>
        </div>
        <div className="flex justify-center items-center mt-12 md:mt-0">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;