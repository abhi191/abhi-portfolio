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
  showMetricsOnCard = true,
}: Project) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`block group rounded-2xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${imageUrl ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}
      style={{
        background: 'var(--bg)',
        boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Part */}
      {imageUrl && (
        <div
          className={`p-4 sm:p-6 lg:p-8 ${imagePosition === 'right' ? 'lg:order-last' : ''}`}
          style={{ borderRight: imagePosition !== 'right' ? '1px solid var(--divider)' : undefined, borderLeft: imagePosition === 'right' ? '1px solid var(--divider)' : undefined }}
        >
          <div
            className="w-full rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto min-h-[180px] sm:min-h-[220px] lg:min-h-0 flex items-center justify-center"
            style={{ background: 'var(--surface)', boxShadow: 'var(--shadow-border)' }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain sm:object-cover"
            />
          </div>
        </div>
      )}

      {/* Content Part */}
      <div className="p-10 sm:p-12 md:p-14 flex flex-col">
        {company && companyLogoUrl && (
          <div className="mb-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ boxShadow: 'var(--shadow-border)', background: 'var(--surface-2)' }}
            >
              <img src={companyLogoUrl} alt={`${company} logo`} className="h-3.5 w-auto" />
              <span className="text-xs font-medium tracking-wide uppercase" style={{ color: 'var(--muted)' }}>{company}</span>
            </div>
          </div>
        )}

        <div>
          <h3
            className="text-2xl md:text-3xl font-semibold"
            style={{ letterSpacing: '-0.04em', color: 'var(--fg)' }}
          >
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {description}
          </p>
        </div>

        <div className="mt-10 flex-grow flex flex-col justify-end">
          {showMetricsOnCard && metrics.length > 0 && (
            <div>
              <h4
                className="text-xs font-medium uppercase tracking-widest mb-5"
                style={{ color: 'var(--subtle)', fontFamily: '"Geist Mono", monospace' }}
              >
                Key metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6">
                {metrics.slice(0, 3).map((metric, index) => (
                  <div key={index}>
                    <p
                      className="text-2xl md:text-3xl font-semibold"
                      style={{ letterSpacing: '-0.04em', color: 'var(--fg)' }}
                    >
                      {metric.value}
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            className={`flex items-center font-medium text-sm transition-colors duration-200 ${showMetricsOnCard ? 'mt-10' : ''}`}
            style={{ color: hovered ? 'var(--fg)' : 'var(--muted)' }}
          >
            <span>View case study</span>
            <ArrowRightIcon className="h-4 w-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <AnimateOnScroll>
          <h2
            className="text-4xl md:text-5xl font-semibold text-center"
            style={{ letterSpacing: '-0.04em', color: 'var(--fg)' }}
          >
            Selected work
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 mb-12 md:mt-16 md:mb-16" style={{ borderTop: '1px solid var(--divider)' }} />

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 80}>
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
      </div>
    </section>
  );
};

export default FeaturedSection;
