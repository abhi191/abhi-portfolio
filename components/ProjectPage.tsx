import React from 'react';
import type { Project, ContentBlock, Metric } from '../data/types';
import AnimateOnScroll from './AnimateOnScroll';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './icons';

// Helper component to render a single content block
const RenderBlock: React.FC<{ 
  block: ContentBlock;
  onImageClick: (image: { src: string; caption?: string }) => void;
}> = ({ block, onImageClick }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="mt-4">{block.content}</p>;
    
    case 'image':
      return (
        <figure className="mt-10">
          <div className={`rounded-2xl overflow-hidden bg-brand-card ${block.isExpandable ? 'cursor-pointer' : ''}`}>
            <img 
              src={block.src} 
              alt={block.caption || 'Project image'} 
              className={`w-full h-auto object-cover ${block.isExpandable ? 'transition-transform duration-300 hover:scale-105' : ''}`}
              onClick={block.isExpandable ? () => onImageClick({ src: block.src, caption: block.caption }) : undefined}
            />
          </div>
          {block.caption && <figcaption className="text-center text-sm text-brand-dark/60 mt-4">{block.caption}</figcaption>}
        </figure>
      );
    
    case 'fullWidthImage':
      return (
        <figure className={`my-12 md:my-16 ${block.isExpandable ? 'cursor-pointer' : ''}`}>
          <div className="overflow-hidden">
             <img 
                src={block.src} 
                alt={block.caption || 'Project full-width image'} 
                className={`w-full h-auto object-cover ${block.isExpandable ? 'transition-transform duration-300 hover:scale-105' : ''}`}
                onClick={block.isExpandable ? () => onImageClick({ src: block.src, caption: block.caption }) : undefined}
              />
          </div>
          {block.caption && <figcaption className="text-center text-sm text-brand-dark/60 mt-4 max-w-3xl mx-auto px-6">{block.caption}</figcaption>}
        </figure>
      );
    
    case 'carousel':
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [currentIndex, setCurrentIndex] = React.useState(0);
      const totalSlides = block.slides.length;

      const goToPrevious = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? totalSlides - 1 : currentIndex - 1;
          setCurrentIndex(newIndex);
      };

      const goToNext = () => {
          const isLastSlide = currentIndex === totalSlides - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
      };

      const currentSlide = block.slides[currentIndex];

      return (
        <div className="my-12 md:my-16 relative">
          <div className="aspect-w-16 aspect-h-9 bg-brand-card rounded-2xl overflow-hidden">
            <img 
              src={currentSlide.src} 
              alt={currentSlide.caption || `Carousel image ${currentIndex + 1}`} 
              className="w-full h-full object-cover cursor-pointer transition-transform duration-500 ease-in-out"
              onClick={() => onImageClick(currentSlide)}
            />
          </div>

          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 hover:bg-white text-brand-dark p-2 rounded-full shadow-md transition-colors backdrop-blur-sm" aria-label="Previous image">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 hover:bg-white text-brand-dark p-2 rounded-full shadow-md transition-colors backdrop-blur-sm" aria-label="Next image">
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Caption & Dots */}
          <div className="mt-4 flex items-center justify-between max-w-3xl mx-auto px-2">
            <p className="text-sm text-brand-dark/60 flex-1 pr-4">{currentSlide.caption || ''}</p>
            <div className="flex space-x-2">
              {block.slides.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-dark' : 'bg-brand-dark/20 hover:bg-brand-dark/40'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
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
            {block.columns[0].blocks.map((colBlock, index) => <RenderBlock key={index} block={colBlock} onImageClick={onImageClick} />)}
          </div>
          <div>
            {block.columns[1].blocks.map((colBlock, index) => <RenderBlock key={index} block={colBlock} onImageClick={onImageClick} />)}
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
  const [lightbox, setLightbox] = React.useState<{src: string, caption?: string} | null>(null);

  const handleImageClick = (image: {src: string, caption?: string}) => {
    setLightbox(image);
  };
  
  const handleCloseLightbox = () => {
    setLightbox(null);
  };

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
              <div className="mt-8">
                {section.blocks.map((block, blockIndex) => {
                  const isFullWidth = block.type === 'fullWidthImage' || block.type === 'carousel';
                  if (isFullWidth) {
                    return <RenderBlock key={blockIndex} block={block} onImageClick={handleImageClick} />;
                  }
                  return (
                    <div key={blockIndex} className="max-w-3xl mx-auto text-lg text-brand-dark/80 leading-relaxed prose prose-lg">
                      <RenderBlock block={block} onImageClick={handleImageClick}/>
                    </div>
                  );
                })}
              </div>
            </section>
          </AnimateOnScroll>
        ))}
      </div>
      
      {/* Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.src} 
              alt={lightbox.caption || 'Expanded view'}
              className="w-full h-full object-contain"
            />
            {lightbox.caption && (
              <p className="text-center text-white/80 mt-2 text-sm">{lightbox.caption}</p>
            )}
          </div>
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close image view"
          >
            <CloseIcon className="h-8 w-8" />
          </button>
        </div>
      )}
    </article>
  );
};

export default ProjectPage;