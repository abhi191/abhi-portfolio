import React from 'react';
import { ArrowRightIcon } from './icons';
import { projects } from '../data/projects';
import type { Project } from '../data/types';
import AnimateOnScroll from './AnimateOnScroll';

const ProjectCard: React.FC<Project> = ({
  company,
  companyLogoUrl,
  title,
  description,
  metrics,
  imageUrl,
  imagePosition = 'left',
}) => {
  return (
    <div
      className={`block group rounded-3xl overflow-hidden bg-brand-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out cursor-pointer ${imageUrl ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}
    >
      {/* Image Part - Renders only if imageUrl exists */}
      {imageUrl && (
        <div className={`min-h-[300px] lg:min-h-0 p-8 lg:p-12 ${imagePosition === 'right' ? 'lg:order-last' : ''}`}>
          <div className="relative h-full w-full rounded-2xl overflow-hidden">
            <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Content Part */}
      <div className="p-10 sm:p-12 md:p-16 flex flex-col">
        {company && companyLogoUrl && (
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70">
              <img src={companyLogoUrl} alt={`${company} logo`} className="h-4 w-auto text-brand-dark/80" />
              <span className="text-xs font-semibold text-brand-dark/80 tracking-wide uppercase">{company}</span>
            </div>
          </div>
        )}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-dark">{title}</h3>
          <p className="mt-6 text-lg text-brand-dark/80 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-10 flex-grow flex flex-col justify-end">
          <div className="">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-dark/60 mb-6">Key Metrics</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
              {metrics.slice(0, 3).map((metric, index) => (
                <div key={index}>
                  <p className="text-2xl md:text-3xl font-bold text-brand-dark">{metric.value}</p>
                  <p className="text-sm text-brand-dark/70 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex items-center text-brand-dark font-semibold group-hover:text-brand-accent transition-colors duration-300">
            <span>View Case Study</span>
            <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <AnimateOnScroll>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Selected Work</h2>
      </AnimateOnScroll>
      <div className="mt-16 md:mt-20 space-y-12 md:space-y-16">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={index * 100}>
            <div
              onClick={() => (window.location.hash = `#/projects/${project.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.hash = `#/projects/${project.slug}`;
                }
              }}
              aria-label={`View case study for ${project.title}`}
            >
              <ProjectCard {...project} />
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;