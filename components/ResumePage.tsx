import React from 'react';
import { resumeData } from '../data/resume';
import type { ResumeExperience, ResumeSkillCategory, ResumeEducation } from '../data/resume';

// ─── Constants ────────────────────────────────────────────────────────────────

const COMPANY_COLORS: Record<string, string> = {
  'Google Canada': '#4285F4',
  'Cresta AI':     '#0EA5E9',
  'Google UK':     '#4285F4',
  'VMware':        '#607D8B',
  'SAP':           '#0070F2',
  'Group10':       '#9E9E9E',
};

const EXPERIENCE_TAGS: Record<string, string[]> = {
  'Google Canada': ['0→1 Product', 'SaaS Platform', 'AI/ML', 'Google Cloud', 'Figma'],
  'Cresta AI':     ['Gen AI', 'No-code Builder', 'Contact Center', 'RAG/LLM', 'Voice UI'],
  'Google UK':     ['CI/CD Tools', 'DevTools UX', 'Accessibility', 'Design Systems'],
  'VMware':        ['Infrastructure UX', 'Automation Platform', 'Enterprise'],
  'SAP':           ['Internal Tools', 'Design Systems', 'Global Collaboration'],
  'Group10':       ['HTML/CSS', 'JavaScript', 'Drupal', 'Android'],
};

const SECTIONS = ['experience', 'skills', 'education'] as const;
type SectionId = typeof SECTIONS[number];

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);



const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);


const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);


// ─── Scroll Progress Bar ──────────────────────────────────────────────────────

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px]" style={{ background: 'var(--divider)' }}>
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #0072f5, #7928ca)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
};

// ─── Section Navigator ────────────────────────────────────────────────────────

const SectionNav: React.FC<{ activeSection: SectionId | null; onNav: (id: SectionId) => void }> = ({
  activeSection, onNav,
}) => {
  const labels: Record<SectionId, string> = { experience: 'Experience', skills: 'Skills', education: 'Education' };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3">
      {SECTIONS.map((id) => (
        <button key={id} onClick={() => onNav(id)} className="group flex items-center gap-2 justify-end" aria-label={`Go to ${labels[id]}`}>
          <span
            className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap"
            style={{ color: activeSection === id ? '#0072f5' : 'var(--subtle)', fontFamily: '"Geist Mono", monospace' }}
          >
            {labels[id]}
          </span>
          <span
            className="block rounded-full transition-all duration-200"
            style={{
              width: activeSection === id ? '8px' : '6px',
              height: activeSection === id ? '8px' : '6px',
              background: activeSection === id ? '#0072f5' : 'var(--border-med)',
              boxShadow: activeSection === id ? '0 0 0 2px rgba(0,114,245,0.2)' : 'none',
            }}
          />
        </button>
      ))}
    </div>
  );
};

// ─── Count-Up Hook ────────────────────────────────────────────────────────────

const useCountUp = (target: number, duration = 1400) => {
  const [count, setCount] = React.useState(0);
  const [triggered, setTriggered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setTriggered(true); }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return { count, ref };
};

// ─── Stats Bar ────────────────────────────────────────────────────────────────

const StatItem: React.FC<{ value: number; suffix: string; label: string; delay?: number }> = ({ value, suffix, label, delay = 0 }) => {
  const { count, ref } = useCountUp(value, 1200 + delay);

  return (
    <div ref={ref} className="flex-1 flex flex-col items-center justify-center py-8 px-4 text-center">
      <span className="text-3xl md:text-4xl font-semibold tabular-nums" style={{ letterSpacing: '-0.04em', color: 'var(--fg)' }}>
        {count}{suffix}
      </span>
      <span className="mt-1.5 text-[10px] uppercase tracking-widest font-medium" style={{ color: 'var(--subtle)', fontFamily: '"Geist Mono", monospace' }}>
        {label}
      </span>
    </div>
  );
};

const StatsBar: React.FC = () => (
  <div className="flex flex-wrap divide-x" style={{ borderColor: 'var(--divider)' }}>
    <StatItem value={9}  suffix="+" label="Years Experience" delay={0}   />
    <StatItem value={5}  suffix=""  label="Companies"         delay={100} />
    <StatItem value={2}  suffix="×" label="Google"            delay={200} />
    <StatItem value={50} suffix="%" label="TTV Reduction"     delay={300} />
  </div>
);

// ─── Availability Badge ───────────────────────────────────────────────────────

const AvailabilityBadge: React.FC = () => (
  <span
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
    style={{ background: 'var(--avail-bg)', color: 'var(--avail-text)', boxShadow: '0px 0px 0px 1px var(--avail-border)' }}
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--avail-dot)' }} />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--avail-dot)' }} />
    </span>
    Open to new opportunities
  </span>
);

// ─── Contact Pill ─────────────────────────────────────────────────────────────

const ContactPill: React.FC<{ icon: React.ReactNode; label: string; href?: string }> = ({ icon, label, href }) => {
  const inner = (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200"
      style={{ boxShadow: 'var(--shadow-border)', color: 'var(--muted)', background: 'var(--surface-2)' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--fg)'; el.style.boxShadow = 'var(--shadow-border-med)'; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--muted)'; el.style.boxShadow = 'var(--shadow-border)'; }}
    >
      <span className="w-3.5 h-3.5 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </span>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <>{inner}</>;
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const IdentityHero: React.FC<{ data: typeof resumeData }> = ({ data }) => {
  const { name, headline, summary, contact } = data;
  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');
  const initials = (firstName[0] + (rest[0]?.[0] ?? '')).toUpperCase();

  return (
    <section className="py-20 md:py-28" style={{ borderBottom: '1px solid var(--divider)' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Monogram */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--monogram-bg)', boxShadow: 'var(--shadow-card)' }}
          >
            <span className="font-semibold text-2xl" style={{ letterSpacing: '-0.03em', fontFamily: '"Geist Mono", monospace', color: 'var(--monogram-text)' }}>
              {initials}
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-5"><AvailabilityBadge /></div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold" style={{ letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--fg)' }}>
          {firstName}{' '}
          <span style={{ color: 'var(--muted)', fontWeight: 400 }}>{lastName}</span>
        </h1>

        <p className="mt-4 text-lg font-medium" style={{ color: 'var(--subtle)', fontFamily: '"Geist Mono", monospace', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '13px' }}>
          {headline} · 9+ Years
        </p>

        <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
          {summary}
        </p>

        <div className="mt-8 flex items-center justify-center">
          <a
            href="/Abhinav.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-md transition-opacity duration-200 hover:opacity-80"
            style={{ background: 'var(--fg)', color: 'var(--bg)' }}
          >
            <DownloadIcon className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Experience Card ──────────────────────────────────────────────────────────

const ExperienceCard: React.FC<{ exp: ResumeExperience; index: number }> = ({ exp }) => {
  const [hovered, setHovered] = React.useState(false);
  const color = COMPANY_COLORS[exp.company] ?? 'var(--muted)';
  const tags = EXPERIENCE_TAGS[exp.company] ?? [];

  return (
    <div
      className="relative rounded-xl overflow-hidden transition-all duration-300"
      style={{ boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)', transform: hovered ? 'translateY(-2px)' : 'none', background: 'var(--bg)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-0.5 transition-opacity duration-300" style={{ background: color, opacity: hovered ? 1 : 0.4 }} />

      <div className="p-6 md:p-8 pl-8 md:pl-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: color }} />
            <div>
              <h3 className="text-xl font-semibold" style={{ letterSpacing: '-0.03em', color: 'var(--fg)' }}>{exp.title}</h3>
              <p className="text-sm font-medium mt-0.5" style={{ color }}>{exp.company}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--subtle)' }}>{exp.location}</p>
            </div>
          </div>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium flex-shrink-0 self-start"
            style={{ background: 'var(--surface)', color: 'var(--muted)', fontFamily: '"Geist Mono", monospace', letterSpacing: '0.02em', boxShadow: 'var(--shadow-border)' }}
          >
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2.5">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: color, opacity: 0.6 }} />
              {bullet}
            </li>
          ))}
        </ul>

        {tags.length > 0 && (
          <div className="mt-5 pt-4 flex flex-wrap gap-1.5" style={{ borderTop: '1px solid var(--divider)' }}>
            {tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded" style={{ background: `${color}18`, color, border: `1px solid ${color}25` }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Skills ───────────────────────────────────────────────────────────────────

const SkillsSection: React.FC<{ skills: ResumeSkillCategory[] }> = ({ skills }) => (
  <div className="space-y-8">
    {skills.map((cat, i) => (
      <div key={i}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-medium uppercase tracking-widest" style={{ color: 'var(--subtle)', fontFamily: '"Geist Mono", monospace' }}>
            {cat.category}
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--divider)' }} />
        </div>
        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill, j) => (
            <span
              key={j}
              className="text-xs px-2.5 py-1.5 rounded-md font-medium transition-all duration-150 cursor-default"
              style={{
                background: `var(--skill-${cat.category.toLowerCase()}-bg)`,
                color: `var(--skill-${cat.category.toLowerCase()}-text)`,
                border: `1px solid var(--skill-${cat.category.toLowerCase()}-border)`,
                fontFamily: cat.category !== 'Design' ? '"Geist Mono", monospace' : undefined,
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.05)'; el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.boxShadow = 'none'; }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// ─── Education ────────────────────────────────────────────────────────────────

const EducationCard: React.FC<{ edu: ResumeEducation }> = ({ edu }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="p-5 rounded-xl transition-all duration-200"
      style={{ boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)', background: 'var(--bg)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-sm" style={{ letterSpacing: '-0.01em', color: 'var(--fg)' }}>{edu.degree}</h3>
          <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{edu.institution}</p>
        </div>
        <span className="text-xs px-2 py-0.5 rounded flex-shrink-0" style={{ fontFamily: '"Geist Mono", monospace', background: 'var(--surface)', color: 'var(--subtle)', border: '1px solid var(--divider)' }}>
          {edu.period}
        </span>
      </div>
    </div>
  );
};

// ─── Status Card ──────────────────────────────────────────────────────────────

const StatusCard: React.FC<{ contact: typeof resumeData.contact }> = ({ contact }) => (
  <div className="p-5 rounded-xl" style={{ boxShadow: 'var(--shadow-card)', background: 'var(--surface-2)' }}>
    <div className="flex items-center gap-2 mb-3">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--avail-dot)' }} />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--avail-dot)' }} />
      </span>
      <span className="text-xs font-medium" style={{ color: 'var(--avail-text)' }}>Available</span>
    </div>
    <p className="text-sm font-semibold" style={{ letterSpacing: '-0.01em', color: 'var(--fg)' }}>Currently at Google Canada</p>
    <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Sr. Interaction Designer · Toronto</p>
    <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--divider)' }}>
      <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200" style={{ color: '#0072f5' }}>
        <LinkedInIcon className="w-3 h-3" />
        Connect on LinkedIn
        <ArrowUpRightIcon className="w-3 h-3" />
      </a>
    </div>
  </div>
);

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader: React.FC<{ label: string; title: string }> = ({ label, title }) => (
  <div className="mb-8">
    <span className="text-[10px] uppercase tracking-widest font-medium mb-2 block" style={{ color: 'var(--subtle)', fontFamily: '"Geist Mono", monospace' }}>{label}</span>
    <h2 className="text-2xl md:text-3xl font-semibold" style={{ letterSpacing: '-0.04em', color: 'var(--fg)' }}>{title}</h2>
    <div className="mt-4 h-px" style={{ background: 'var(--divider)' }} />
  </div>
);

// ─── FadeIn wrapper ───────────────────────────────────────────────────────────

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const ResumePage: React.FC = () => {
  const { contact, experience, skills, education } = resumeData;

  const sectionRefs = React.useRef<Record<SectionId, HTMLElement | null>>({ experience: null, skills: null, education: null });
  const [activeSection, setActiveSection] = React.useState<SectionId | null>(null);

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveSection(id); }, { threshold: 0.3 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: SectionId) => sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <ScrollProgress />
      <SectionNav activeSection={activeSection} onNav={scrollTo} />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <IdentityHero data={resumeData} />

        <FadeIn delay={100}>
          <div style={{ borderBottom: '1px solid var(--divider)' }}>
            <StatsBar />
          </div>
        </FadeIn>

        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-20 items-start">
          {/* Experience */}
          <div ref={(el) => { sectionRefs.current.experience = el; }}>
            <FadeIn><SectionHeader label="01 · Career" title="Work Experience" /></FadeIn>
            <div className="space-y-5">
              {experience.map((exp, i) => (
                <FadeIn key={i} delay={i * 60}><ExperienceCard exp={exp} index={i} /></FadeIn>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12 lg:sticky lg:top-24">
            <FadeIn delay={200}><StatusCard contact={contact} /></FadeIn>

            <div ref={(el) => { sectionRefs.current.skills = el; }}>
              <FadeIn delay={250}><SectionHeader label="02 · Expertise" title="Skills" /></FadeIn>
              <FadeIn delay={300}><SkillsSection skills={skills} /></FadeIn>
            </div>

            <div ref={(el) => { sectionRefs.current.education = el; }}>
              <FadeIn delay={350}><SectionHeader label="03 · Academic" title="Education" /></FadeIn>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <FadeIn key={i} delay={400 + i * 60}><EducationCard edu={edu} /></FadeIn>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
