
import React from 'react';
import { Project } from '../data/projects';
import AnimateOnScroll from './AnimateOnScroll';

interface ProjectPageProps {
  project: Project;
}

const Section: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
  <section className="py-10 md:py-16">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">{title}</h2>
    <div className="mt-12 max-w-3xl mx-auto text-lg text-brand-dark/80 leading-relaxed">
      {children}
    </div>
  </section>
);


const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <article className="py-20 md:py-24">
      {/* Project Hero */}
      <AnimateOnScroll>
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
            {project.title}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-brand-dark/80">
            {project.overview}
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-wider text-brand-dark/60">
              <div>
                  <span className="font-mono">Role:</span> {project.role}
              </div>
              <div>
                  <span className="font-mono">Timeline:</span> {project.timeline}
              </div>
          </div>
        </header>
      </AnimateOnScroll>

      {/* Hero Image */}
      <AnimateOnScroll delay={200}>
        <div className="mt-16 md:mt-20 rounded-3xl overflow-hidden aspect-w-16 aspect-h-9 bg-brand-card">
          <img src={project.heroImage} alt={`${project.title} hero image`} className="w-full h-full object-cover" />
        </div>
      </AnimateOnScroll>

      <div className="divide-y divide-brand-dark/10">
        {/* Problem Statement */}
        <AnimateOnScroll>
          <Section title={project.problemStatement.title}>
              {project.problemStatement.content.map((p, i) => <p key={i} className={i > 0 ? 'mt-4' : ''}>{p}</p>)}
          </Section>
        </AnimateOnScroll>

        {/* Goals */}
        <AnimateOnScroll>
          <Section title={project.goals.title}>
              <ul className="list-disc list-inside space-y-3">
                  {project.goals.items.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))}
              </ul>
          </Section>
        </AnimateOnScroll>
        
        {/* Design Process */}
        <AnimateOnScroll>
          <Section title={project.process.title}>
              <p>{project.process.description}</p>
              <div className="mt-10 rounded-2xl overflow-hidden">
                  <img src={project.process.imageUrl} alt="Design process" className="w-full h-auto object-cover" />
              </div>
          </Section>
        </AnimateOnScroll>

        {/* Challenges */}
        <AnimateOnScroll>
          <Section title={project.challenges.title}>
              <p>{project.challenges.content}</p>
          </Section>
        </AnimateOnScroll>

        {/* The Solution */}
        <AnimateOnScroll>
          <Section title={project.solution.title}>
              <p>{project.solution.content}</p>
              <div className="mt-10 rounded-2xl overflow-hidden">
                  <img src={project.solution.imageUrl} alt="Final design solution" className="w-full h-auto object-cover" />
              </div>
          </Section>
        </AnimateOnScroll>

        {/* Results & Impact */}
        <AnimateOnScroll>
          <section className="py-16 md:py-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">{project.results.title}</h2>
              <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                  {project.metrics.map((metric, index) => (
                      <AnimateOnScroll key={index} delay={index * 150}>
                        <div className="bg-brand-card p-8 rounded-2xl">
                            <p className="text-4xl md:text-5xl font-bold text-brand-dark">{metric.value}</p>
                            <p className="text-base text-brand-dark/70 mt-3">{metric.label}</p>
                        </div>
                      </AnimateOnScroll>
                  ))}
              </div>
          </section>
        </AnimateOnScroll>

        {/* Key Learnings */}
        <AnimateOnScroll>
          <Section title={project.learnings.title}>
              <ul className="list-decimal list-inside space-y-4">
                  {project.learnings.items.map((item, index) => (
                      <li key={index}><span className="font-semibold"></span> {item}</li>
                  ))}
              </ul>
          </Section>
        </AnimateOnScroll>
      </div>
    </article>
  );
};

export default ProjectPage;