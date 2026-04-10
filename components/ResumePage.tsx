import React from 'react';
import { resumeData } from '../data/resume';
import type { ResumeExperience, ResumeSkillCategory, ResumeEducation } from '../data/resume';

// ─── Constants ────────────────────────────────────────────────────────────────

const CARD_SHADOW = '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.04), inset 0px 0px 0px 1px #fafafa';
const CARD_SHADOW_HOVER = '0px 0px 0px 1px rgba(0,0,0,0.12), 0px 8px 24px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.04)';

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

// ─── Icons ────────────────────────────────────────────────────────────────────

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
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
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] bg-transparent">
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

const SECTIONS = ['experience', 'skills', 'education'] as const;
type SectionId = typeof SECTIONS[number];

const SectionNav: React.FC<{ activeSection: SectionId | null; onNav: (id: SectionId) => void }> = ({
  activeSection,
  onNav,
}) => {
  const labels: Record<SectionId, string> = {
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3">
      {SECTIONS.map((id) => (
        <button
          key={id}
          onClick={() => onNav(id)}
          className="group flex items-center gap-2 justify-end"
          aria-label={`Go to ${labels[id]}`}
        >
          <span
            className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap"
            style={{
              color: activeSection === id ? '#0072f5' : '#808080',
              fontFamily: '"Geist Mono", monospace',
            }}
          >
            {labels[id]}
          </span>
          <span
            className="block rounded-full transition-all duration-200"
            style={{
              width: activeSection === id ? '8px' : '6px',
              height: activeSection === id ? '8px' : '6px',
              background: activeSection === id ? '#0072f5' : 'rgba(0,0,0,0.2)',
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
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return { count, ref };
};

// ─── Stats Bar ────────────────────────────────────────────────────────────────

const StatItem: React.FC<{ value: number; suffix: string; label: string; delay?: number }> = ({
  value, suffix, label, delay = 0,
}) => {
  const { count, ref } = useCountUp(value, 1200 + delay);

  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col items-center justify-center py-8 px-4 text-center"
    >
      <span
        className="text-3xl md:text-4xl font-semibold text-brand-dark tabular-nums"
        style={{ letterSpacing: '-0.04em' }}
      >
        {count}{suffix}
      </span>
      <span
        className="mt-1.5 text-[10px] uppercase tracking-widest font-medium"
        style={{ color: '#808080', fontFamily: '"Geist Mono", monospace' }}
      >
        {label}
      </span>
    </div>
  );
};

const StatsBar: React.FC = () => (
  <div
    className="flex flex-wrap divide-x"
    style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)', divideColor: 'rgba(0,0,0,0.08)' }}
  >
    <StatItem value={9}   suffix="+"  label="Years Experience"  delay={0}   />
    <StatItem value={5}   suffix=""   label="Companies"          delay={100} />
    <StatItem value={2}   suffix="×"  label="Google"             delay={200} />
    <StatItem value={50}  suffix="%"  label="TTV Reduction"      delay={300} />
  </div>
);

// ─── Availability Badge ───────────────────────────────────────────────────────

const AvailabilityBadge: React.FC = () => (
  <span
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
    style={{
      background: '#f0fdf4',
      color: '#166534',
      boxShadow: '0px 0px 0px 1px rgba(22,101,52,0.15)',
    }}
  >
    <span className="relative flex h-2 w-2">
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{ background: '#22c55e' }}
      />
      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
    </span>
    Open to new opportunities
  </span>
);

// ─── Contact Pill ─────────────────────────────────────────────────────────────

const ContactPill: React.FC<{ icon: React.ReactNode; label: string; href?: string }> = ({
  icon, label, href,
}) => {
  const inner = (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 group"
      style={{
        boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)',
        color: '#4d4d4d',
        background: '#fafafa',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.color = '#171717';
        (e.currentTarget as HTMLElement).style.boxShadow = '0px 0px 0px 1px rgba(0,0,0,0.16)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.color = '#4d4d4d';
        (e.currentTarget as HTMLElement).style.boxShadow = '0px 0px 0px 1px rgba(0,0,0,0.08)';
      }}
    >
      <span className="w-3.5 h-3.5 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </span>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  }
  return <>{inner}</>;
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const IdentityHero: React.FC<{ data: typeof resumeData }> = ({ data }) => {
  const { name, headline, summary, contact } = data;
  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');
  const initials = (firstName[0] + (rest[0]?.[0] ?? '')).toUpperCase();

  return (
    <section className="py-20 md:py-28 border-b" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Monogram */}
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: '#171717',
              boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08), 0px 8px 24px rgba(0,0,0,0.12)',
            }}
          >
            <span
              className="text-white font-semibold text-2xl"
              style={{ letterSpacing: '-0.03em', fontFamily: '"Geist Mono", monospace' }}
            >
              {initials}
            </span>
          </div>
        </div>

        {/* Availability */}
        <div className="flex justify-center mb-5">
          <AvailabilityBadge />
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-semibold text-brand-dark"
          style={{ letterSpacing: '-0.05em', lineHeight: 1 }}
        >
          {firstName}{' '}
          <span style={{ color: '#4d4d4d', fontWeight: 400 }}>{lastName}</span>
        </h1>

        {/* Headline */}
        <p
          className="mt-4 text-lg font-medium"
          style={{
            color: '#808080',
            fontFamily: '"Geist Mono", monospace',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '13px',
          }}
        >
          {headline} · 9+ Years
        </p>

        {/* Summary */}
        <p
          className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#4d4d4d' }}
        >
          {summary}
        </p>

        {/* Contact Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <ContactPill
            icon={<MailIcon className="w-3.5 h-3.5" />}
            label={contact.email}
            href={`mailto:${contact.email}`}
          />
          <ContactPill
            icon={<PhoneIcon className="w-3.5 h-3.5" />}
            label={contact.phone}
          />
          <ContactPill
            icon={<LinkedInIcon className="w-3.5 h-3.5" />}
            label="LinkedIn"
            href={`https://${contact.linkedin}`}
          />
          <ContactPill
            icon={<GlobeIcon className="w-3.5 h-3.5" />}
            label={contact.website}
            href={`https://${contact.website}`}
          />
        </div>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="/Abhinav.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#2a2a2a] transition-colors duration-200"
          >
            <DownloadIcon className="w-4 h-4" />
            Download PDF
          </a>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-md transition-all duration-200"
            style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.10)', color: '#4d4d4d' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = '#171717';
              (e.currentTarget as HTMLElement).style.boxShadow = '0px 0px 0px 1px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = '#4d4d4d';
              (e.currentTarget as HTMLElement).style.boxShadow = '0px 0px 0px 1px rgba(0,0,0,0.10)';
            }}
          >
            <ArrowUpRightIcon className="w-4 h-4" />
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Experience Card ──────────────────────────────────────────────────────────

const ExperienceCard: React.FC<{ exp: ResumeExperience; index: number }> = ({ exp, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const color = COMPANY_COLORS[exp.company] ?? '#4d4d4d';
  const tags = EXPERIENCE_TAGS[exp.company] ?? [];

  return (
    <div
      className="relative rounded-xl overflow-hidden transition-all duration-300"
      style={{
        boxShadow: hovered ? CARD_SHADOW_HOVER : CARD_SHADOW,
        transform: hovered ? 'translateY(-2px)' : 'none',
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left accent border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 transition-opacity duration-300"
        style={{ background: color, opacity: hovered ? 1 : 0.4 }}
      />

      <div className="p-6 md:p-8 pl-8 md:pl-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div className="flex items-start gap-3">
            {/* Company color dot */}
            <div
              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
              style={{ background: color }}
            />
            <div>
              <h3
                className="text-xl font-semibold text-brand-dark"
                style={{ letterSpacing: '-0.03em' }}
              >
                {exp.title}
              </h3>
              <p className="text-sm font-medium mt-0.5" style={{ color }}>
                {exp.company}
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#808080' }}>
                {exp.location}
              </p>
            </div>
          </div>

          {/* Period badge */}
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium flex-shrink-0 self-start"
            style={{
              background: '#f5f5f5',
              color: '#4d4d4d',
              fontFamily: '"Geist Mono", monospace',
              letterSpacing: '0.02em',
              boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.06)',
            }}
          >
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#4d4d4d' }}>
              <span
                className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: color, opacity: 0.6 }}
              />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Skill tags */}
        {tags.length > 0 && (
          <div className="mt-5 pt-4 flex flex-wrap gap-1.5" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: `${color}12`,
                  color,
                  border: `1px solid ${color}20`,
                }}
              >
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

const SKILL_STYLES: Record<string, { bg: string; text: string; border: string; font?: string }> = {
  Design: {
    bg: '#ebf5ff',
    text: '#0068d6',
    border: '#bfdbfe',
  },
  Tools: {
    bg: '#171717',
    text: '#ffffff',
    border: '#171717',
    font: '"Geist Mono", monospace',
  },
  Technology: {
    bg: '#f0fdf4',
    text: '#166534',
    border: '#bbf7d0',
    font: '"Geist Mono", monospace',
  },
};

const SkillsSection: React.FC<{ skills: ResumeSkillCategory[] }> = ({ skills }) => (
  <div className="space-y-8">
    {skills.map((cat, i) => {
      const style = SKILL_STYLES[cat.category] ?? SKILL_STYLES.Design;
      return (
        <div key={i}>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[10px] font-medium uppercase tracking-widest"
              style={{ color: '#808080', fontFamily: '"Geist Mono", monospace' }}
            >
              {cat.category}
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.06)' }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, j) => (
              <span
                key={j}
                className="text-xs px-2.5 py-1.5 rounded-md font-medium transition-all duration-150 cursor-default"
                style={{
                  background: style.bg,
                  color: style.text,
                  border: `1px solid ${style.border}`,
                  fontFamily: style.font,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

// ─── Education ────────────────────────────────────────────────────────────────

const EducationCard: React.FC<{ edu: ResumeEducation; index: number }> = ({ edu, index }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="p-5 rounded-xl transition-all duration-200"
      style={{ boxShadow: hovered ? CARD_SHADOW_HOVER : CARD_SHADOW }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className="font-semibold text-sm text-brand-dark"
            style={{ letterSpacing: '-0.01em' }}
          >
            {edu.degree}
          </h3>
          <p className="text-xs mt-1" style={{ color: '#4d4d4d' }}>
            {edu.institution}
          </p>
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded flex-shrink-0"
          style={{
            fontFamily: '"Geist Mono", monospace',
            background: '#f5f5f5',
            color: '#808080',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {edu.period}
        </span>
      </div>
    </div>
  );
};

// ─── Status Card ──────────────────────────────────────────────────────────────

const StatusCard: React.FC<{ contact: typeof resumeData.contact }> = ({ contact }) => (
  <div
    className="p-5 rounded-xl"
    style={{ boxShadow: CARD_SHADOW, background: '#fafafa' }}
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="relative flex h-2 w-2">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#22c55e' }}
        />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
      </span>
      <span className="text-xs font-medium" style={{ color: '#166534' }}>
        Available
      </span>
    </div>
    <p className="text-sm font-semibold text-brand-dark" style={{ letterSpacing: '-0.01em' }}>
      Currently at Google Canada
    </p>
    <p className="text-xs mt-1" style={{ color: '#4d4d4d' }}>
      Sr. Interaction Designer · Toronto
    </p>
    <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <a
        href={`mailto:${contact.email}`}
        className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
        style={{ color: '#0072f5' }}
      >
        <MailIcon className="w-3 h-3" />
        Get in touch
        <ArrowUpRightIcon className="w-3 h-3" />
      </a>
    </div>
  </div>
);

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader: React.FC<{ label: string; title: string }> = ({ label, title }) => (
  <div className="mb-8">
    <span
      className="text-[10px] uppercase tracking-widest font-medium mb-2 block"
      style={{ color: '#808080', fontFamily: '"Geist Mono", monospace' }}
    >
      {label}
    </span>
    <h2
      className="text-2xl md:text-3xl font-semibold text-brand-dark"
      style={{ letterSpacing: '-0.04em' }}
    >
      {title}
    </h2>
    <div className="mt-4 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
  </div>
);

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = '',
}) => {
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

  // Section refs + active tracking
  const sectionRefs = React.useRef<Record<SectionId, HTMLElement | null>>({
    experience: null,
    skills: null,
    education: null,
  });
  const [activeSection, setActiveSection] = React.useState<SectionId | null>(null);

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: SectionId) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white min-h-screen">
      <ScrollProgress />
      <SectionNav activeSection={activeSection} onNav={scrollTo} />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        {/* Identity Hero */}
        <IdentityHero data={resumeData} />

        {/* Stats Bar */}
        <FadeIn delay={100}>
          <div className="my-0" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <StatsBar />
          </div>
        </FadeIn>

        {/* Main two-column layout */}
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-20 items-start">

          {/* ── Left: Experience ─────────────────────────────────── */}
          <div ref={(el) => { sectionRefs.current.experience = el; }}>
            <FadeIn>
              <SectionHeader label="01 · Career" title="Work Experience" />
            </FadeIn>
            <div className="space-y-5">
              {experience.map((exp, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <ExperienceCard exp={exp} index={i} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ── Right: Sidebar ───────────────────────────────────── */}
          <aside className="space-y-12 lg:sticky lg:top-24">

            {/* Status */}
            <FadeIn delay={200}>
              <StatusCard contact={contact} />
            </FadeIn>

            {/* Skills */}
            <div ref={(el) => { sectionRefs.current.skills = el; }}>
              <FadeIn delay={250}>
                <SectionHeader label="02 · Expertise" title="Skills" />
              </FadeIn>
              <FadeIn delay={300}>
                <SkillsSection skills={skills} />
              </FadeIn>
            </div>

            {/* Education */}
            <div ref={(el) => { sectionRefs.current.education = el; }}>
              <FadeIn delay={350}>
                <SectionHeader label="03 · Academic" title="Education" />
              </FadeIn>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <FadeIn key={i} delay={400 + i * 60}>
                    <EducationCard edu={edu} index={i} />
                  </FadeIn>
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
