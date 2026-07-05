import React from 'react';
import type { Project, ContentBlock, Metric } from '../data/types';
import AnimateOnScroll from './AnimateOnScroll';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, UpArrowIcon, LeftArrowIcon, InformationCircleIcon } from './icons';

const getEmbedUrl = (url: string): string => {
  // YouTube
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu.be\/)([a-zA-Z0-9_-]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch && youtubeMatch[1]) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo
  const vimeoRegex = /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:video\/)?(\d+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch && vimeoMatch[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  // Return original url as fallback, assuming it's already an embed link
  return url;
};

const parseAndRenderContent = (content: string) => {
  if (!content) return null;

  // Process the content in steps
  const processText = (text: string) => {
    // Step 1: Process links first
    let processedText = text;
    const links: Array<{ text: string; url: string }> = [];

    // Find all links and store them
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(text)) !== null) {
      links.push({
        text: linkMatch[1],
        url: linkMatch[2]
      });
    }

    // Step 2: Split content by links and other formatting
    const parts = text.split(/(\[.*?\]\(.*?\)|==.*?==|\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (!part) return null;

      // Handle links
      if (part.match(/^\[(.*?)\]\((.*?)\)$/)) {
        const [_, linkText, url] = part.match(/^\[(.*?)\]\((.*?)\)$/) || [];
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-accent hover:underline decoration-1 underline-offset-2"
          >
            {linkText}
          </a>
        );
      }

      // Handle highlights
      const highlightMatch = part.match(/^==(?:([a-zA-Z0-9_-]+):)?(.*?)==$/);
      if (highlightMatch) {
        const color = highlightMatch[1] || 'yellow';
        const text = highlightMatch[2];
        const bgClass = `bg-highlight-${color}-bg`;
        const textClass = `text-highlight-${color}-text`;
        return (
          <mark key={index} className={`px-1 py-0.5 rounded-md ${bgClass} ${textClass}`}>
            {text}
          </mark>
        );
      }

      // Handle bold text
      const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
      if (boldMatch) {
        return <strong key={index}>{boldMatch[1]}</strong>;
      }

      // Return regular text
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  // Process the content and return the result
  return <>{processText(content)}</>;
};


// Helper component to render a single content block
const RenderBlock: React.FC<{
  block: ContentBlock;
  onImageClick: (images: { src: string; caption?: string }[], startIndex: number) => void;
}> = ({ block, onImageClick }) => {
  switch (block.type) {
    case 'heading': {
      const Tag = `h${block.level}` as React.ElementType;
      const colorClass = block.color ? `text-highlight-${block.color}-text` : 'text-brand-dark';
      let styles = '';
      switch (block.level) {
        case 2:
          styles = `text-project-h2 font-bold ${colorClass} mt-12 mb-4`;
          break;
        case 3:
          styles = `text-project-h3 font-bold ${colorClass} mt-8 mb-3`;
          break;
        case 4:
          styles = `text-project-h4 font-bold ${colorClass} mt-6 mb-2`;
          break;
        default:
          styles = `text-xl font-bold ${colorClass} mt-6 mb-2`;
      }
      return <Tag className={styles}>{parseAndRenderContent(block.content)}</Tag>;
    }

    case 'paragraph':
      return <p className="my-5">{parseAndRenderContent(block.content)}</p>;

    case 'image':
      return (
        <figure className="mt-10">
          <div className={`rounded-2xl overflow-hidden bg-brand-card ${block.isExpandable ? 'cursor-pointer' : ''}`}>
            <img
              src={block.src}
              alt={block.caption || 'Project image'}
              className={`w-full h-auto object-cover ${block.isExpandable ? 'transition-transform duration-300 hover:scale-105' : ''}`}
              onClick={block.isExpandable ? () => onImageClick([{ src: block.src, caption: block.caption }], 0) : undefined}
            />
          </div>
          {block.caption && <figcaption className="text-center text-sm text-brand-dark/60 mt-4">{parseAndRenderContent(block.caption)}</figcaption>}
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
              onClick={block.isExpandable ? () => onImageClick([{ src: block.src, caption: block.caption }], 0) : undefined}
            />
          </div>
          {block.caption && <figcaption className="text-center text-sm text-brand-dark/60 mt-4 max-w-3xl mx-auto px-6">{parseAndRenderContent(block.caption)}</figcaption>}
        </figure>
      );

    case 'carousel': {
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
        // Bounding box with background, padding, and border
        <div className="my-12 md:my-16 bg-brand-card/50 border border-brand-dark/10 rounded-3xl p-4 sm:p-6">
          <div className="relative group">
            {/* Image Container */}
            <div className="aspect-w-16 aspect-h-9 bg-brand-dark/5 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={currentSlide.src}
                alt={currentSlide.caption || `Carousel image ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                onClick={() => onImageClick(block.slides, currentIndex)}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 hover:bg-white text-brand-dark p-2 rounded-full shadow-md transition-all duration-300 backdrop-blur-sm hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 hover:bg-white text-brand-dark p-2 rounded-full shadow-md transition-all duration-300 backdrop-blur-sm hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Centered Pagination Dots and Caption */}
          <div className="mt-4">
            {/* Dots */}
            <div className="flex justify-center items-center space-x-3">
              {block.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ease-in-out ${currentIndex === index ? 'w-6 h-2 bg-brand-dark' : 'w-2 h-2 bg-brand-dark/20 hover:bg-brand-dark/40'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Caption - give it a fixed height to prevent layout shift */}
            <p className="mt-3 text-center text-sm text-brand-dark/60 h-5">
              {currentSlide.caption ? parseAndRenderContent(currentSlide.caption) : ''}
            </p>
          </div>
        </div>
      );
    }

    case 'list':
      const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
      const listStyle = block.style === 'ordered' ? 'list-decimal' : 'list-disc';
      return (
        <ListTag className={`list-inside space-y-3 my-5 marker:text-brand-dark/40 ${listStyle}`}>
          {block.items.map((item, index) => (
            <li key={index} className="pl-2">
              {parseAndRenderContent(item)}
            </li>
          ))}
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

    case 'threeColumn':
      return (
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-8">
          <div>
            {block.columns[0].blocks.map((colBlock, index) => <RenderBlock key={index} block={colBlock} onImageClick={onImageClick} />)}
          </div>
          <div>
            {block.columns[1].blocks.map((colBlock, index) => <RenderBlock key={index} block={colBlock} onImageClick={onImageClick} />)}
          </div>
          <div>
            {block.columns[2].blocks.map((colBlock, index) => <RenderBlock key={index} block={colBlock} onImageClick={onImageClick} />)}
          </div>
        </div>
      );

    case 'metricCards': {
      // Ink & Signal: one neutral card treatment, matching the editorial hero
      // metrics row. The per-metric `color` field is intentionally a visual
      // no-op here — the single-accent system routes emphasis through the accent
      // token, not per-card hues.
      const getGridCols = (count: number) => {
        if (count === 1) return 'grid-cols-1';
        if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
        if (count === 3) return 'grid-cols-1 sm:grid-cols-3';
        if (count === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      };

      return (
        <div className="my-12 not-prose">
          <div className={`grid ${getGridCols(block.metrics.length)} gap-y-10 sm:divide-x divide-brand-dark/10`}>
            {block.metrics.map((metric: Metric, index: number) => (
              <AnimateOnScroll key={index} delay={index * 100} className="sm:px-12 sm:first:pl-0 h-full">
                <div className="flex flex-col">
                  <p className="text-4xl md:text-5xl font-black text-brand-accent tracking-tighter tabular-nums leading-none">{metric.value}</p>
                  <p className="text-xs font-medium uppercase tracking-widest mt-4 text-brand-dark/50 leading-relaxed">{metric.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      );
    }

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

    case 'quote': {
      // Editorial pull-quote: oversized accent quote-mark, large ink text, no
      // tinted box. The `color` field is a visual no-op (single-accent system).
      return (
        <figure className="my-14 not-prose relative pl-10 md:pl-14">
          <span
            aria-hidden="true"
            className="absolute left-0 -top-4 font-black text-brand-accent leading-none select-none text-7xl md:text-8xl"
          >
            &ldquo;
          </span>
          <blockquote>
            <p className="text-2xl md:text-3xl italic text-brand-dark font-medium leading-snug tracking-tight [text-wrap:balance]">
              {parseAndRenderContent(block.text)}
            </p>
            {block.author && (
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-accent" />
                <cite className="text-sm not-italic font-medium uppercase tracking-widest text-brand-dark/50">{block.author}</cite>
              </figcaption>
            )}
          </blockquote>
        </figure>
      );
    }

    case 'video':
      const embedUrl = getEmbedUrl(block.url);
      return (
        <figure className="my-10">
          <div className="aspect-video bg-brand-dark/10 rounded-2xl overflow-hidden">
            <iframe
              src={embedUrl}
              title={block.caption || 'Embedded video'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          {block.caption && <figcaption className="text-center text-sm text-brand-dark/60 mt-4">{block.caption}</figcaption>}
        </figure>
      );

    case 'callToAction':
      // The one place a solid accent fill earns its keep. Left-aligned,
      // asymmetric; text uses --accent-contrast so it stays legible on any hue.
      return (
        <div className="my-12 md:my-16">
          <div
            className="rounded-2xl p-8 md:p-14 bg-brand-accent flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            style={{ color: 'var(--accent-contrast)' }}
          >
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight [text-wrap:balance]">{block.title}</h3>
              <p className="mt-4 text-base md:text-lg opacity-80 leading-relaxed">{block.text}</p>
            </div>
            <a
              href={block.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base font-semibold py-3 px-7 rounded-lg bg-brand-dark text-white hover:opacity-90 transition-all active:scale-[0.98] whitespace-nowrap self-start md:self-auto"
            >
              {block.buttonText}
              <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      );

    case 'messageBar': {
      // Editorial callout: tinted accent wash, accent left-rule + icon, with a
      // mono label. `color` field is a no-op (single-accent system).
      return (
        <div className="my-8 not-prose py-4 pl-5 pr-4 border-l-2 rounded-r-lg bg-brand-accent/5 border-brand-accent">
          <div className="flex gap-3">
            <InformationCircleIcon className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-widest text-brand-accent m-0">
                {block.title || 'Note'}
              </h3>
              <div className="text-base leading-relaxed text-brand-dark/80 mt-2">
                {parseAndRenderContent(block.text)}
              </div>
            </div>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
};


// Scroll to Top — minimal translucent chip with a slim accent arc that
// completes around the edge as the page is scrolled. The arc's dashoffset is
// driven directly via a ref inside a rAF loop (no React re-render, no CSS
// transition) so it tracks the scroll position frame-for-frame.
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const arcRef = React.useRef<SVGCircleElement>(null);
  const tickingRef = React.useRef(false);

  const radius = 19;
  const circumference = 2 * Math.PI * radius;

  React.useEffect(() => {
    const update = () => {
      tickingRef.current = false;
      const scrolled = window.scrollY;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? Math.min(scrolled / totalScrollable, 1) : 0;
      setIsVisible(scrolled > 300);
      if (arcRef.current) {
        arcRef.current.style.strokeDashoffset = String(circumference * (1 - progress));
      }
    };
    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-brand-background/60 backdrop-blur-sm text-brand-dark/50 flex items-center justify-center transition-all duration-300 ease-out hover:text-brand-accent active:scale-95 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      aria-label="Go to top"
    >
      {/* Progress arc on the edge */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={radius} strokeWidth="1.5" className="stroke-brand-dark/10" fill="none" />
        <circle
          ref={arcRef}
          cx="22"
          cy="22"
          r={radius}
          strokeWidth="1.5"
          className="stroke-brand-accent"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
        />
      </svg>
      <UpArrowIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};


// ... (helper components up to ScrollToTopButton remain the same, I will target the ProjectPage component specifically)

const TableOfContents: React.FC<{
  sections: { id: string; title: string }[];
  activeSection: string;
}> = ({ sections, activeSection }) => {
  if (sections.length === 0) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="space-y-1">
      <p className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest mb-4 pl-4">Contents</p>
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`text-left w-full flex items-baseline gap-3 py-2 px-4 text-sm font-medium transition-colors duration-300 border-l-2 ${activeSection === section.id
            ? 'border-brand-accent text-brand-accent'
            : 'border-transparent text-brand-dark/60 hover:text-brand-dark hover:border-brand-dark/20'
            }`}
        >
          <span className="font-mono text-xs tabular-nums opacity-60">{String(index + 1).padStart(2, '0')}</span>
          <span>{section.title}</span>
        </button>
      ))}
    </nav>
  );
};

const ProjectPageRedesign: React.FC<{ project: Project }> = ({ project }) => {
  const [lightbox, setLightbox] = React.useState<{
    images: { src: string; caption?: string }[];
    currentIndex: number;
  } | null>(null);

  const [activeSection, setActiveSection] = React.useState<string>('');

  // Scroll Progress Logic
  const [scrollProgress, setScrollProgress] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Generate TOC IDs
  const sectionsWithIds = React.useMemo(() => {
    return project.sections.map((section, index) => ({
      ...section,
      id: `section-${index}` // Simple stable ID
    }));
  }, [project.sections]);

  // Intersection Observer for Active Section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sectionsWithIds.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionsWithIds]);


  const handleImageClick = (images: { src: string; caption?: string }[], startIndex: number) => {
    setLightbox({ images, currentIndex: startIndex });
  };

  const handleCloseLightbox = () => {
    setLightbox(null);
  };

  const handleLightboxNext = () => {
    if (!lightbox) return;
    const newIndex = (lightbox.currentIndex + 1) % lightbox.images.length;
    setLightbox({ ...lightbox, currentIndex: newIndex });
  };

  const handleLightboxPrev = () => {
    if (!lightbox) return;
    const newIndex = (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length;
    setLightbox({ ...lightbox, currentIndex: newIndex });
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightbox) return;
      if (event.key === 'ArrowRight') handleLightboxNext();
      else if (event.key === 'ArrowLeft') handleLightboxPrev();
      else if (event.key === 'Escape') handleCloseLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  return (
    <article className="relative min-h-screen bg-brand-background">
      {/* Subtle accent glow behind the hero — adds depth so the top of the
          page doesn't read as a flat void. Clipped by its own fixed overlay so
          it never introduces overflow (which would break the sticky TOC). */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div
          className="absolute -top-40 -left-40 w-[46rem] h-[46rem] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: 'radial-gradient(circle, rgb(var(--accent-rgb)) 0%, transparent 70%)' }}
        />
      </div>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-brand-dark/5 z-40">
        <div
          className="h-full bg-brand-accent transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 pt-32 pb-24">

        {/* EDITORIAL HERO (text) */}
        <header className="mb-24">
          <AnimateOnScroll>
            {/* Breadcrumb / Back */}
            <button
              onClick={() => (window.location.hash = '#/')}
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-dark/40 hover:text-brand-accent mb-10 transition-colors"
            >
              <LeftArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </button>

            <div className="max-w-4xl">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-brand-dark mb-8 [text-wrap:balance] ${project.titleColor ? `text-highlight-${project.titleColor}-text` : ''}`}>
                {project.title}
              </h1>

              <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed max-w-2xl">
                {project.overview}
              </p>

              {/* Metadata — labeled key/value pairs in mono, hairline-divided. */}
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                {project.details.map((detail, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-brand-dark/40">{detail.label}</span>
                    <span className="text-sm font-medium text-brand-dark/80 mt-1">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Abstract — full-width editorial band. */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-wrap border-y border-brand-dark/10 divide-x divide-brand-dark/10 mt-14">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col py-6 pr-8 md:pr-14 pl-8 first:pl-0">
                    <span className="text-4xl md:text-5xl font-black text-brand-accent tracking-tighter tabular-nums leading-none">{metric.value}</span>
                    <span className="text-xs font-medium text-brand-dark/50 uppercase tracking-widest mt-3">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
          </AnimateOnScroll>
        </header>


        {/* MAIN LAYOUT: SIDEBAR + CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

          {/* Sidebar (TOC) */}
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-32">
              <TableOfContents sections={sectionsWithIds} activeSection={activeSection} />
            </div>
          </aside>

          {/* Content Sections */}
          <div className="col-span-1 lg:col-span-9">
            <div className="space-y-32">
              {sectionsWithIds.map((section, sectionIndex) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <AnimateOnScroll>
                    {/* Numbered spine: accent mono index above the title —
                        structural, vibrant, easy to follow. */}
                    <div className="flex items-baseline gap-4 mb-8 border-t border-brand-dark/10 pt-6">
                      <span className="font-mono text-sm font-medium text-brand-accent tabular-nums tracking-widest">
                        {String(sectionIndex + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight [text-wrap:balance]">
                        {section.title}
                      </h2>
                    </div>

                    <div className="prose prose-lg prose-brand max-w-none">
                      {section.blocks.map((block, blockIndex) => {
                        const isFullWidth = block.type === 'fullWidthImage' || block.type === 'carousel' || block.type === 'callToAction';
                        // If it is full width, we might want to break out of the prose container or just render full
                        return (
                          <div key={blockIndex} className={isFullWidth ? '-mx-6 md:-mx-12 my-12' : ''}>
                            <RenderBlock block={block} onImageClick={handleImageClick} />
                          </div>
                        )
                      })}
                    </div>
                  </AnimateOnScroll>
                </section>
              ))}
            </div>
          </div>
        </div>

        {/* End-of-page nav — return to the work index. */}
        <div className="mt-32 pt-12 border-t border-brand-dark/10">
          <button
            onClick={() => (window.location.hash = '#/')}
            className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-black tracking-tight text-brand-dark hover:text-brand-accent transition-colors"
          >
            <LeftArrowIcon className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
            All projects
          </button>
        </div>
      </div>

      {/* Lightbox (Same as before) */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[51] p-4 text-white/50 hover:text-white transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-10 w-10" />
            </button>
          )}

          <div className="relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.images[lightbox.currentIndex].src}
              alt={lightbox.images[lightbox.currentIndex].caption || 'Expanded view'}
              className="w-full h-full object-contain shadow-2xl"
            />
            {lightbox.images[lightbox.currentIndex].caption && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-white/90 text-sm font-medium">
                {lightbox.images[lightbox.currentIndex].caption}
              </div>
            )}
          </div>

          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[51] p-4 text-white/50 hover:text-white transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-10 w-10" />
            </button>
          )}

          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-[51] p-2 text-white/50 hover:text-white transition-colors"
          >
            <CloseIcon className="h-8 w-8" />
          </button>
        </div>
      )}

      <ScrollToTopButton />
    </article>
  );
};

export default ProjectPageRedesign;