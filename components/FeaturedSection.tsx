import React from 'react';
import { ArrowRightIcon } from './icons';
import { projects } from '../data/projects';
import type { Project } from '../data/types';

interface WorkCardProps {
  project: Project;
}

const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  const {
    company, companyLogoUrl, title, description, metrics,
    imageUrl, imagePosition = 'left', showMetricsOnCard = true, slug,
  } = project;

  const navigate = () => (window.location.hash = `#/projects/${slug}`);

  return (
    <div
      onClick={navigate}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate();
        }
      }}
      aria-label={`View case study for ${title}`}
      className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border border-brand-dark/10 transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(22,23,26,0.18)] ${imageUrl ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}
    >
      {imageUrl && (
        <div className={`bg-brand-accent/10 p-6 lg:p-10 flex items-center justify-center transition-colors duration-300 ${imagePosition === 'right' ? 'lg:order-last' : ''}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full max-h-[400px] object-contain rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="p-8 sm:p-10 lg:p-14 flex flex-col">
        {company && companyLogoUrl && (
          <div className="flex items-center gap-2.5 mb-8">
            <img src={companyLogoUrl} alt={`${company} logo`} className="h-4 w-auto" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-dark/60">{company}</span>
          </div>
        )}

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-brand-dark">
          {title}
        </h3>
        <p className="mt-5 text-base md:text-lg text-brand-dark/70 leading-relaxed">
          {description}
        </p>

        <div className="mt-10 flex-grow flex flex-col justify-end">
          {showMetricsOnCard && metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-x-6 gap-y-8 border-t border-brand-dark/10 pt-8">
              {metrics.slice(0, 3).map((metric, i) => (
                <div key={i}>
                  <p className="font-mono text-xl md:text-2xl lg:text-3xl font-semibold text-brand-dark">{metric.value}</p>
                  <p className="text-xs md:text-sm text-brand-dark/60 mt-1.5">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className={`accent-hover-text flex items-center font-semibold text-brand-dark transition-colors duration-300 ${showMetricsOnCard ? 'mt-10' : ''}`}>
            <span>View case study</span>
            <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedSection: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-brand-dark">
          Selected work
        </h2>
        {/* Sticky stack: every card is a direct child of this block, so each one
            pins below the header and the next card slides over it. Staggered top
            offsets let the pinned cards peek out above the covering card. */}
        <div className="mt-12 md:mt-16 space-y-12 md:space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="md:sticky"
              style={{ top: `calc(6.5rem + ${index * 14}px)` }}
            >
              <WorkCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
