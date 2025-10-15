import React from 'react';
import type { Project, ContentBlock, Metric } from '../data/types';
import AnimateOnScroll from './AnimateOnScroll';

// Helper component to render a single content block
const RenderBlock: React.FC<{ block: ContentBlock, blockIndex: number }> = ({ block, blockIndex }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="mt-4">{block.content}</p>;
    
    case 'image':
      return (
        <figure className="mt-10">
          <div className="rounded-2xl overflow-hidden bg-brand-card">
            <img src={block.src} alt={block.caption || 'Project image'} className="w-full h-auto object-cover" />
          </div>
          {block.caption && <figcaption className="text-center text-sm text-brand-dark/60 mt-4">{block.caption}</figcaption>}
        </figure>
      );

    case 'list':
      const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
      const listStyle = block.style === 'ordered' ? 'list-decimal' : 'list-disc';
      return (
        <ListTag className={`list-inside space-y-3 mt-6 ${listStyle}`}>
          {block.items.map((item, index) => <li key={index}>{item}</li>)}
        </ListTag>
      );
      
    case 'twoColumn':
      return (
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
          <div>
            {block.columns[0].blocks.map((colBlock, index) => <RenderBlock key={index} block={colBlock} blockIndex={index} />)}
          </div>
          <div>
            {block.columns[1].blocks.map((colBlock, index) => <RenderBlock key={index} block={colBlock} blockIndex={index} />)}
          </div>
        </div>
      );

    case 'metricCards':
      return (
        <div className="mt-12 not-prose">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {block.metrics.map((metric: Metric, index: number) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-brand-card p-6 rounded-2xl">
                  <p className="text-3xl md:text-4xl font-bold text-brand-dark">{metric.value}</p>
                  <p className="text-base text-brand-dark/70 mt-2">{metric.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      );
    
    case 'table':
      return (
        <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border border-brand-dark/10 divide-y divide-brand-dark/10">
                <thead className="bg-brand-card">
                    <tr>
                        {block.headers.map((header, i) => (
                            <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-bold text-brand-dark uppercase tracking-wider">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-brand-dark/10">
                    {block.rows.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark/90">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );

    default:
      return null;
  }
};


const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
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
        {project.sections.map((section, sectionIndex) => (
          <AnimateOnScroll key={sectionIndex}>
            <section className="py-12 md:py-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">{section.title}</h2>
              <div className="mt-8 max-w-3xl mx-auto text-lg text-brand-dark/80 leading-relaxed prose prose-lg">
                {section.blocks.map((block, blockIndex) => (
                  <RenderBlock key={blockIndex} block={block} blockIndex={blockIndex}/>
                ))}
              </div>
            </section>
          </AnimateOnScroll>
        ))}
      </div>
    </article>
  );
};

export default ProjectPage;
