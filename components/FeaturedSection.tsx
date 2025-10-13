import React from 'react';
import { ArrowRightIcon } from './icons';

interface Metric {
  value: string;
  label: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  metrics: Metric[];
  link: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, metrics, link, imageUrl, imagePosition = 'left' }) => {
  return (
    <a href={link} className={`block group rounded-3xl overflow-hidden bg-brand-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out ${imageUrl ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}>
      {/* Image Part - Renders only if imageUrl exists */}
      {imageUrl && (
        <div className={`relative min-h-[300px] lg:min-h-0 ${imagePosition === 'right' ? 'lg:order-last' : ''}`}>
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      )}

      {/* Content Part */}
      <div className="p-10 sm:p-12 md:p-16 flex flex-col">
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
              {metrics.map((metric, index) => (
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
    </a>
  );
};


// FIX: Explicitly type the projects array to match the ProjectCardProps interface. This ensures that properties like `imagePosition` are correctly typed as `'left' | 'right'` instead of a generic `string`.
const projects: ProjectCardProps[] = [
  {
    title: 'E-commerce Redesign',
    description: 'Complete UX overhaul of a fashion e-commerce platform focusing on streamlined navigation, simplified checkout process, and mobile-first design approach.',
    metrics: [
      { value: '+40%', label: 'Conversion Rate' },
      { value: '-25%', label: 'Cart Abandonment' },
      { value: '+85%', label: 'Mobile Revenue' },
    ],
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop',
    imagePosition: 'left',
  },
  {
    title: 'SaaS Dashboard for Data Analytics',
    description: 'Designed a user-centric dashboard for a B2B SaaS product, enabling users to visualize and interact with complex data sets effortlessly.',
    metrics: [
      { value: '2X', label: 'Faster Task Completion' },
      { value: '9/10', label: 'User Satisfaction Score' },
    ],
    link: '#',
  },
  {
    title: 'Mobile App for Healthcare',
    description: 'Created a mobile application to help patients manage their medical records, appointments, and prescriptions in one secure place.',
    metrics: [
      { value: '50k+', label: 'Active Monthly Users' },
      { value: '4.8 ★', label: 'App Store Rating' },
    ],
    link: '#',
  },
];


const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">Selected Work</h2>
      <div className="mt-16 md:mt-20 space-y-12 md:space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;