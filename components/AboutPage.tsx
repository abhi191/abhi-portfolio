import React from 'react';

const ProfileImagePlaceholder: React.FC = () => (
  <div className="bg-brand-card rounded-full w-48 h-48 md:w-56 md:h-56 flex items-center justify-center relative overflow-hidden">
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-dark/20">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
    </svg>
  </div>
);


const AboutPage: React.FC = () => {
  return (
    <div className="py-20 md:py-24 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
        {/* Intro Section */}
        <section className="text-center flex flex-col items-center">
          <ProfileImagePlaceholder />
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter mt-8">
            Hi, I’m Abhinav Gupta.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
            I’m an Interaction Designer at Google, where I focus on creating meaningful, clear, and effective products. With over 9 years of experience, I've had the privilege of designing and developing for both enterprise and consumer-grade applications. I thrive on solving complex problems and crafting experiences that are not only functional but also delightful to use.
          </p>
        </section>

        {/* Design Philosophy Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">My Design Philosophy</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-3 p-4">
              <h3 className="text-xl font-semibold">Empathy First</h3>
              <p className="text-brand-dark/80 leading-relaxed">I believe the best solutions come from a deep understanding of user needs and pain points. I start every project by listening and learning.</p>
            </div>
            <div className="space-y-3 p-4">
              <h3 className="text-xl font-semibold">Clarity & Simplicity</h3>
              <p className="text-brand-dark/80 leading-relaxed">My goal is to untangle complexity. I strive to create intuitive interfaces that feel effortless and guide users to their goals without friction.</p>
            </div>
            <div className="space-y-3 p-4">
              <h3 className="text-xl font-semibold">Collaborative Creation</h3>
              <p className="text-brand-dark/80 leading-relaxed">Design is a team sport. I value close collaboration with engineers, product managers, and stakeholders to build holistic and impactful products.</p>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">My Journey</h2>
            <div className="mt-12 max-w-2xl mx-auto border-t border-brand-dark/10">
                <div className="py-6 border-b border-brand-dark/10 flex flex-wrap justify-between items-center gap-2">
                    <span className="font-semibold text-lg">Interaction Designer, Google</span>
                    <span className="text-brand-dark/60 font-mono text-sm">2021 — Present</span>
                </div>
                <div className="py-6 border-b border-brand-dark/10 flex flex-wrap justify-between items-center gap-2">
                    <span className="font-semibold text-lg">Sr. UX Designer, VMWare</span>
                    <span className="text-brand-dark/60 font-mono text-sm">2019 — 2021</span>
                </div>
                <div className="py-6 border-b border-brand-dark/10 flex flex-wrap justify-between items-center gap-2">
                    <span className="font-semibold text-lg">UX Designer, Oracle</span>
                    <span className="text-brand-dark/60 font-mono text-sm">2016 — 2019</span>
                </div>
                <div className="py-6 border-b border-brand-dark/10 flex flex-wrap justify-between items-center gap-2">
                    <span className="font-semibold text-lg">Software Engineer, Wipro</span>
                    <span className="text-brand-dark/60 font-mono text-sm">2013 — 2015</span>
                </div>
            </div>
        </section>
        
        {/* Beyond the Pixels Section */}
        <section className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Beyond the Pixels</h2>
             <p className="mt-6 text-lg md:text-xl text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
                When I'm not designing, you can find me exploring the outdoors, trying to capture the perfect landscape shot with my camera, or getting lost in a good book. I'm also a passionate cook who loves experimenting with new recipes. These hobbies fuel my creativity and provide fresh perspectives that I bring back to my work.
             </p>
        </section>

        {/* Connect Section */}
        <section className="text-center py-10 bg-brand-card rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Connect</h2>
            <p className="mt-4 text-lg text-brand-dark/80 max-w-xl mx-auto px-4">
                I'm always open to discussing new projects, sharing ideas, or just talking about design. Feel free to reach out!
            </p>
            <div className="mt-8">
                 <button className="bg-brand-dark text-white text-base font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                    Get in Touch
                </button>
            </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
