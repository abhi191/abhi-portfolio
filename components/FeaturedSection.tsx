
import React from 'react';
import { ArrowRightIcon } from './icons';

interface ProjectLinkProps {
  title: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ title }) => (
  <a href="#" className="group flex items-center justify-between py-8">
    <span className="text-xl font-semibold text-brand-dark/90 group-hover:text-brand-dark transition-colors">{title}</span>
    <ArrowRightIcon className="h-6 w-6 text-brand-dark/70 group-hover:text-brand-dark group-hover:translate-x-1 transition-transform" />
  </a>
);

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="bg-brand-card p-10 md:p-16 rounded-3xl grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">E-Commerce Platform Redesign</h2>
          <p className="text-lg text-brand-dark/80 leading-relaxed">
            A complete overhaul of a mobile e-commerce experience for a leading fashion retailer, focusing on improved navigation and checkout flow.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-dark/60 mb-4">Learn more</h3>
          <div className="divide-y divide-brand-dark/10">
            <ProjectLink title="Managing a Complex Design System" />
            <ProjectLink title="Enabling Faster Checkouts with UX" />
            <ProjectLink title="View Final Figma Prototype" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
